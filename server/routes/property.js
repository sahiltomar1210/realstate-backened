const express = require("express");
const PropertyInfo = require("../models/property/Property");
const bodyparser = require("body-parser");
const router = express.Router();

router.use(bodyparser.json());

router.get("/", async (req, res) => {
    try{
        console.log(req.user);
        const {pagesize = 1} = req.query;
        const details = await PropertyInfo.find({user: req.user}).skip((Number(pagesize)-1)* 10).limit(10);
        res.json({
            status: "Success",
            details
        })

    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});
router.post("/search", async (req, res) => {
    try{
        console.log(req.ppdid);
        const {ppdid} = req.body;
        const details = await PropertyInfo.findOne({ppdid});
        if(details){
            return  res.json({
                status: "Success",
                details
            })
        }
        res.status(403).json({ 
            status: "Failed",
            message: "No ID Present"
        });

    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});
function PPD(DataCount){
    let count = String(DataCount)
    let PPD=""
    if(count.length==1){
        PPD = "PPD"+"111"+count
        return PPD
    }else if(count.length==2){
        PPD = "PPD"+"11"+count
        return PPD
    }else if(count.length==3){
        PPD = "PPD"+"1"+count
        return PPD
    }else{
        PPD = "PPD"+count
        return PPD
    }
  }

router.post("/", async (req, res) => {
    try{  
        let DataCount = await PropertyInfo.count() ; 
       let ppdid = PPD(DataCount);
        const details = await PropertyInfo.create({
            length: req.body.length,
            breath: req.body.breath,
            totalarea: req.body.totalarea,
            areaunit: req.body.areaunit,
            bhk: req.body.bhk,
            floors: req.body.floors,
            attached: req.body.attached,
            westerntoilet: req.body.westerntoilet,
            furnished: req.body.furnished,
            carparking: req.body.carparking,
            lift: req.body.lift,
            electricity: req.body.electricity,
            facing: req.body.facing,
            email: req.body.email,
            city: req.body.city,
            area: req.body.area,
            pincode: req.body.pincode,
            address: req.body.address,
            landmark:req.body.landmark,
            latitude:req.body.latitude,
            longitude:req.body.longitude,
            name: req.body.name,
            mobile: req.body.mobile,
            postedby: req.body.postedby,
            saletype: req.body.saletype,
            featuredpackage: req.body.featuredpackage,
            ppdpackage: req.body.ppdpackage,
            propertytype: req.body.propertytype,
            negotable: req.body.negotable,
            price: req.body.price,
            ownership: req.body.ownership,
            propertyage: req.body.propertyage,
            propertyapproved: req.body.propertyapproved,
            propertydescription: req.body.propertydescription,
            bankloan: req.body.bankloan,
            ppdid:ppdid,
            user: req.user,
        });
        res.json({
            status: "Success",
            details
        })

    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});
module.exports = router;