import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import cron from "node-cron";
import Medicine from "./models/Medicine.js";
import sendReminderEmail from "./utils/sendReminderEmail.js";

dotenv.config();

connectDB();

//rest object
const app = express();
app.use(cors());

//middlewares
app.use(express.json());

//routes
app.use("/api/v1/auth", authRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("hello");
});

cron.schedule("* * * * *", async () => {
  const now = new Date();
  const oneMinuteLater = new Date(now.getTime() + 60 * 1000); // 1 minute from now

  // Find reminders that should be sent between now and 1 minute later
  const medicines = await Medicine.find({
    reminderTime: { $lte: oneMinuteLater, $gte: now }, // Reminder time is now or in the next minute
    notificationSent: false,
  });

  medicines.forEach(async (medicine) => {
    // Send reminder email
    await sendReminderEmail(medicine.userEmail, medicine.medicineName);

    // Mark the notification as sent
    medicine.notificationSent = true;
    await medicine.save();
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (req, res) => {
  console.log(
    `Server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
