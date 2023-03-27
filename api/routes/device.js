const express = require("express");
const router = express.Router();
const Device = require("../models/Devices");

// create a device
router.post("/", async(req, res) => {
  const newDevice = new Device(req.body);
  try {
    const savedDevice = await newDevice.save();
    res.status(200).json(savedDevice);
  } catch(err) {
    res.status(500).json(err);
  }
});

// get all devices
router.get("/", async(req, res) => {
  try {
    const devices = await Device.find();
    res.status(200).json(devices);
  } catch(err) {
    res.status(500).json(err);
  }
});

// get a device by id
router.get("/:id", async(req, res) => {
  try {
    const device = await Device.findById(req.params.id);
    res.status(200).json(device);
  } catch(err) {
    res.status(500).json(err);
  }
});

// update a device by id
router.put("/:id", async(req, res) => {
  try {
    const updatedDevice = await Device.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedDevice);
  } catch(err) {
    res.status(500).json(err);
  }
});

// delete a device by id
router.delete("/:id", async(req, res) => {
  try {
    const deletedDevice = await Device.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedDevice);
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
