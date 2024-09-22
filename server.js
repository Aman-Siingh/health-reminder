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

// Run cron job every minute
cron.schedule("* * * * *", async () => {
  const now = new Date(); // Current time
  const oneMinuteAgo = new Date(now.getTime() - 60 * 1000); // 1 minute before now
  const oneMinuteLater = new Date(now.getTime() + 60 * 1000); // 1 minute after now

  try {
    // Find reminders that are due within 1 minute of now
    const medicines = await Medicine.find({
      reminderTime: { $gte: oneMinuteAgo, $lte: oneMinuteLater }, // Check if reminder time is within the 1-minute window
      notificationSent: false, // Ensure the reminder email has not already been sent
    });

    // Send email reminders
    medicines.forEach(async (medicine) => {
      await sendReminderEmail(
        medicine.userEmail,
        medicine.medicineName,
        medicine.dosage
      );  // Send the reminder email

      // Mark the notification as sent to avoid resending
      medicine.notificationSent = true;
      await medicine.save();
    });
  } catch (err) {
    console.error("Error checking reminders:", err);
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (req, res) => {
  console.log(
    `Server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
