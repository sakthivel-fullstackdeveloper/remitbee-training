import express from "express";
import { register } from "../controller/user.controller";
import { login } from "../controller/user.controller";
import { body } from "express-validator";
import { validate } from "../middlewares/validate.middleware";
const router = express.Router();


router.post("/login",
  [
    body("email").isEmail().withMessage("Valid email required"),
    body("password").notEmpty().withMessage("Password required"),
  ],
  validate,
  login
);



router.post("/register", register);

export default router;