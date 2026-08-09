const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("My Nuvio addon is running!");
});

app.get("/manifest.json", (req, res) => {
  res.json({
    id: "com.mynuvio.addon",
    version: "1.0.0",
    name: "My Nuvio Addon",
    description: "Personal addon",
    resources: ["stream"],
    types: ["movie", "series"],
    idPrefixes: ["tt"]
  });
});

app.get("/stream/:type/:id.json", (req, res) => {
  res.json({
    streams: []
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Addon running on port " + PORT);
});
