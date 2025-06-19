import dotenv from "dotenv";
import app from "./app";

dotenv.config();
app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is running"
    });
});
app.listen(5678, () => {
    console.log("Server is running on port 5678");
})