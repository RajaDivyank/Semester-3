const mongoose = require('mongoose');

const schema = mongoose.Schema({
    LaptopID : Number,
    LaptopName : String,
    LaptopImage : String,
    LaptopRam : Number,
    LaptopProcessor : String,
    LaptopGraphicsCard : String,
    LaptopHD : String
});

module.exports = mongoose.model("laptops" , schema);