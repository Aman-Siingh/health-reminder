import mongoose from "mongoose";

const MedicineSchema = new mongoose.Schema({
  medicineName: { type: String, required: true },
  reminderTime: { type: Date, required: true },
  userEmail: { type: String, required: true },
  notificationSent: { type: Boolean, default: false },
});

export default mongoose.model("Medicine", MedicineSchema);
