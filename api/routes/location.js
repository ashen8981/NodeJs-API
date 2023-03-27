const express = require("express");
const router = express.Router();
const Location = require("../models/Locations");

// create a location
router.post("/", async(req, res) => {
  const newLocation = new Location(req.body);
  try {
    const savedLocation = await newLocation.save();
    res.status(200).json(savedLocation);
  } catch(err) {
    res.status(500).json(err);
  }
});

// get all locations
router.get("/", async(req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch(err) {
    res.status(500).json(err);
  }
});

// get a location by id
router.get("/:id", async(req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    res.status(200).json(location);
  } catch(err) {
    res.status(500).json(err);
  }
});

// update a location by id
router.put("/:id", async(req, res) => {
  try {
    const updatedLocation = await Location.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedLocation);
  } catch(err) {
    res.status(500).json(err);
  }
});

// delete a location
router.delete("/:id", async(req, res) => {
    try {
      const deletedLocation = await Location.findByIdAndDelete(req.params.id);
      res.status(200).json(deletedLocation);
    } catch(err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;