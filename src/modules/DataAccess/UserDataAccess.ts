import type { IUserDataAccess } from "../User/IUserDataAccess";
import { MUser } from "../../models/MUser";
import type { IUser } from "../../Interfaces/IUser";

export class UserDataAccess implements IUserDataAccess {

    private MUser: MUser;

    constructor() {
        this.MUser = new MUser();
    }

    async createUser(userName: string, password: string, allowedTraffic: number): Promise<boolean> {
        return await this.MUser.createUser(userName, password, allowedTraffic);
    }

    async getUser(id: number): Promise<IUser>{
        return await this.MUser.getUser(id);
    }

    async getAllUsers(): Promise<IUser[]>{
        return await this.MUser.getAllUsers();
    }

    async updateUser(user: IUser): Promise<boolean> {
        return await this.MUser.updateUser(user);
    }

    async deleteUser(userName: string): Promise<boolean> {
        return await this.MUser.deleteUser(userName);
    }
}