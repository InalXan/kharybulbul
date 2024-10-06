import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
// database connection
import connection_db from "./db/db.js";
// router 
import router_get from "./router/index_get.js";
import router_post from "./router/index_post.js";
import router_delete from "./router/index_delete.js";

const PORT = 5000;
const a = express();

a.use(cors({ origin: '*' }));
a.use(bodyParser.json());
a.use(express.json());
a.use(bodyParser.urlencoded({extended: false}));
// image files
a.use('./uploads', express.static('uploads'))
// routing 
a.use(router_get);
a.use(router_post);
a.use(router_delete);

a.listen(PORT, () =>  {
  // server 
  console.log(`http://localhost:${PORT}` + " " + "running");
  // database connection
    connection_db()
})
