const express = require("express");
const router = express.Router();

const {
  getZombiesInQuarentine,
  add,
} = require("../controller/zombieController");

router.get("/api/zombies", getZombiesInQuarentine);
router.post("/api/zombies", add);

module.exports = router;
