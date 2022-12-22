import Pug from "../models/pug.js";

export const getPugs = async (req, res) => {
  try {
    const pugs = await Pug.find();
    res.json(pugs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getPug = async (req, res) => {
  try {
    const { id } = req.params;
    const pug = await Pug.findById(id);

    if (pug) {
      return res.json(pug);
    }

    res.status(404).json({ message: "Pug not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createPug = async (req, res) => {
  try {
    const pug = new Pug(req.body);
    await pug.save();
    res.status(201).json(pug);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updatePug = async (req, res) => {
  try {
    const { id } = req.params;
    const pug = await Pug.findByIdAndUpdate(id, req.body);
    res.status(201).json(pug);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deletePug = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Pug.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Pug deleted!");
    }

    throw new Error("Pug not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};