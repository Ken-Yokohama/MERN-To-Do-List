const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var CompletedTasksSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
});

//Export the model
const CompletedTaskModel = mongoose.model(
    "CompletedTasksCollection",
    CompletedTasksSchema
);
module.exports = CompletedTaskModel;
