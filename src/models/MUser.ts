import  Knex  from 'knex';
import type { IUser } from '../Interfaces/IUser';

export class MUser {
    private db; 

    constructor() {
        this.db = Knex({
            client: 'sqlite3',
            connection: {
                filename: 'db_config.db'
            }
        });

    }
    public async createUser(userName: string, password: string, allowedTraffic: number): Promise<boolean> {
        await this.db('users').insert({
            username: userName,
            password: password,
            allowedTraffic: allowedTraffic
        });
        return true;
    }

    public async getUser(userName: string) {
        return await this.db('users').where('username', userName).first();
    }

    public async getAllUsers() {
        return await this.db('users');
    }

    public async lockUser(userName: string): Promise<boolean> {
        await this.db('users').where('username', userName).update({locked: true});
        return true;
    }

    public async unlockUser(userName: string): Promise<boolean> {
        await this.db('users').where('username', userName).update({locked: false});
        return true;
    }

    public async deleteUser(userName: string): Promise<boolean> {
        await this.db('users').where('username', userName).del();
        return true;
    }

    public async updateUser(id: number, user: IUser): Promise<boolean> {
        await this.db('users').where('id', user.id).update(user);
        return true;
    }
}