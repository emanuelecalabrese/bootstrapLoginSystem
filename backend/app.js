const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/login", (req, res, next) => {
    const user = {
        email: req.body.email,
        password: req.body.password,
    }
    console.log("RECEIVED", user);
    res.status(200).json({ message: "IT WORKS!", user, });
});

app.post('/signup', (req, res, next) => {
    const user = {
        firstname: req.body.firstname,    
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
    }
    console.log("RECEIVED", user);
    res.status(200).json({ message: "IT WORKS!", user });    

})

module.exports = app;
