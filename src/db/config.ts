import { Sequelize } from 'sequelize-typescript';
import Person from "./models/person.ts";//"@models/person.ts";

const sequelizeConnection = new Sequelize({
  database: 'erictest',
  host: 'localhost',
  dialect: 'sqlite',
  username: 'root',
  password: '',
  storage: './db/erictest.db',
  models: [Person]
  });

export default sequelizeConnection;