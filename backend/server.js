const express = require("express");
const app = express();

app.get("/health", (req, res) => {
<<<<<<< HEAD
        res.json({ status: "ok", timestamp: new Date(), version: "1.0.0" });
=======
        res.json({ status: "healthy", uptime: process.uptime() });
>>>>>>> feature/update-health
});

app.get("/api/activities", (req, res) => {
res.json([]);
});

app.listen(3000, () => console.log("VitalSync API on :3000"));