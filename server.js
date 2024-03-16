const mongoose = require("mongoose");

const app = require("./index");

const DB =
  "mongodb+srv://saitejag1801:q1PD4DeK1dHNaWwb@cluster0.krq9aoe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const DB_CONNECTION = mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("DATABASE Connected 🌿");
  })
  .catch((err) => {
    console.log(err);
  });

const port = 8000;
const server = app.listen(port, () => {
  console.log(`App running on ${port}`);
});
