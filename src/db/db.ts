import { Sequelize } from "sequelize-typescript";
import { Person } from "./models/index.ts";

const sequelize = new Sequelize({
    database: 'erictest',
    host: 'localhost',
    dialect: 'sqlite',
    username: 'root',
    password: '',
    storage: './db/erictest.db',
    models: [Person]
    //models: [__dirname] //[__dirname + '/models'], // or [Player, Team],
  });

  export default sequelize;