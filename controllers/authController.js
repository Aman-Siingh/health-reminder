import userModel from "../models/userModels.js";
import Medicine from "../models/Medicine.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validating required fields
    if (!email) {
      return res.status(400).send({ message: "Email is required" });
    }
    if (!password) {
      return res.status(400).send({ message: "Password is required" });
    }

    // Check if the user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "Already registered, please login.",
      });
    }

    // Hash the password and save the user
    const user = await new userModel({
      email,
      password,
    }).save();

    // Send success response
    return res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Error in registration",
      error: error.message || error,
    });
  }
};

//POST Login
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please provide email and password",
      });
    }

    // Find user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }

    // Check if the input password matches the stored password
    if (user.password !== password) {
      return res.status(401).send({
        success: false,
        message: "Invalid password",
      });
    }

    // If login is successful
    res.status(200).send({
      success: true,
      message: "Login successful",
      user: {
        _id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

export const mailController = async (req, res) => {
  try {
    const { medicineName, reminderTime, userEmail } = req.body;
    if (!userEmail || !medicineName || !reminderTime) {
      return res.status(400).send({
        success: false,
        message: "Please provide all fields",
      });
    }
    const med = await new Medicine({
      medicineName,
      reminderTime,
      userEmail,
    }).save();
    res.status(200).send({
      success: true,
      message: `done`,
      med,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error",
      error,
    });
  }
};
