export interface IUser {
    id?: number;
    username: string;
    password: string;
    isAdmin?: boolean;
    locked?: boolean;
    traffic?: number;
  }
  