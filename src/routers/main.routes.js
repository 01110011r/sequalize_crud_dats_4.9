import { Router } from "express";
import { createUser, getUser, userDelete, userUpdate } from "../controller/main.controller.js";

const myRouter=Router();

myRouter.get("/user", getUser);

myRouter.post("/user", createUser);

myRouter.put("/user/:id", userUpdate);

myRouter.delete("/user/:id", userDelete);


export default myRouter;