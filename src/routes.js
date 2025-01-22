// const { Router } = require("express");

import { Router } from "express";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import ProductController from "./app/controllers/ProductController";

// import { v4 } from "uuid";

// import User from "./app/models/User";
// import { password } from "./config/database";

const routes = new Router();

routes.post("/users", UserController.store);
routes.post("/session", SessionController.store);
routes.post("/products", ProductController.store);


    // return response.status(200).json({message: "Hello World"});



// module.exports = routes;
export default routes;