import mongoose from "mongoose";
await mongoose.connect(
  ""
);

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  hashed_password: { type: String, required: true },
  role: { type: String, required: true }, //phuong - quan - so VH-TT
  ward: { type: String },
  district: { type: String },
  city: { type: String },
  phone: { type: String },
  birthday: { type: Date },
  day_created: { type: Date, default: Date.now() },
});

const User = mongoose.model("User", userSchema);
export default User;
