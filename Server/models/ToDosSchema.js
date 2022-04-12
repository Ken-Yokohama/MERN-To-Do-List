const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var ToDosSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
});

//Export the model
const ToDosModel = mongoose.model("ToDosCollection", ToDosSchema);
module.exports = ToDosModel;
