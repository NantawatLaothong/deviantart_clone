const mongoose = require('mongoose');
const mongoUrl = process.env.mongoURI

// password is store in .env 
async function connect(){
    mongoose.connect(mongoUrl);
}

connect().then(res=>console.log('DB connected'))
    .catch(err=>console.log(err));

const artSchema = new mongoose.Schema({
    title: String,
    price: Number
});

const Arts = mongoose.model('Art', artSchema);

module.exports = Arts;