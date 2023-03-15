const mongoose = require("mongoose");

const updatesSchema = new mongoose.Schema({
    heading:{
        type: String,
    }, 
    note:{
        type: String,
    }, 
    news: {
        type: String
    }, 
    source: {
        type: String,
    }, 
    image: {
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const Feedback = mongoose.model("updates", updatesSchema);

module.exports = Feedback;
