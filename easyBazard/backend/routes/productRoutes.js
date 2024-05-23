import express from "express";
import formidable from "express-formidable";
import {
  addProduct,
  addProductReview,
  fetchAllProduct,
  fetchNewProducts,
  fetchProduct,
  fetchProductById,
  fetchTopProducts,
  filterProducts,
  removeProduct,
  updateProduct,
} from "../controllers/productController.js";
import { authenticate, authorizeAdmin } from '../middleware/authMiddleware.js'
import checkId  from "../middleware/checkId.js"

const router = express.Router();

router
  .route("/")
  .get(fetchProduct)
  .post(authenticate, authorizeAdmin, formidable(), addProduct);

router.route("/allProducts").get(fetchAllProduct);
router.route("/id/reviews").post(authenticate, checkId, addProductReview);

router.get("/top", fetchTopProducts);
router.get("/new", fetchNewProducts);

router
  .route("/:id")
  .get(fetchProductById)
  .put(authenticate, authorizeAdmin, formidable(), updateProduct)
  .delete(authenticate, authorizeAdmin, removeProduct);

router.route("/filtered-products").post(filterProducts);

export default router;
