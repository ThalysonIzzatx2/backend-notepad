const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
if (process.env.NODE_ENV !== 'production') require('custom-env').env();

const mongoUrl = process.env.MGDB_URL;
const port = process.env.PORT || 8081;

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

app.listen(port, ()=>{
    console.log(port);
});