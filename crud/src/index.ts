import express, { Request, Response } from "express";
import sequelize from "./config/database";
const app = express();
const PORT = 3000;

sequelize.authenticate()
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});