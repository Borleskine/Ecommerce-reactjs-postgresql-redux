const express = require("express");
const cors = require("cors");

const products = require("./products");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Bienvenido a Ecommerce-Sustantiva");
});

app.get("/products", (req, res) => {
    res.send(products);
});

// variable de entorno
const port = process.env.PORT || 5000;

app.listen(port, console.log(`Servidor on ${port}`));