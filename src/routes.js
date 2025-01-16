// const { Router } = require("express");

import { Router } from "express";

import { v4 } from "uuid";

import User from "./app/models/User";
// import { password } from "./config/database";

const routes = new Router();

routes.get("/", async (request, response) => {
    const user = await User.create({
        id: v4(),
        name: "Fernando",
        email: "fernandomso@email.com",
        password_hash: "brasil"
    });

return response.status(201).json(user);
    
    // return response.status(200).json({message: "Hello World"});

});

// module.exports = routes;
export default routes;