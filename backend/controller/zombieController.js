const zombie_model = require("../model/zombie_model");
const Zombie_model = require("../model/zombie_model");

exports.getZombiesInQuarentine = async (req, res, next) => {
  try {
    let data = await zombie_model.find();
    res.json(data);
  } catch (error) {
    res.json({ message: error.message });
  }
};

exports.add = async (req, res, next) => {
  try {
    const zombie = new zombie_model(req.body);
    await zombie.save();
    res.send(zombie);
  } catch (error) {
    res.json({ message: error.message });
  }
};
