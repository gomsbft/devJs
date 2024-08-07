import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL)
.then(() => {
    console.log("연결 잘 됐어!");
    app.listen(PORT, () => {
        console.log(`연결 잘 됐어요. http://localhost:${PORT}`);
    })
})
.catch((error) => console.log(error));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
})
const userModel = mongoose.model("users", userSchema);

app.get("/users", async (req, res) => {
    const userData = await userModel.find();
    res.json(userData);
})