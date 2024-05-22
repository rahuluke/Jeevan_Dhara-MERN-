import { Schema, models, model } from "mongoose";
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "first name is required"],
    },
    region: {
        type: String,
        required: [true, "email is required"]
    },
    age:{
        type: Number
    }, 
    bloodType: {
        type: String,
        required: [true, "blood type is required"]
    },
    quantity: {
        type: Number,
    }
  },
  { timestamps: true }
);

const Doners = models.doners || model("doners", userSchema);

export default Doners;
