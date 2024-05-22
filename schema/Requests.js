import { Schema, models, model } from "mongoose";
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "first name is required"],
    },
    lastName: {
      type: String,
      required: [true, "last name is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    phone:{
        type: Number
    }, 
    bloodType: {
        type: String,
        required: [true, "blood type is required"]
    },
    message: {
        type: String,
    }
  },
  { timestamps: true }
);

const Requests = models.requests || model("requests", userSchema);

export default Requests;
