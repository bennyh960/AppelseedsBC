const express = require("express");
require("./db/src/mongoose");
const productsRouter = require("./routes/products.route");
const Product = require("./db/src/models/product");

// * Can be tested in postman under Tasks-app , just need change endpoint to accordingthly

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use("/", productsRouter);

// *+++++++++++++++++ Get methodes +++++++++++++++++++++++++
// app.get("/products", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.send(products);
//   } catch (e) {
//     res.status(500).send(e.message);
//   }
// });

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

app.get("/products/:id", async (req, res) => {
  try {
    const p = Product.findById(req.params.id);
    if (!p) {
      return res.send(404).send();
    }
    res.send(p);
  } catch (e) {
    res.status(500).send(e.message);
  }
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
// *+++++++++++++++++ Delete  methodes +++++++++++++++++++++++++
app.delete("/products", async (req, res) => {
  try {
    const verifyProduct = await Product.findById(req.body.id);
    if (!verifyProduct) {
      throw new Error("Product not found");
    }
    const p = await Product.deleteOne({ _id: req.body.id });
    // p.save();

    res.send(await Product.find());
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.delete("/products-remove", async (req, res) => {
  await Product.deleteMany();
  res.send("Products cart is empty");
});

app.patch("/products/:id", async (req, res) => {
  const validPropertis = ["name", "category", "detailes", "isActive"];
  const reqKeys = Object.keys(req.body);
  const isValid = reqKeys.every((key) => {
    return validPropertis.includes(key);
  });

  if (!isValid) {
    return res.status(404).send("Error update");
  }

  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) {
      return res.status(404).send("product not found error");
    }
    res.send(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// *====================================================
app.listen(port, () => {
  console.log("Server is on port ", port);
});
