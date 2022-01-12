import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import {errorHandler, notFound} from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api start");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.use(notFound);
app.use(errorHandler);

const _PORT = process.env.PORT || 3005;
const message = () => console.log(`Server is running in ${process.env.NODE_ENV} mode, on port ${process.env.PORT}`.bgGreen);

app.listen(_PORT, message);

// todo: 1. AdminBackend
//       2. Payments
//       3. Product Reviews