import db from "../utils/db.js";

export default {
  findAll() {
    return db("phuong").orderBy("ID", "asc");
  },
  add(entity) {
    return db("phuong").insert(entity);
  },
  findById(id) {
    return db("phuong").where("ID", id).first();
  },
  findPhuongThuocQuan(idQuan) {
    return db("phuong").where("ThuocQuan", idQuan);
  },
  del(id) {
    return db("phuong").where("ID", id).del();
  },
  findFromId(limit, offset) {
    return db("phuong").orderBy("ID", "asc").limit(limit).offset(offset);
  },
  async countAll() {
    const list = await db("phuong").count("ID as amount");
    return list[0].amount;
  },
};
