import mongoose, { Document, Schema } from "mongoose";

export interface Role extends Document {
  name: string;
  status: string;
}

enum Status {
  "ACTIVE",
  "INACTIVE",
  "DELETED",
}

const roleSchema = new Schema<Role>(
  {
    name: { type: String, unique: true, required: true },
    status: { type: String, enum: Status, default: "ACTIVE", required: true },
  },
  { timestamps: true }
);
const RoleModel = mongoose.model<Role>("Role", roleSchema);

export default RoleModel;
