import knexObj from "knex";

const knex = knexObj({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    // port: 8889,
    user: "root",
    // password:"",
    password: "root",
    database: "qlqc",
  },
  pool: { min: 0, max: 7 },
});

export default knex;
