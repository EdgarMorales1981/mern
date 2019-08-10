const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

//connecting in db

//mongoose.connect('mongodb://localhost/crud-mongo')
mongoose.connect('mongodb+srv://edgar:edgar123@cluster0-zeaxr.mongodb.net/test?retryWrites=true&w=majority',  {
  useNewUrlParser: true
})



.then(db => console.log('db conectada'))
.catch(err => console.log(err));


//importing routes
const indexRoutes = require('./routes/index.js');


//settings
app.set('port',process.env.PORT || 4444);

app.set('views', path.join(__dirname, 'views'));

app.set('view engine','ejs');

//middlewares express
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));



//routes

app.use('/', indexRoutes);

// starting the server
app.listen(app.get('port'),() => {

console.log(`server on port ${app.get('port')}`);

});

