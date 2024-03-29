const express = require("express");
var bodyParser = require("body-parser");
const route = require("./routes/route.js");
const multer = require('multer');
const app = express();

app.use(bodyParser.json());
app.use(multer().any());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://user-open-to-all:hiPassword123@cluster0.xgk0k.mongodb.net/ashutoshpahariya_db?retryWrites=true&w=majority", { useNewUrlParser: true }
    )
    .then(() => {
        console.log("mongodb running and connected");
        app.listen(process.env.PORT || 3000, function() {
            console.log("Express app running on port " + (process.env.PORT || 3000));
        });
    })
    .catch((err) => console.log(err));

app.use("/", route);