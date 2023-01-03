const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    propertytype: {type: String, enum: ["Plot","House","Flat"]},
    negotable: {type: String, enum: ["Yes","No"]},
    price: Number,
    ownership: String,
    propertyage: Number,
    propertyapproved:{type: String, enum: ["Yes","No","Pending"]},
    propertydescription: String,
    bankloan:{type: String, enum: ["Yes","No"]},
    name: String,
    mobile: Number,
    postedby: String,
    saletype: String,
    featuredpackage: String,
    ppdpackage: String,
    email: String,
    city: String,
    area: String,
    pincode: Number,
    address: String,
    landmark:String,
    latitude:Number,
    longitude:Number,
    length: Number,
    breath: Number,
    totalarea: Number,
    areaunit: String,
    bhk: {type: Number, enum: [1,2,3,4]},
    floors:Number,
    attached: String,
    westerntoilet:{type: String, enum: ["Yes","No"]},
    furnished:{type: String, enum: ["Furnished","Fully-Furnished","Semi-Furnished"]},
    carparking:{type: String, enum: ["Yes","No"]},
    lift:{type: String, enum: ["Yes","No"]},
    electricity:String,
    facing:String,
    ppdid: String,
    user: {type: Schema.Types.ObjectId, ref: "User"}

});


const PropertyInfo = mongoose.model("PropertyInfo", propertySchema);

module.exports = PropertyInfo;