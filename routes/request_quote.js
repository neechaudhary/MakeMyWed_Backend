const express= require('express')
const router= express.Router();
const quoteSchema= require("../models/request_quote");

//add a request quote
router.post("/", async(req,res) =>{
    const quote_collection= new quoteSchema({
        name:req.body.name,
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message,
    });
    try {
        await quote_collection.save();
        res.status(201).json("Request quote added");
    } catch (error) {
        res.status(400).send(error);
    }
});

//get all request quotes
router.get("/", async(req,res) =>{
    try {
        const quote_collection= await quoteSchema.find();
        res.status(200).json(quote_collection);
    } catch (error) {
        res.status(400).send(error);
    }
});

//get a request quote
router.get("/:id", async(req,res) =>{
    try {
        const quote_collection= await quoteSchema.findById(req.params.id);
        res.status(200).json(quote_collection);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports= router;