const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

//Import Routes
const authRoute = require('./routes/auth');
const patientRoute = require('./routes/patient');

dotenv.config();

//Connect to DB
mongoose.connect('mongodb://localhost/patientDetails',
{ useNewUrlParser: true },
 () => console.log('conntected to db!'));

// mongoose
// .connect('mongodb://localhost/covid', {
//     // .connect(process.env.DB_CONNECT, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//         useCreateIndex: true
//     })
//     .then( () => { console.log('connected to db!') } );

//Middleware
app.use(express.json());


app.use(async (req, res, next) => {
    if (req.originalUrl.indexOf('/api/user/login') >= 0 ||
        req.originalUrl.indexOf('/api/user/register') >= 0) {
        return next();
    }

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
