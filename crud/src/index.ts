require('dotenv').config();
import express from "express";
import userRoutes from "./routes/user.routes";
import { sequelize } from "./models";
import { logger } from "./utils/logger.utils";

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);

const start = async () => {
  try {
    await sequelize.authenticate();
   logger.info("db connected");

    app.listen(process.env.PORT, () => {
     logger.info("Server running on port 3000");
    });
  } catch (error:any
  ) {
    logger.error(error.message());
  }
};

start();