const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const register = require("./routes/register");
const login = require("./routes/login");


const products = require("./products");

const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/register", register);
app.use("/api/login", login);

app.get("/", (req, res) => {
  res.send("Bienvenido a Ecommerce-Sustantiva");
});

app.get("/products", (req, res) => {
  res.send(products);
});

// variable de entorno
const port = process.env.PORT || 5000;
const uri = process.env.DB_URI;

app.listen(port, console.log(`Servidor on ${port}`));

mongoose
  .connect(uri, {
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB conectado correctamente..."))
  .catch((err) => console.log("MongoDB falló al conectar", err.message));
