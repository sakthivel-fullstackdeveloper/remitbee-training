import { Request, Response } from "express";
import * as userService from "../service/user.service";
import {logger} from "../utils/logger.utils";

export const register = async (req: Request, res: Response) => {
  try {
    const user = await userService.register(req.body);

    res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error: any) {
    logger.error(error.message);
    res.status(400).json({
      message: error.message,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { user, accesToken , refreshToken } = await userService.login(req.body);
    const data = user.toJSON();
    const resData = { "email": data.email, "id": data.id, "name": data.name };
    res.json({
      message: "Login successful",
      accesToken,
      refreshToken,
      user: resData,
    });
  } catch (error: any) {
    logger.error(error.message);
    res.status(400).json({
      message: error.message,
    });
  }
};