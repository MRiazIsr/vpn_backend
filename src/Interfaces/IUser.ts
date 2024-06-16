export interface IUser {
    id?: number;
    userName?: string;
    password?: string;
    isAdmin?: boolean;
    locked?: boolean;
    allowedTraffic?: number;
    message?: string;
  }
  