import db from "../utils/db.js";

export default {
  findAll() {
    return db("quan").orderBy("ID", "asc");
  },
  add(entity) {
    return db("quan").insert(entity);
  },
  findById(id) {
    return db("quan").where("ID", id).first();
  },
  del(id) {
    return db("quan").where("ID", id).del();
  },
  findFromId(limit, offset) {
    return db("quan").orderBy("ID", "asc").limit(limit).offset(offset);
  },
  async countAll() {
    const list = await db("quan").count("ID as amount");
    return list[0].amount;
  },
};
