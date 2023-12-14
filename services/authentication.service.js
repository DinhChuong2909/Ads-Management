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
  updatePassword(id, newPassword) {
    return db("accounts")
      .where("id", id)
      .update({ hashed_password: newPassword });
  },
  updateName(id, newName) {
    return db("accounts").where("id", id).update({ name: newName });
  },
  updateDOB(id, newBirth) {
    return db("accounts").where("id", id).update({ date_of_birth: newBirth });
  },
  updateEmail(id, newEmail) {
    return db("accounts").where("id", id).update({ email: newEmail });
  },
  updatePhone(id, newPhone) {
    return db("accounts").where("id", id).update({ phone: newPhone });
  },
  updateOtp(id, newOtp) {
    return db("accounts").where("id", id).update({ otp: newOtp });
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
