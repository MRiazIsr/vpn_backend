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

    async getUser(userName: string) {
        return await this.MUser.getUser(userName);
    }

    async getAllUsers() {
        return await this.MUser.getAllUsers();
    }

    async lockUser(userName: string): Promise<boolean> {
        return await this.MUser.lockUser(userName);
    }

    async unlockUser(userName: string): Promise<boolean> {
        return await this.MUser.unlockUser(userName);
    }

    async deleteUser(userName: string): Promise<boolean> {
        return await this.MUser.deleteUser(userName);
    }

    async updateUser(id: number, user: IUser): Promise<boolean> {
        return await this.MUser.updateUser(id, user);
    }

}