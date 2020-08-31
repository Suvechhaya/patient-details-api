const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const cors = require('cors');


// var cors = require('cors');
// app.use(cors());

//Import Routes
const authRoute = require('./routes/auth');
const patientRoute = require('./routes/patientManagement');

dotenv.config();

app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header( 'Access-Control-Allow-Origin', '*');
  res.header ('Access-Control-Allow-Credentials', true)
  res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.header ('Access-Control-Allow-Headers', 'Content-Type')
  next();
});

//Connect to DB
mongoose.connect('mongodb://localhost/patientDetails',
{ useNewUrlParser: true },
 () => console.log('conntected to db!'));

// mongoose
// .connect('mongodb://localhost/covid', {
    // .connect(process.env.DB_CONNECT, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useFindAndModify: false,
    //     useCreateIndex: true
    // })
    // .then( () => { console.log('connected to db!') } );

//Middleware
app.use(express.json());
app.use(bodyParser.json());
app.options('*', cors());
app.use(cors());


app.use(async (req, res, next) => {
    if (req.originalUrl.indexOf('/api/user/login') >= 0 ||
        req.originalUrl.indexOf('/api/user/register') >= 0) {
        return next();
    }

    console.log(req.headers['authorization']);
    let token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ error: "User not authenticated"});
    }

    token = token.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (!err) {
            req.user = user;
            next();
        } else {
            return res.status(403).json({ error: "User not authenticated"});
        }
    })
});


//Routers Middlewares
app.use('/api/user', authRoute);
app.use('/api', patientRoute);

app.listen(3000, () => console.log('Server up and running'));
