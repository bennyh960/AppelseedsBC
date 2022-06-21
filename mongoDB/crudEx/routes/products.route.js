// import { Router } from 'express';
const Router = require("express");
const Product = require("../db/src/models/product");

const productsRouter = Router();

productsRouter.get("/products", getProducts);

async function getProducts(req, res) {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (e) {
    res.status(500).send(e.message);
  }
}

module.exports = productsRouter;
