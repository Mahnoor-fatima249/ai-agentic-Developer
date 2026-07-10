import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    console.log("GROQ KEY:", process.env.GROQ_API_KEY);

    const { default: app } = await import("./app.js");

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server Running on Port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

startServer();