const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true)
mongoose.connect(
    "mongodb://adm:senha123@ds231387.mlab.com:31387/chat",
    {
        useNewUrlParser: true,
    }
)

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extendend:false}));
app.use(require('./routes'));

app.listen(8081, ()=>{
    console.log("server is on in port : 8081");
});