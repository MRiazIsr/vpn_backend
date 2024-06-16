import type { Request, Response } from "express";
import { UserFactory } from "../modules/Factory/UserFactory";
import type { IUser } from "../Interfaces/IUser";
import type { IError } from "../Interfaces/IError";
import { error } from "console";

export class User {

  private static error: IError;

  constructor() {
    User.error = { statusCode: 500, error: "Unknown error"};
  }

  public static get = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const userManager = UserFactory.create("UserManager");
    
    if (!userManager) {
      const error: IError = { statusCode: 500, error: "Manager not found"};
      throw error;
    }

    try {
      const user: IUser = await userManager.getUser(Number(id));
      if (!user) {
        this.error = { statusCode: 404, error: "User not found"};
        throw this.error;
      }
      res.json(user);
    } catch (error: unknown) {

      if (error instanceof Error) {
        this.error = { statusCode: 500, error: error.message};
      }

      throw this.error;

    }
  }

  public static getAll = async (req: Request, res: Response): Promise<void> => {
    const userManager = UserFactory.create("UserManager");
    
    if (!userManager) {
      const error: IError = { statusCode: 500, error: "Manager not found"};
      throw error;
    }

    try {
      const users: IUser[] = await userManager.getAllUsers();
      res.json(users);
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.error = { statusCode: 500, error: error.message};
      }
  
      throw this.error;
    }
  }

  public static create = async (req: Request, res: Response): Promise<void> => {
    const user: IUser = req.body;
    const userManager = UserFactory.create("UserManager");
    
    if (!userManager) {
      const error: IError = { statusCode: 500, error: "Manager not found"};
      throw error;
    }
  
    try {
      await userManager.createUser(user);
      res.status(201).json({ message: "User created successfully" });
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.error = { statusCode: 500, error: error.message};
      }
  
      throw this.error;
    }
  }

  public static update = async (req: Request, res: Response): Promise<void> => {
    const user: IUser = req.body;
    const userManager = UserFactory.create("UserManager");
    
    if (!userManager) {
      const error: IError = { statusCode: 500, error: "Manager not found"};
      throw error;
    }
  
    try {
      await userManager.updateUser(user);
      res.status(200).json({ message: "User updated successfully" });
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.error = { statusCode: 500, error: error.message};
      }
  
      throw this.error;
    }
  }

  public static delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.body;
    const userManager = UserFactory.create("UserManager");
    
    if (!userManager) {
      const error: IError = { statusCode: 500, error: "Manager not found"};
      throw error;
    }
  
    try {
      await userManager.deleteUser(id);
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.error = { statusCode: 500, error: error.message};
      }
  
      throw this.error;
    }
  }
}
