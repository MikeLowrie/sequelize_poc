import { Sequelize } from "sequelize-typescript";
import { Person } from "./models/index.ts";
import License from "./models/license.ts";

const sequelize = new Sequelize({
    database: 'erictest',
    host: 'localhost',
    dialect: 'sqlite',
    username: 'root',
    password: '',
    storage: './db/erictest.db',
    models: [Person, License]
    //models: [__dirname] //[__dirname + '/models'], // or [Player, Team],
  });

  export default sequelize;