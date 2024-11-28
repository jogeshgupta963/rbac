import express from "express";
import { isLoggedIn, hasRole, hasPermission } from "../middleware/index.js";
import { Roles } from "../utils/constants/roles.js";
import { Permissions } from "../utils/constants/permissions.js";
import { productController } from "../controllers/product.js";
export const router = express.Router();

router
    //All roles that has this permission can create/update/read/delete a product
    .route("/")
    .post(
        isLoggedIn,
        hasPermission(Permissions.create_product),
        productController.createProduct
    )
    .get(
        isLoggedIn,
        hasPermission(Permissions.get_product),
        productController.getProduct
    )
    .put(
        isLoggedIn,
        hasPermission(Permissions.update_product),
        productController.updateProduct
    );
router
    .route("/:userId")
    .get(
        isLoggedIn,
        hasPermission(Permissions.get_product),
        productController.getProductById
    )
    .delete(
        isLoggedIn,
        hasRole([Roles.admin, Roles.super_admin]),
        hasPermission(Permissions.delete_product),
        productController.deleteProductById
    );
