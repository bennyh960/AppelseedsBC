const express = require("express");
require("./db/src/mongoose");
const Product = require("./db/src/models/product");

// * Can be tested in postman under Tasks-app , just need change endpoint to accordingthly

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

// *+++++++++++++++++ Get methodes +++++++++++++++++++++++++
app.get("/products", (req, res) => {
  Product.find({})
    .then((products) => {
      res.send(products);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
});

app.get("/products/active", (req, res) => {
  //   User.find({ _id: req.params.userID }) // return array with the found obj
  Product.find({ isActive: false })
    .then((product) => {
      if (!product) {
        return res.status(404).send();
      }
      res.send(product);
    })
    .catch((e) => {
      res.status(500).send(e.message);
      //   console.log(e);
    });
});

app.get("/products/price", (req, res) => {
  //   User.find({ _id: req.params.userID }) // return array with the found obj
  Product.find({ "detailes.price": { $gte: 100, $lt: 150 } })
    .then((product) => {
      if (!product) {
        return res.status(404).send();
      }
      res.send(product);
      //   console.log(Product.detailes);
    })
    .catch((e) => {
      res.status(500).send(e.message);
      //   console.log(e);
    });
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

app.post("/products", (req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then(() => {
      res.status(201).send(product);
    })
    .catch((e) => {
      res.status(400).send(e.message);
    });
});

// *====================================================
app.listen(port, () => {
  console.log("Server is on port ", port);
});
