import mongoose, { Document, Schema } from "mongoose";

export interface User extends Document {
  userName: string;
  password: string;
  status: string;
}

enum Status {
  "ACTIVE",
  "INACTIVE",
  "DELETED",
}

const userSchema = new Schema<User>(
  {
    userName: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    status: { type: String, enum: Status, default: "ACTIVE", required: true },
  },
  { timestamps: true }
);

const UserModel = mongoose.model<User>("User", userSchema);

export default UserModel;
