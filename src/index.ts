import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import 'dotenv-safe/config';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import session from 'express-session';
import Redis from 'ioredis';
import connectRedis from 'connect-redis';

import { UserResolver } from './resolvers/UserResolver';
import { COOKIE_NAME, __prod__ } from './constants';
import { User } from './entity/User';
import path from 'path';
import { Resource } from './entity/Resource';
import { ResourceResolver } from './resolvers/ResourceResolver';
import { createUserLoader } from './utils/createUserLoader';
import { UserProfile } from './entity/UserProfile';
import { UserProfileResolver } from './resolvers/UserProfileResolver';

(async () => {
  // const options = await getConnectionOptions(
  //   process.env.NODE_ENV || 'development'
  // );
  const conn = await createConnection({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    logging: true,
    synchronize: true,
    entities: [User, Resource, UserProfile],
    migrations: [path.join(__dirname, './migrations/*')],
  });

  conn.runMigrations();

  const app = express();

  const RedisStore = connectRedis(session);
  const redis = new Redis(process.env.REDIS_URL);

  app.set('trust proxy', 1);

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: 'lax', //csrf
        secure: __prod__, // Only in HTTPS
        domain: __prod__ ? '.darrenkeen.co.uk' : undefined,
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET,
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, ResourceResolver, UserProfileResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
      redis,
      userLoader: createUserLoader(),
    }),
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(parseInt(process.env.PORT), () => {
    console.log(`Server started on localhost:${process.env.PORT}`);
  });
})();
