const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODBURI);

app.get("/getToDos", (req, res) => {
    ToDosModel.find({}, (err, docs) => {
        if (err) {
            console.log(`Error: ` + err);
        } else {
            if (docs.length === 0) {
                console.log("No Todos Found");
            } else {
                res.json(docs);
            }
        }
    });
});

app.post("/addToDos", (req, res) => {
    const toDoItem = req.body;
    ToDosModel.create(toDoItem).then((docs) => {
        res.json("Succesfully Added Item");
    });
});

app.listen(3001, () => {
    console.log("App listening on port 3001!");
});
