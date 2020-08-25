import { User } from './../entity/User';
import { MiddlewareFn } from 'type-graphql';
import { ApolloError } from 'apollo-server-core';
import { MyContext } from '../graphql-types/MyContext';

export const isAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
  if (!context.req.userId) {
    throw new ApolloError('not authenticated');
  }

  return next();
};

export const hasRole: (role: string) => MiddlewareFn<MyContext> = (
  role
) => async ({ context, args }, next) => {
  if (!context.req.userId) {
    throw new ApolloError('not authenticated');
  }
  console.log('args', args);

  const user = await User.findOne(context.req.userId);
  if (user && user.roles.includes(role)) {
    return next();
  }
  return next();
};

export const hasRoleOrOwner: (role: string) => MiddlewareFn<MyContext> = (
  role
) => async ({ context, args }, next) => {
  const userId = context.req.userId;
  if (!userId) {
    throw new ApolloError('not authenticated');
  }
  if (args.id && args.id === userId) {
    return next();
  }

  const user = await User.findOne(context.req.userId);
  if (user && user.roles.includes(role)) {
    return next();
  }

  throw new ApolloError('user does not have permission');
};
