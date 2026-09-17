const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Home API
app.get("/", (req, res) => {
  res.json({
    success: true,
    platform: "NAMMA KARNATAKA",
    service: "Video + OTT Digital Platform",
    version: "1.0.0",
    status: "Backend is running"
  });
});

// Health Check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "OK",
    message: "NAMMA KARNATAKA API is working"
  });
});

// OTT Movies
app.get("/api/movies", (req, res) => {
  res.json({
    success: true,
    movies: []
  });
});

// Videos
app.get("/api/videos", (req, res) => {
  res.json({
    success: true,
    videos: []
  });
});

// Shorts
app.get("/api/shorts", (req, res) => {
  res.json({
    success: true,
    shorts: []
  });
});

app.listen(PORT, () => {
  console.log(`NAMMA KARNATAKA server running on port ${PORT}`);
});
