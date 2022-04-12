const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
app.use(express.json());
app.use(cors());

app.listen(3001, () => {
    console.log("App listening on port 3001!");
});
