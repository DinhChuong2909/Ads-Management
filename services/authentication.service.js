import db from "../utils/db.js";

export default {
  findAll() {
    return db("accounts").orderBy("ID", "asc");
  },
  add(entity) {
    return db("accounts").insert(entity);
  },
  findById(id) {
    return db("accounts").where("ID", id).first();
  },
  findByEmail(email) {
    return db("accounts").where("Email", email).first();
  },
  updatePassword(id, newPassword) {
    return db("accounts")
      .where("ID", id)
      .update({ Hashed_password: newPassword });
  },
  updateName(id, newName) {
    return db("accounts").where("ID", id).update({ Name: newName });
  },
  updateDOB(id, newBirth) {
    return db("accounts").where("ID", id).update({ Date_of_birth: newBirth });
  },
  updateEmail(id, newEmail) {
    return db("accounts").where("ID", id).update({ Email: newEmail });
  },
  updatePhone(id, newPhone) {
    return db("accounts").where("ID", id).update({ Phone: newPhone });
  },
  updateOtp(id, newOtp) {
    return db("accounts").where("ID", id).update({ OTP: newOtp });
  },
  del(id) {
    return db("accounts").where("ID", id).del();
  },
  findFromId(limit, offset) {
    return db("accounts").orderBy("ID", "asc").limit(limit).offset(offset);
  },
  async countAll() {
    const list = await db("accounts").count("ID as amount");
    return list[0].amount;
  },
};
