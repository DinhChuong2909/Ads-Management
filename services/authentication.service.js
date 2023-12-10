import db from "../utils/db.js";

/*
{
    id: '1702228082953',
    name: 'Lê Hoàng Sang',
    email: 'lhsang64.contact@gmail.com',
    hashedpassword: '$2a$10$jKTacpCfCT6IgsTFMiyB4.ok3MyT6OHVeHG4mlV48JaZIX4.jnApa',
    dateOfBirth: '12/12/2023',
    phone: '0356021521',
    role: 'cbsovhtt'
  }
*/

export default {
  findAll() {
    return db("accounts").orderBy("id", "asc");
  },
  add(entity) {
    console.log("add entity:", entity);
    return db("accounts").insert(entity);
  },
  findById(id) {
    return db("accounts").where("id", id).first();
  },
  findByEmail(email) {
    return db("accounts").where("email", email).first();
  },
  del(id) {
    return db("accounts").where("id", id).del();
  },
  findFromId(limit, offset) {
    return db("accounts").orderBy("id", "asc").limit(limit).offset(offset);
  },
  async countAll() {
    const list = await db("accounts").count("id as amount");
    return list[0].amount;
  },
};
