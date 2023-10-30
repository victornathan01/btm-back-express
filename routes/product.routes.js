import express from "express";
import productModel from "../model/product.model.js";

const productRoute = express.Router();

productRoute.post("/create-product", async (req, res) => {
  try {
    const form = req.body;
    const newProduct = await productModel.create(form);
    return res.status(200).json(newProduct);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

productRoute.get("/all", async (req, res) => {
  try {
    const allProducts = await productModel.find({ status: true });
    return res.status(200).json(allProducts);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

productRoute.get("/get-wine/:id", async (req, res) => {
  try {
    const id_product = req.params.id;
    const product = await productModel.findById(id_product);
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

productRoute.get("/get-all/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const categories = await productModel.find({ category: category });
    return res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

productRoute.put("/update/;id"),
  async (req, res) => {
    try {
      const id_product = req.params.id;
      const data = req.body;
      const config = { new: true, runValidators: true };
      const product = await productModel.findByIdAndUpdate(
        id_product,
        data,
        config
      );
      return res.status(200).json(product);
    } catch (error) {
      console.log(error);
      return res(500).json(error);
    }
  };

productRoute.delete("/delete/:id_product", async (req, res) => {
  try {
    const id_product = req.params.id_product;
    const deletedProduct = await productModel.findByIdAndUpdate(id_product, {
      status: false,
    });
    return res.status(200).json("Product deleted.");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

export default productRoute;
