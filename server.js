const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/manifest.json", (req, res) => {
  res.json({
    id: "com.mynouse414.nuvio",
    version: "1.0.0",
    name: "My Nuvio P2P Addon",
    description: "Personal addon for authorized media",
    resources: ["stream"],
    types: ["movie", "series"],
    idPrefixes: ["tt"]
  });
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Addon running on port " + PORT);
});

app.listen(PORT, ("0.0.0.0") => {
  console.log(`Addon running on port ${PORT}`);
});
