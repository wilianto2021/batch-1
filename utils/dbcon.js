import mysql from "mysql2/promise";

export const dbPool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "kelasdotcom",
});
