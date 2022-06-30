import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import route from "./routes/index";
import mongoose from "mongoose";
const app = express();
app.use(bodyParser.json());
app.use("/", route);

//DATABASE CONFIGURATION
const database = process.env.DATABASE;
console.log(database);
mongoose
  .connect(
    "mongodb+srv://Fabiola95:0786131474@tourdb.lgkns.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database successfully connected"));

//server configuration

const port = process.env.PORT || 4040;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

export default app;
