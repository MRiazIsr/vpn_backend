import type { IUserDataAccess } from './IUserDataAccess';
import type { IUser } from '../../Interfaces/IUser';

export class UserManager {

    private userDataAccess: IUserDataAccess;

    constructor(userDataAccess: IUserDataAccess) {
        this.userDataAccess = userDataAccess;
    }

    public static createUser = async (user: IUser) => {
        try {
            // Create user
        } catch (error) {
            // Handle error
        }
    }
}