import type { IUserDataAccess } from './IUserDataAccess';
import type { IUser } from '../../Interfaces/IUser';

export class UserManager {

    private dataAccess: IUserDataAccess;

    constructor(userDataAccess: IUserDataAccess) {
        this.dataAccess = userDataAccess;
    }

    public getUser = async (id: number): Promise<IUser> => {
        try {
            return await this.dataAccess.getUser(id);
        } catch (error) {
            throw error;
        }
    }

    public getAllUsers = async (): Promise<IUser[]> => {
        try {
            return await this.dataAccess.getAllUsers();
        } catch (error) {
            throw error;
        }
    }

    public createUser = async (user: IUser): Promise<boolean> => {
        const { userName, password, allowedTraffic } = user;

        try {
            return await this.dataAccess.createUser(userName, password, allowedTraffic);
        } catch (error) {
            throw error;
        }
    }

    public updateUser = async (user: IUser): Promise<boolean> => {
        try {
            return await this.dataAccess.updateUser(user);
        } catch (error) {
            throw error;
        }
    }

    public deleteUser = async (userName: string): Promise<boolean> => {
        try {
            return await this.dataAccess.deleteUser(userName);
        } catch (error) {
            throw error;
        }
    }
}