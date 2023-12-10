import db from "../utils/db.js";

export default {
  findAll() {
    return db("accounts").orderBy("id", "asc");
  },
  add(entity) {
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
