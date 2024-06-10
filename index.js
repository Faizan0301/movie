const express = require('express');
const path = require('path');
const router = require('./router/router');
const db = require('./config/database');

const app = express();

app.set('view engine', 'ejs');

app.use("/uploads", express.static(path.join(__dirname, 'uploads')));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(8082, (err) => {
    if (!err) {
        db()
        console.log("Server start. http://localhost:8082");
    }
});

