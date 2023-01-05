const express= require("express");
const router = express.Router();
const contactSchema = require("../models/contact");

//add contact user
router.post("/", async(req,res) =>{
    const contact_collection= new contactSchema({
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        phone:req.body.phone,
        service:req.body.service,
        subject:req.body.subject,
        message:req.body.message,
    });
    try {
        await contact_collection.save();
        res.status(201).json("Contact user added");
       
    } catch (error) {
        res.status(400).send(error);
    }
})

//get a contact user
router.get("/:id", async(req,res) =>{
    const contact_collection= await contactSchema.findById(req.params.id);
    try {
        res.send(contact_collection);
    } catch (error) {
        res.status
    }
});

//get all contact users
router.get("/", async(req,res) =>{
    const contact_collection= await contactSchema.find();
    try {
        res.send(contact_collection);
    } catch (error) {
        res.status
    }
});

module.exports= router;