import { Schema, models, model } from "mongoose";
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = models.users || model("users", userSchema);

export default User;
