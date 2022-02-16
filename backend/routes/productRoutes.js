import express from "express";
const router = express.Router();
import {
  getProductById, getProductBySale,
  getProducts,
  getProductsByFemale, getProductsByFemaleLimit,
  getProductsByMale, getProductsByMaleLimit, getTopProducts
} from "../controllers/productsController.js";


router.route("/").get(getProducts);
router.route("/women").get(getProductsByFemale);
router.route("/limit-women").get(getProductsByFemaleLimit);
router.route("/men").get(getProductsByMale);
router.route("/limit-men").get(getProductsByMaleLimit);
router.route("/sale").get(getProductBySale);
router.get('/top', getTopProducts);
router.route("/:id").get(getProductById);


export default router;
