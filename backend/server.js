require("dotenv").config({ path: "./config.env" });

const express = require("express");
const app = express();

const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
//connect db

connectDB();

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

//error handler
app.use(errorHandler);

const PORT = process.env.PORT || 1111;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged error: ${error}`);
  server.close(() => process.exit(1));
});
