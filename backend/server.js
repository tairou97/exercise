import express from "express";
const app = express();
const PORT = process.env.PORT || 4000;
console.log(PORT);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Listening To Port:  ${PORT}`);
});
