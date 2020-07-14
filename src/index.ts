import { createTokens } from './auth';
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from './constants';
import 'reflect-metadata';
import { createConnection, getConnectionOptions } from 'typeorm';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import cookieParser from 'cookie-parser';
import { verify } from 'jsonwebtoken';
import addSeconds from 'date-fns/addSeconds';
import addDays from 'date-fns/addDays';

import { AuthResolver } from './resolvers/AuthResolver';
import { VideoResolver } from './resolvers/VideoResolver';
import { User } from './entity/User';

(async () => {
  const app = express();

  app.use(cookieParser());

  const options = await getConnectionOptions(
    process.env.NODE_ENV || 'development'
  );
  await createConnection({ ...options, name: 'default' });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [AuthResolver, VideoResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res }),
    playground: {
      settings: {
        'request.credentials': 'include',
      },
    },
  });

  app.use(async (req, res, next) => {
    const accessToken = req.cookies['access-token'];
    const refreshToken = req.cookies['refresh-token'];
    if (!accessToken && !refreshToken) {
      return next();
    }
    try {
      const data = verify(accessToken, ACCESS_TOKEN_SECRET) as {
        userId: number;
      };
      req.userId = data.userId;
      return next();
    } catch {}

    if (!refreshToken) {
      next();
    }

    let data;

    try {
      data = verify(refreshToken, REFRESH_TOKEN_SECRET) as {
        userId: number;
        count: number;
      };
    } catch {
      return next();
    }

    const user = await User.findOne(data.userId);
    if (!user || user.count !== data.count) {
      return next();
    }
    const tokens = createTokens(user);

    res.cookie('refresh-token', tokens.refreshToken, {
      expires: addDays(new Date(), 7),
    });

    res.cookie('access-token', tokens.accessToken, {
      expires: addSeconds(new Date(), 15),
    });
    req.userId = data.userId;

    next();
  });

  apolloServer.applyMiddleware({ app, cors: false });
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/graphql`);
  });
})();
