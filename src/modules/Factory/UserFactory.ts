import { UserDataAccess } from '../DataAccess/UserDataAccess';
import { UserManager } from '../User/UserManager';

export class UserFactory {
    public static create(classType: string) {
        switch (classType) {
            case 'UserManager':
                return new UserManager(new UserDataAccess());
        }
    }

    private static instance: UserFactory;
}