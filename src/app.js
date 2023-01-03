const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')
const bodyparser = require("body-parser");
const userRoutes = require("../routes/user");
const propertyRoutes = require("../routes/property");
const cors = require('cors');
app.use(express.json());
app.use(bodyparser());

app.use(cors());
app.use(function(req, res, next) {
res.header ("Access-Control-Allow-Origin", "*");
res.header (
"Access-Control-Allow-Methods",
"GET, HEAD, OPTIONS, POST, PUT, DELETE"
);
res.header (
"Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept, Authorization"
);
next();
}):

const secret ="RESTAPI"
//Router MIddlewares
app.use("/property", (req, res, next) =>{
    if(req.headers.authorization){
        const token = req.headers.authorization.split("random ")[1];

        // invalid token
        jwt.verify(token, secret, function(err, decoded) {
            if(err) {
                return res.status(400).json({ status: "Failed", message : err.message});
            }
            req.user= decoded.data;
            next();
        });   
    }else {
        return res.status(403).json({ status: "Failed", 
        message : "Not authenticated user"});
    }

});
app.use("/users", userRoutes);
app.use("/property/property", propertyRoutes);
app.get("*", (req, res) => {
    res.status(404).json({
        status: "Failed",
        message: "API NOT FOUND"
    })
})
module.exports = app;
