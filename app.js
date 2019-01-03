//////initializing /////
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const bodyParser = require("body-parser");
/////////end ///////


app.use("/api/users", users);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

<<<<<<< HEAD
app.get("/", (req,res) => res.send("Hello World!!"));
=======
app.get("/", (req, res) => res.send("Hello World!!"));

>>>>>>> master

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
