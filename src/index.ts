import sequelize from './db/db.ts';
import { Person, License } from "./db/models/index.ts";//"@models/person.ts"; 

//https://codesandbox.io/p/devbox/sqlite3-sequelize-example-starter-lst3n?file=%2Fsrc%2Findex.js
//https://sequelize.org/docs/v6/getting-started/
//https://blog.logrocket.com/using-sequelize-with-typescript/

try {
  await sequelize.authenticate();
  console.log("Connected to database.");
} catch (e) {
  console.log("Connection failed: ", e);
}

try { 
  // You can sync one model/table at a time with await User.sync()
  //sequelize.addModels([Person]);
  sequelize.model(License).belongsTo(Person);

  await sequelize.sync({force: true});//, match: /_test$/});
  console.log("Force sync completed on test database.");
  
  let person = Person.build({firstname: "Eric", lastname: "Lowrie", birthday: "1990-05-25 00:12:34"});
  await person.save();
  console.log("Build/saved a Person.");
  let secondperson = await Person.create({firstname: "Firstname", lastname: "Lastname", birthday: "1980-01-01 00:00:00"});
  console.log("Created a Person.");

  let firstlicense = License.build(
    { 
      licensenumber: 123, 
      licenseholder: person.firstname + " " + person.lastname, 
      PersonId: 1,
      licensetype: "Driver License",
      PersonFirstname: person.firstname
    }
  );
  await firstlicense.save();
  await person.save();

  
  console.log("SELECT * FROM Person");
  let allpeople = await Person.findAll();
  console.log(JSON.stringify(allpeople, null, 2));
  
  console.log('-------------------- LICENSE TIME ---------------------');
  console.log("SELECT * FROM License");
  let licenses = await License.findAll();
  console.log(JSON.stringify(licenses, null, 2));
} catch (e) {
  console.log("Sync failed: ", e);
} finally {
  sequelize.close();
}

export default sequelize;