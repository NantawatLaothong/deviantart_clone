const express = require('express');
const morgan = require('morgan');
const { getHome } = require('./controllers/user_controllers');
require('dotenv').config();
const app = express();
const port = process.env.PORT | 5050;
const Arts = require('./models/Arts')

// https://www.mongodb.com/languages/mern-stack-tutorial

app.use(morgan('tiny'));
app.use(express.json());

app.get('/create', async(req, res)=>{
    const newData = await Arts.create({
        title: "Monalisa",
        price: 2000
    });
    console.log(newData)
    res.redirect('/');
})

app.get('/test', async (req, res)=>{
    res.send('This app is running fine')
})

app.get('/:user', getHome)

// create a dummy 

app.get('/', async(req, res)=>{
    const arts = await Arts.find();
    res.json(arts);
})


app.listen(port, ()=>{
    console.log(`app is running on port: ${port}`);
    // console.log(process.env.mongoURI)
})
