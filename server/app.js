var express = require('express');
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var cors = require("cors");
const expressValidator = require('express-validator');
let uuidv1 = require('uuidv1')
 
console.log(uuidv1())


require("dotenv").config();



const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
//const braintreeRoutes = require('./routes/braintree');
const orderRoutes = require('./routes/order');
var indexRouter = require('./routes/index');
var estimateRouter = require("./routes/estimate");
const uploadRouter = require('./routes/file.route')



var app = express();

// db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('DB Connected'));

app.use(cors());
app.use(expressValidator());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/estimate', estimateRouter);
app.use('/endpoint', uploadRouter)
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
//app.use('/api', braintreeRoutes);
app.use('/api', orderRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

