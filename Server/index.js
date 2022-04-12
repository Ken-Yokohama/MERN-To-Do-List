const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const ToDosModel = require("./models/ToDosSchema");
const CompletedTaskModel = require("./models/CompletedTasksSchema");
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
                res.json(docs);
            } else {
                res.json(docs);
            }
        }
    });
});

app.post("/addToDos", (req, res) => {
    const toDoItem = req.body;
    ToDosModel.create(toDoItem).then((docs) => {
        res.json("Successfully Added Item");
    });
});

app.put("/editTask", (req, res) => {
    ToDosModel.updateOne(
        {
            _id: req.body._id,
        },
        {
            task: req.body.task,
        },
        (err) => {
            if (err) {
                console.log(`Error: ` + err);
            } else {
                res.json("Successfully Updated Task");
            }
        }
    );
});

app.delete("/deleteTask/:taskId", (req, res) => {
    const taskId = req.params.taskId;
    ToDosModel.deleteOne(
        {
            _id: taskId,
        },
        (err) => {
            if (err) {
                console.log(`Error: ` + err);
            } else {
                res.json("Successfully Deleted Task");
            }
        }
    );
});

app.post("/completeTask", (req, res) => {
    CompletedTaskModel.create(req.body).then((docs) => {
        ToDosModel.deleteOne(
            {
                _id: req.body._id,
            },
            (err) => {
                if (err) {
                    console.log(`Error: ` + err);
                } else {
                    res.json("Successfully Transferred Data");
                }
            }
        );
    });
});

app.post("/uncompleteTask", (req, res) => {
    ToDosModel.create(req.body).then((docs) => {
        CompletedTaskModel.deleteOne(
            {
                _id: req.body._id,
            },
            (err) => {
                if (err) {
                    console.log(`Error: ` + err);
                } else {
                    res.json("Successfully Transferred Data");
                }
            }
        );
    });
});

app.put("/editCompletedTask", (req, res) => {
    CompletedTaskModel.updateOne(
        {
            _id: req.body._id,
        },
        {
            task: req.body.task,
        },
        (err) => {
            if (err) {
                console.log(`Error: ` + err);
            } else {
                res.json("Successfully Edited Completed Task");
            }
        }
    );
});

app.get("/getCompletedTasks", (req, res) => {
    CompletedTaskModel.find({}, (err, docs) => {
        if (err) {
            console.log(`Error: ` + err);
        } else {
            if (docs.length === 0) {
                console.log("No Completed Tasks Found");
                res.json(docs);
            } else {
                res.json(docs);
            }
        }
    });
});

app.delete("/deleteCompletedTask/:taskId", (req, res) => {
    CompletedTaskModel.deleteOne(
        {
            _id: req.params.taskId,
        },
        (err) => {
            if (err) {
                console.log(`Error: ` + err);
            } else {
                res.json("Successfully Deleted a Completed Task");
            }
        }
    );
});

app.listen(process.env.PORT || 3001, () => {
    console.log("App listening on port 3001!");
});
