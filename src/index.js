const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use("/test", (req, res, next) => {
  console.log("Recieved request");

  res.status(200).send("Recieved response");
});

app.listen(PORT, () => {
  console.log(`Sever is runing on http://127.0.0.1:${PORT}`);
});
