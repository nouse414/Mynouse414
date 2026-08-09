const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Put an authorized magnet link here for testing.
const TEST_MAGNET =
  "magnet:?xt=urn:btih:YOUR_AUTHORIZED_TORRENT_HASH";

app.get("/", (req, res) => {
  res.send("My Nuvio P2P addon is running!");
});

app.get("/manifest.json", (req, res) => {
  res.json({
    id: "com.mynuvio.p2p",
    version: "1.0.0",
    name: "My Nuvio P2P Addon",
    description: "Personal P2P addon for authorized media",
    resources: ["stream"],
    types: ["movie", "series"],
    idPrefixes: ["tt"]
  });
});

app.get("/stream/:type/:id.json", (req, res) => {
  res.json({
    streams: [
      {
        name: "My P2P Source",
        title: "Authorized P2P stream",
        url: TEST_MAGNET
      }
    ]
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Addon running on port " + PORT);
});
