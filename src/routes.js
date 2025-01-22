// const { Router } = require("express");

import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import ProductController from "./app/controllers/ProductController";

// import { v4 } from "uuid";

// import User from "./app/models/User";
// import { password } from "./config/database";

const routes = new Router();

const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/session", SessionController.store);
routes.post("/products", upload.single("file"), ProductController.store);
routes.get("/products", ProductController.index);



    // return response.status(200).json({message: "Hello World"});



// module.exports = routes;
export default routes;