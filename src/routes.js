// const { Router } = require("express");

import { Router } from "express";
import UserController from "./app/controllers/UserController";

// import { v4 } from "uuid";

// import User from "./app/models/User";
// import { password } from "./config/database";

const routes = new Router();

routes.post("/users", UserController.store);


    // return response.status(200).json({message: "Hello World"});



// module.exports = routes;
export default routes;