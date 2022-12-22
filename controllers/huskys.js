import Husky from "../models/husky.js";

export const getHuskies = async (req, res) => {
  try {
    const huskies = await Husky.find();
    res.json(huskies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getHusky = async (req, res) => {
  try {
    const { id } = req.params;
    const husky = await Husky.findById(id);

    if (husky) {
      return res.json(husky);
    }

    res.status(404).json({ message: "Husky not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createHusky = async (req, res) => {
  try {
    const husky = new Husky(req.body);
    await husky.save();
    res.status(201).json(husky);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateHusky = async (req, res) => {
  try {
    const { id } = req.params;
    const husky = await Husky.findByIdAndUpdate(id, req.body);
    res.status(201).json(husky);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteHusky = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Husky.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Husky deleted!");
    }

    throw new Error("Husky not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};