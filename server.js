const { Router } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const path = require('./routes/route');
const bodyparser = require('body-parser');


//middleware
app.use(bodyparser.json());



//middleware routes
app.use('/',path);


app.set('view-engine', 'ejs');

/*app.get('/',(req,res)=>{
    res.render('index.ejs',{name: 'Kyle'});
});*/


//Connectin Darabase
mongoose.connect(process.env.DATABASE_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true  },
    error=>{
        if(error) console.log(error.message);
        
        console.log("Database connected");
    });

//creating server
app.listen(3000,()=>console.log("Server is running"));