import { Schema, model } from "mongoose";

const phoneRegex = /^(?:\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18 },
    telephone: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (phone) {
          return phoneRegex.test(phone);
        },
        message: "Invalid phone number",
      },
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, // match = regex
    },

    profilePicture: {
      type: String,
      default: "https://cdn.wallpapersafari.com/92/63/wUq2AY.jpg",
    },
    history_inquiries: [
      {
        type: Schema.Types.ObjectId,
        ref: "Inquirie",
        status: {
          type: String,
          enum: ["Available", "Unavailable"],
          required: true,
        },
      },
    ],
    history_projects: [
      {
        type: Schema.Types.ObjectId,
        ref: "Project",
        status: {
          type: String,
          enum: ["Available", "Unavailable"],
          required: true,
        },
      },
    ],
    active: {
      type: Boolean,
      default: true,
    },

    passwordHash: { type: String, required: true },
  },
  // o que mais eu posso colocar nas opcoes do schema?
  { timestamps: true }
);

export default model("User", userSchema);
