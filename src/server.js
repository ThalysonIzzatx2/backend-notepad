const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('custom-env').env();

const mongoUrl = process.env.MGDB_URL;

mongoose.set('useCreateIndex', true)
mongoose.connect(
    mongoUrl,
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