import Sequelize from "sequelize";

import configDatabase from "../config/database";

import user from "../app/models/user";


const models = [user];



class Database {
    constructor() {
        this.init();

    }

    init() {
        this.connection = new Sequelize(configDatabase);
        models.map((model) => model.init(this.connection));
    }
}

export default new Database();