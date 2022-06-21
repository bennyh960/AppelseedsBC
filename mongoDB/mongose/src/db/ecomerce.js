const mongoose = require("mongoose");
const validator = require("validator");

// * Create connection to DB
mongoose.connect("mongodb://127.0.0.1:27017/ecommerc-site2", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

// another methode to connect mongo
// mongoose.connect('mongodb://127.0.0.1/AppleSeedsTestDB', (error, mongoConnectionInstance) => {
//   if (error) throw Error('Mongoose Connection!!, Error: ' + error);
//   if (!process.env.NODE_ENV) {
//     const { host, port, name } = mongoConnectionInstance;
//     console.log({ host, port, name });
//   }
// });
const details = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    minlength: 10,
  },
  price: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) {
        throw new Error("Price cant be negative number");
      }
    },
  },
  discount: {
    type: Number,
    default: 0,
  },

  images: {
    type: Array,
    required: true,
    validate(value) {
      if (value.length < 2) {
        throw new Error("Please upload at least 2 images ");
      }
    },
  },
  phone: {
    type: String,
    validate(value) {
      validator.isMobilePhone(value, "he-IL");
    },
  },
  DateAdded: {
    type: String,
    default: new Date(),
  },
});

const Product = mongoose.model("Product", {
  name: {
    type: String,
    // unique: true,
    required: true,
  },
  category: {
    type: String,
  },
  isActive: {
    type: Boolean,
  },
  detailes: {
    type: details,
  },
});

const Computer = new Product({
  name: "Daxcsc225",
  category: "Laptop",
  isActive: true,
  detailes: {
    description: "think pad good",
    price: 22,
    images: [1, 2, 3],
    phone: "+922524874601",
  },
});

Computer.save()
  .then(() => {
    console.log(Computer);
  })
  .catch((err) => {
    console.log("Error:", err);
  });

//   uniq name -work
// require -work
