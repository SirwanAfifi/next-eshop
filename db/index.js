import * as mysql from "mysql2";
import * as util from "util";

let connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

const connect = util.promisify(connection.connect).bind(connection);
const query = util.promisify(connection.query).bind(connection);

export { connect, query };
