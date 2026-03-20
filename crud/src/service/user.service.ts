import { User } from "../models";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { logger } from "../utils/logger.utils";

export const register = async (data: any) => {
  const { name, email, password } = data;

  const existing = await User.findOne({ where: { email } });
  if (existing) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  logger.info("User signed in");
  return user;
};

export const login = async (data: any) => {
  const { email, password } = data;

  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  const accesToken = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_KEY as string,
    { expiresIn: "7d" }
  );
  logger.info("User logged in");

  const refreshToken = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_KEY as string,
    { expiresIn: "15m" }
  );
  logger.info("User logged in");


  return { user, accesToken, refreshToken };
};