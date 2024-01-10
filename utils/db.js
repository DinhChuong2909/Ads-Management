// import knexObj from 'knex'

// const knex = knexObj({
//   client: 'mysql2',
//   connection: {
//     host: '127.0.0.1',
//     port: 3306,
//     // port: 8889,
//     user: 'root',
//     password:"",
//     // password: 'root',
//     database: 'qlqc',
//   },
//   pool: { min: 0, max: 7 },
// })

// export default knex

import knexObj from 'knex'

const knex = knexObj({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    connectionlimit: 10,
    queueLimit: 0,
    waitForConnections: true,
  },
  pool: { min: 0, max: 7 },
})

export default knex