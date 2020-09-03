import { ApolloError } from 'apollo-server-express';
import { MiddlewareFn } from 'type-graphql';

import { User } from './../entity/User';
import { UserRole } from './../entity/UserRole';
import { MyContext } from '../graphql-types/MyContext';

export const isAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
  if (!context.req.userId) {
    throw new ApolloError('not authenticated');
  }

  return next();
};

export const hasRole: (role: string) => MiddlewareFn<MyContext> = (
  role
) => async ({ context }, next) => {
  if (!context.req.userId) {
    throw new ApolloError('not authenticated');
  }

  const userRole = await UserRole.findOne({ where: { shortCode: role } });
  if (!userRole) {
    throw new ApolloError('User role ' + role + " doesn't exist.");
  }

  const user = await User.findOne(context.req.userId);
  if (user && user.roles.includes(userRole.id)) {
    return next();
  }

  throw new ApolloError('user does not have permission');
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

  const userRole = await UserRole.findOne({ where: { shortCode: role } });
  if (!userRole) {
    throw new ApolloError('User role ' + role + " doesn't exist.");
  }

  const user = await User.findOne(context.req.userId);
  if (user && user.roles.includes(userRole.id)) {
    return next();
  }

  throw new ApolloError('user does not have permission');
};
