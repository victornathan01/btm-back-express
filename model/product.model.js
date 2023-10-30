import { Schema, model } from "mongoose";

const productSchema = new Schema({
  title: {
    type: String,
    enum: [
      "Old Towne",
      "Mega Olde Towne",
      "Bullnose Coping",
      "Remodel Bullnose Coping",
      "4x8 Bricks",
      "Turf Block",
      "Travertine",
      "Tile",
    ],
    required: true  },
    description: { type: String, required: true },
    color: { type: String, required:true },
    thickness: { type: String, required:true },
    dimensions: { type: String, required:true },
    photo: { type: String, default: "https://www.tremron.com/images/products_page/ultra-combo.jpg" },
    status: { type: Boolean, default: true}
},
{ timestamps: true }
);

export default model("Product", productSchema);
