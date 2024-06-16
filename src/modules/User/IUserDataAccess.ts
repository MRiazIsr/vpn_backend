import type { IUser } from "../../Interfaces/IUser";

export interface IUserDataAccess {
    getUser(id: number): Promise<IUser>;
    getAllUsers(): Promise<IUser[]>;
    createUser(userName: string, password: string, allowedTraffic: number): Promise<boolean>;
    updateUser(user: IUser): Promise<boolean>;
    deleteUser(userName: string): Promise<boolean>;
}