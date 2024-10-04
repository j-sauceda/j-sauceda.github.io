import process from "node:process";
import mongoose from "mongoose";

let isConnected = false;

/**
 * Connects to the MongoDB database with the given URI, using the "portfolio" database.
 *
 * The function will return without doing anything if a connection is already established.
 *
 * If the connection is established successfully, a message will be logged to the console and
 * the `isConnected` flag will be set to `true`.
 *
 * If a connection error occurs, an error message will be logged to the console.
 */
const connectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    const URI = process.env.MONGODB_URI || "";
    const db = await mongoose.connect(URI, {
      dbName: "portfolio",
      maxPoolSize: 10,
    });

    if (db.connection.readyState === 1) {
      isConnected = true;
      console.log("Connected to MongoDB");
    }
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`);
  }
}

export default connectDB;
