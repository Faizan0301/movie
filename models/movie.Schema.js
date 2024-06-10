const mongoose = require("mongoose");

const movieSchema= new mongoose.Schema({
    name:String,
    image:String,
    rating:String,
    dsc:String
});

const movieDB=mongoose.model('movieTbl',movieSchema);

module.exports=movieDB