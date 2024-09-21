import express from "express";
import {
  registerController,
  loginController,
  mailController,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.post("/medicine", mailController);

export default router;
