const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('custom-env').env();

const mongoUser = process.env.MGDB_USER;
const mongoPass = process.env.MGDB_PASS;

mongoose.set('useCreateIndex', true)
mongoose.connect(
    `mongodb://${mongoUser}:${mongoPass}@ds231387.mlab.com:31387/chat`,
    {
        useNewUrlParser: true,
    }
)

app.use(express.json());
app.use(cors());
app.use(require('./routes'));

app.listen(8081, ()=>{
    console.log("server is on in port : 8081");
});