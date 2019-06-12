const mongoose = require('mongoose');
const EventsSchema = new mongoose.Schema({
    author:{
        type:String,
        required:true,
    },
    authorId:{
        type:String,
        require:true,
        select:false
    },
    title:{
        type:String,
        required:true
    },
    note:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default: Date.now,
    },

});
module.exports = mongoose.model("Notes", EventsSchema);