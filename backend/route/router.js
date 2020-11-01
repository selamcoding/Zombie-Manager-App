const express = require("express");
const router = express.Router();

const {
  getZombiesInQuarentine,
  add,
  moveLocation,
} = require("../controller/zombieController");

router.get("/api/zombies", getZombiesInQuarentine);
router.post("/api/zombies", add);
router.post("/api/zombies/move-location", moveLocation);

module.exports = router;
