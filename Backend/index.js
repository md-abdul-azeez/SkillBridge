import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"
dotenv.config({});
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin : 'https//localhost:5137',
    credentials : true
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.use("/api/v1/user", userRoute);

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server is listening on ${PORT}`);
})