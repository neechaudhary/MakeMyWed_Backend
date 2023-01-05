const express= require('express');
const router= express.Router();
const upload_web = require("../uploads/");


// app.post("/website_request", upload_web.single('file'), (req, res) => {
//     const url = req.protocol + "://" + req.get("host")+'/'+req.file.filename;
//     const frontend = req.body.frontend;
//     const backend = req.body.backend;
//     const database = req.body.database;
//     const webType = req.body.webType;
//     const name = req.body.name;
//     const email = req.body.email;
//     const phoneNumber = req.body.phoneNumber;
//     const message = req.body.message;
//     const totalEstimate = req.body.totalEstimate;
//     const numberOfPages = req.body.numberOfPages;