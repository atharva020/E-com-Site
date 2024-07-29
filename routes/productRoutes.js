import express from "express";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productFilterController,
  productPhotoController,
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

router.get("/get-product", getProductController);

router.get("/get-product/:slug", getSingleProductController);

router.get("/product-photo/:pid", productPhotoController);

router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFilterController);

router.post(
  "/update-product",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

export default router;
