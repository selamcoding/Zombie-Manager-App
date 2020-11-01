const zombie_model = require("../model/zombie_model");
const { ObjectId } = require("mongodb");

//track all zombies location
exports.getZombiesInQuarentine = async (req, res, next) => {
  try {
    let data = await zombie_model.find();
    res.json(data);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//add zombies to a selected location
exports.add = async (req, res, next) => {
  try {
    const zombie = new zombie_model({
      location: req.body.location,
      zombies: req.body.zombies,
    });
    await zombie.save();
    res.send(zombie);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//move location of quarentine of zombies
exports.moveLocation = async (req, res, next) => {
  try {
    await zombie_model.updateOne(
      {
        location: req.body.moveTo,
      },
      { $push: { zombies: { $each: req.body.zombies } } }
    );

    const movingItem = req.body.zombies.map((list) => list.tag_name); // ["abcd","cde"]
    await zombie_model.updateOne(
      {
        location: req.body.moveFrom,
      },
      { $pull: { zombies: { tag_name: { $in: movingItem } } } }
    );

    res.json({ success: true });
  } catch (error) {
    res.json({ message: error.message });
  }
};
