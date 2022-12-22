import db from "../db/connection.js";
import shiba from "./shiba.json" assert { type: "json" };
import husky from "./husky.json" assert { type: "json" };
import pug from "./pug.json" assert { type: "json" };
import corgi from "./corgi.json" assert { type: "json"};

import Shiba from "../models/shiba.js";
import Husky from "../models/husky.js";
import Pug from "../models/pug.js";
import Corgi from "../models/corgi.js";


const insertData = async () => {
  await db.dropDatabase();

  await Corgi.create(corgi);
  await Pug.create(pug);
  await Husky.create(husky);
  await Shiba.create(shiba);

  await db.close();
};

insertData();