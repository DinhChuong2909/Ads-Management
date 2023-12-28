import db from "../utils/db.js";

export default {
  findAllQuan() {
    return db("quan").orderBy("ID", "asc");
  },
  findFromIdQuan(limit, offset) {
    return db("quan").orderBy("ID", "asc").limit(limit).offset(offset);
  },
  async countAllQuan() {
    const list = await db("quan").count("ID as amount");
    return list[0].amount;
  },
  findAllPhuong() {
    return db("phuong").orderBy("ID", "asc");
  },
  findFromIdPhuong(id, limit, offset) {
    return db("phuong").where('ThuocQuan', id).orderBy("ID", "asc").limit(limit).offset(offset);
  },
  async countAllPhuong(id) {
    const list = await db("phuong").where('ThuocQuan', id).count("ID as amount");
    return list[0].amount;
  },
  add(entity) {
    return db("quan").insert(entity);
  },
  //   findById(id) {
  //     return db("quan").where("ID", id).first();
  //   },
  //   del(id) {
  //     return db("quan").where("ID", id).del();
  //   },
  //   findFromId(limit, offset) {
  //     return db("quan").orderBy("ID", "asc").limit(limit).offset(offset);
  //   },
  //   async countAll() {
  //     const list = await db("quan").count("ID as amount");
  //     return list[0].amount;
  //   },
};
