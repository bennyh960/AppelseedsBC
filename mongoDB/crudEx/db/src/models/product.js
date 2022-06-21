const mongoose = require("mongoose");
const validator = require("validator");

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
        console.log(value);
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
    default: true,
  },
  detailes: {
    type: details,
  },
});

module.exports = Product;
