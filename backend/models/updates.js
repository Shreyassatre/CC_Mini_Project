const mongoose = require('mongoose');

const updatesShema = new mongoose.Schema({
    heading:{
        type: String
    }, 
    note:{
        type: String
    }, 
    news: {
        type: String
    }, 
    source: {
        type: String
    }, 
    image: {
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const LatestUpdates = new mongoose.model("LatestUpdates", updatesShema);

module.exports = LatestUpdates;
