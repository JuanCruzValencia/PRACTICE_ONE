import { User } from "../interfaces";
import UserService from "./user.servcives";
import { Request, Response } from "express";

class UserControllers {
  async getAll(req: Request, res: Response) {
    const allUsers = await UserService.getAll();

    return res.status(200).send(allUsers);
  }
  async getOne(req: Request, res: Response) {
    const { id } = req.params;

    const user = await UserService.getOne(Number(id));

    return res.status(200).send(user);
  }

  async register(req: Request, res: Response) {
    const user = req.body;

    const newUser = {
      ...user,
    };

    const registerUser = await UserService.register(newUser);

    return res.status(200).send({ payload: "USER REGISTERED SUCCESFULY" });
  }

  async deleteOne(req: Request, res: Response) {
    const { id } = req.params;

    await UserService.deleteOne(Number(id));

    return res.status(200).send({ payload: `USER ${id} DELETED` });
  }
}

const UserController = new UserControllers();

export default UserController;
