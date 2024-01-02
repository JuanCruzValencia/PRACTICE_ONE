import express from "express";
import "dotenv/config";
import Router from "./config/routers";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", Router.UserRouter);

app.listen(PORT, () => {
  console.log(`server up on port ${PORT}`);
});
