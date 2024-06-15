import type { IUser } from "../../Interfaces/IUser";

export interface IUserDataAccess {
    createUser(userName: string, password: string, allowedTraffic: number): Promise<boolean>;
    getUser(userName: string): Promise<IUser>;
    getAllUsers(): Promise<IUser[]>;
    lockUser(userName: string): Promise<boolean>;
    unlockUser(userName: string): Promise<boolean>;
    deleteUser(userName: string): Promise<boolean>;
    updateUser(id: number, user: IUser): Promise<boolean>;
}