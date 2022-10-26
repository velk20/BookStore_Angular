let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoDb = require('./database/db');

mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
        console.log("DataBase connected successful!")
    },
    error => {
        console.log("Data base Error:", error)
    })

//Port and server
const bookRoute = require('./node-backend/routes/book.routes');
const userRoute = require('./node-backend/routes/user.routes');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist/Bookstore')));

app.use('/api', bookRoute);
app.use('/api', userRoute);
const port = process.env.port || 8000;
app.listen(port,()=>{
    console.log('Listening Port on: ' + port);
});

app.use((req,res,next)=>{
    next(createError(404));
});

app.get('/',(req,res)=>{
    req.send('invalid Endpoint');
});

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, 'dist/Bookstore/index.html'));
})

app.use(function (err, req, res, next) {
    console.log(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});