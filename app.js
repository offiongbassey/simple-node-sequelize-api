const http = require('http');
const express = require('express');
const app = express();
const sequelize = require('./util/database');
const Product =('./models/product');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin');

app.use(bodyParser.urlencoded({extended: false}));

//Admin Route
app.use("/admin", adminRoute);

//index Route
app.get('/', (req, res, next) => {
res.send(`Backend Connected`);
});

sequelize
.sync()
.then(result => {
})
.catch(err => {
    console.log(err);
});
app.listen(9000);
