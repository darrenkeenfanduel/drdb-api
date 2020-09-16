import { Query, Resolver } from 'type-graphql';
import { UserProfile } from '../entity/UserProfile';

@Resolver(UserProfile)
export class UserProfileResolver {
  @Query(() => [UserProfile])
  userProfiles(): Promise<UserProfile[]> {
    return UserProfile.find({ relations: ['user'] });
  }
}
