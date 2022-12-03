import express from "express";

import { productController } from "./controller/ProductController";
import { serviceController } from "./controller/ServiceController";
import { userController } from './controller/UserController';

export const router = express.Router();

// User routes
router.post("/users", userController.create.bind(userController));
router.get("/users/", userController.listAll.bind(userController));
router.get("/users/:id", userController.listOne.bind(userController));
router.get("/users", userController.listByGender.bind(userController));
router.patch("/users", userController.update.bind(userController));
router.delete("/users", userController.delete.bind(userController));
// Product routes
router.post("/products", productController.create.bind(productController));
router.get("/products/", productController.listAll.bind(productController));
router.get("/products/:id", productController.listOne.bind(productController));
router.patch("/products", productController.update.bind(productController));
router.delete("/products", productController.delete.bind(productController));

// Service routes

router.post("/services", serviceController.create.bind(serviceController));
router.get("/services/", serviceController.listAll.bind(serviceController));
router.get("/services/:id", serviceController.listOne.bind(serviceController));
router.patch("/services", serviceController.update.bind(serviceController));
router.delete("/services", serviceController.delete.bind(serviceController));