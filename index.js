const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dbConfig = require('./config/db.config');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.route');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Connected to database');
}).catch(err => {
    console.log('Connection error ', err);
    process.exit();
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/user', userRoutes);
const port = 2000;

app.listen(port, () => {
    console.log(`listeninng to ${port}`);
});
