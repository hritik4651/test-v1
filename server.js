import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (res, req) => {
  req.send("Nodejs Project v333");
});
app.get("/api", (res, req) => {
  req.send("API from express server.");
});

app.get("/api/user", (res, req) => {
  req.send("API from express server. and u r a User");
});

app.listen(port, () => {
  console.log(`Server running at  ${port}`);
});
