import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc Fetch all products
// @route Get /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});


// @desc Fetch all products for women
// @route Get /api/products/women
// @access Public
const getProductsByFemale = asyncHandler(async (req, res) => {
  const products = await Product.find({"gender": "female"});
  if (products) {
    res.json(products);
  } else {
    res.status(404);
    throw Error("Товар не найден");
  }
});

// @desc Fetch 9 products for women
// @route Get /api/products/women
// @access Public
const getProductsByFemaleLimit = asyncHandler(async (req, res) => {
  const products = await Product.find({"gender": "female"}).limit(8);
  if (products) {
    res.json(products);
  } else {
    res.status(404);
    throw Error("Товар не найден");
  }
});

// @desc Fetch all products for men
// @route Get /api/products/men
// @access Public
const getProductsByMale = asyncHandler(async (req, res) => {
  const products = await Product.find({"gender": "male"});
  if (products) {
    res.json(products);
  } else {
    res.status(404);
    throw Error("Товар не найден");
  }
});

// @desc Fetch limit products for men
// @route Get /api/products/men
// @access Public
const getProductsByMaleLimit = asyncHandler(async (req, res) => {
  const products = await Product.find({"gender": "male"}).limit(8);
  if (products) {
    res.json(products);
  } else {
    res.status(404);
    throw Error("Товар не найден");
  }
});

// @desc Fetch single product
// @route Get /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw Error("Товар не найден");
  }
});

// @desc Fetch all sale products
// @route Get /api/products/sale
// @access Public
const getProductBySale = asyncHandler(async (req, res) => {
  const product = await Product.find({"sale": true});
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw Error("Товар не найден");
  }
});

export {
  getProducts,
  getProductById,
  getProductsByFemale,
  getProductsByMale,
  getProductsByFemaleLimit,
  getProductsByMaleLimit,
  getProductBySale
};