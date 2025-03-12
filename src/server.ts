// Imports
import "dotenv/config";
import cors from "cors";
import express from "express";
import { sendEmail } from "./utils/mail";

// Variables
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.post("/mail", async (req, res) => {
    try {
        const {
            naam,
            voornaam,
            geboortedatum,
            gender,
            haarkleur,
            lengte,
            opmerking,
            email,
        } = req.body;
        const data = {
            from_email: email,
            naam,
            voornaam,
            geboortedatum,
            gender,
            haarkleur,
            lengte,
            opmerking,
        };
        console.log("1data", data);
        await sendEmail(data);
        res.status(200).json({ message: "Email sent successfully" }).end();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error sending email" }).end();
    }
});
// Database connection

// Server Listening
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}! 🚀`);
});
