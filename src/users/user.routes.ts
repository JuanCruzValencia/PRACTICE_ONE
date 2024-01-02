import { Router } from "express";
import UserController from "./user.controllers";


const router = Router();

router.get("/", UserController.getAll);

router.get("/:id", UserController.getOne);

router.post("/", UserController.register);

router.delete("/:id", UserController.deleteOne);

export default router;