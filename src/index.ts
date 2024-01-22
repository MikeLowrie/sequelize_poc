//import 'module-alias/register';
//require('module-alias/register');
import { Sequelize, DataType } from 'sequelize-typescript';
import Person from "./db/models/person.ts";//"@models/person.ts";

//https://codesandbox.io/p/devbox/sqlite3-sequelize-example-starter-lst3n?file=%2Fsrc%2Findex.js
//https://sequelize.org/docs/v6/getting-started/
//https://blog.logrocket.com/using-sequelize-with-typescript/

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

try {
  await sequelize.authenticate();
  console.log("Connected to database.");
} catch (e) {
  console.log("Connection failed: ", e);
}

try {
  // You can sync one model/table at a time with await User.sync()
  //sequelize.addModels([Person]);
  await sequelize.sync({force: true});//, match: /_test$/});
  console.log("Force sync completed on test database.");
  
  let person = Person.build({firstname: "Eric", lastname: "Lowrie"});
  await person.save();
  console.log("Build/saved a Person.");
  let secondperson = await Person.create({firstname: "Amy", lastname: "Lowrie"});
  console.log("Created a Person.");

  console.log("SELECT * FROM Person");
  let allpeople = await Person.findAll();
  console.log(JSON.stringify(allpeople, null, 2));
} catch (e) {
  console.log("Sync failed: ", e);
}

export default sequelize;