const mongoose = require('mongoose');

async function connect(){
    mongoose.connect('mongodb://localhost:27017/deArt');
}

connect().then(res=>console.log('DB connected'))
    .catch(err=>console.log(err));

const artSchema = new mongoose.Schema({
    title: String,
    price: Number
});

const Arts = mongoose.model('Art', artSchema);

module.exports = Arts;