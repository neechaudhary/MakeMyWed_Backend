const express = require("express");
const router = express.Router();
const web_req = require("../models/website_request");
const upload_web = require("../file_upload_web");

//post upload file
router.post("/", upload_web.single("file"), async (req, res) => {
  try {
    const url =
      req.protocol + "://" + req.get("host") + "/" + req.file.filename;
    // const frontend = req.body.frontend;
    // const backend = req.body.backend;
    // const database = req.body.database;
    // const webType = req.body.webType;
    // const name = req.body.name;
    // const email = req.body.email;
    // const phoneNumber = req.body.phoneNumber;
    // const message = req.body.message;
    // const totalEstimate = req.body.totalEstimate;
    // const numberOfPages = req.body.numberOfPages;

    const post_file = new web_req({
      ...req.body,
      url: url,
    });

    await post_file.save();

    return res.json({ message: "File uploaded ", status: "success", web_req: post_file });
    
  } catch (err) {
    return res.json({ message: "File not uploaded ", status: "failed" });
  }
});

//get all files
router.get("/", async (req, res) => {
  try {
    const all_files = await web_req.find();
    return res.json({ message: "All files", status: "success", all_files });
  } catch (err) {
    return res.json({ message: "No files", status: "failed" });
  }
});

//get single file
router.get("/:id", async (req, res) => {
  try {
    const single_file = await web_req.findById(req.params.id);
    return res.json({ message: "Single file", status: "success", single_file });
  } catch (err) {
    return res.json({ message: "No file", status: "failed" });
  }
});

// //update single file
// router.put("/:id", async (req, res) => {
//   try {
//     const update_file = await web_req.findByIdAndUpdate(req.params.id);
//     return res.json({ message: "File updated", status: "success", update_file });
//   } catch (err) {
//     return res.json({ message: "File not updated", status: "failed" });
//   }
// });

//update single file
router.put("/:id", upload_web.single("file"), async (req, res) => {
  try {
    const url =
      req.protocol + "://" + req.get("host") + "/" + req.file.filename;
    const update_file = await web_req.findByIdAndUpdate(req.params.id, {...req.body,url: url},{new:true});
    return res.json({ message: "File updated", status: "success", update_file });
  } catch (err) {
    return res.json({ message: "File not updated", status: "failed" });
  }
});

//delete single file
router.delete("/:id", async (req, res) => {
  try {
    const delete_file = await web_req.findByIdAndDelete(req.params.id);
    return res.json({ message: "File deleted", status: "success", delete_file });
  } catch (err) {
    return res.json({ message: "File not deleted", status: "failed" });
  }
});

//validation for website request
async function validation(req, res, next) {
  const {
    frontend,
    backend,
    database,
    webType,
    name,
    email,
    phoneNumber,
    message,
    totalEstimate,
    numberOfPages,
  } = req.body;
  if (
    frontend === undefined ||
    frontend === null ||
    frontend === "" ||
    backend === undefined ||
    backend === null ||
    backend === "" ||
    database === undefined ||
    database === null ||
    database === "" ||
    webType === undefined ||
    webType === null ||
    webType === "" ||
    name === undefined ||
    name === null ||
    name === "" ||
    email === undefined ||
    email === null ||
    email === "" ||
    phoneNumber === undefined ||
    phoneNumber === null ||
    phoneNumber === "" ||
    message === undefined ||
    message === null ||
    message === "" ||
    totalEstimate === undefined ||
    totalEstimate === null ||
    totalEstimate === "" ||
    numberOfPages === undefined ||
    numberOfPages === null ||
    numberOfPages === ""
  ) {
    return res.status(400).json("All fields are required");
  }
  next();
}



module.exports = router;