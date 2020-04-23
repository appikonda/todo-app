const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');

const PORT =4000;

var todoRouter = require('./routes/todoRoutes.js')

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use(bodyparser.json());
//app.use(cors);
//routing 
console.log("test ") ;
app.use('/todos', todoRouter);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});