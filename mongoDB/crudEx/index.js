const express = require("express");
require("./db/src/mongoose");
const Product = require("./db/src/models/product");

// * Can be tested in postman under Tasks-app , just need change endpoint to accordingthly

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

// *+++++++++++++++++ Get methodes +++++++++++++++++++++++++
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.get("/products/active", async (req, res) => {
  //   User.find({ _id: req.params.userID }) // return array with the found obj
  try {
    const product = await Product.find({ isActive: false });
    if (!product) {
      return res.status(404).send();
    }
    res.send(product);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.get("/products/price", async (req, res) => {
  //   User.find({ _id: req.params.userID }) // return array with the found obj
  try {
    const product = await Product.find({ "detailes.price": { $gte: 10, $lt: 30 } });

    if (!product) {
      return res.status(404).send();
    }
    res.send(product);
  } catch (error) {
    res.status(500).send(e.message);
  }
});

app.get("/products/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((p) => {
      if (!p) {
        return res.send(404).send();
      }
      res.send(p);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
});
// *+++++++++++++++++ Post  methodes +++++++++++++++++++++++++

app.post("/products", async (req, res) => {
  try {
    const product = new Product(req.body);

    await product.save();
    res.status(201).send(product);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// *====================================================
app.listen(port, () => {
  console.log("Server is on port ", port);
});
