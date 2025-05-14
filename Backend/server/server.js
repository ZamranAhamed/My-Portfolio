const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  const log = `
  --- New Contact ---
  Date: ${new Date().toISOString()}
  Name: ${name}
  Email: ${email}
  Subject: ${subject}
  Message: ${message}
  -------------------

  `;

  fs.appendFile("contacts.txt", log, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return res.status(500).send("Failed to save message");
    }
    res.send("Message received!");
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
