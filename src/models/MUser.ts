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

    public async getUser(id: number): Promise<IUser> {
        return await this.db('users').where('username', id).first();
    }

    public async getAllUsers(): Promise<IUser[]>{
        return await this.db('users');
    }

    public async updateUser(user: IUser): Promise<boolean> {
        await this.db('users').where('id', user.id).update(user);
        return true;
    }
    
    public async deleteUser(userName: string): Promise<boolean> {
        await this.db('users').where('username', userName).del();
        return true;
    }
}