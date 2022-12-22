import Corgis from "../models/corgi.js";

export const getCorgies = async (req, res) => {
  try {
    const corgies = await Corgis.find();
    res.json(corgies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getCorgi = async (req, res) => {
  try {
    const { id } = req.params;
    const corgi = await Corgis.findById(id);

    if (corgi) {
      return res.json(corgi);
    }

    res.status(404).json({ message: "Corgis not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createCorgi = async (req, res) => {
  try {
    const corgi = new Corgis(req.body);
    await corgi.save();
    res.status(201).json(corgi);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateCorgi = async (req, res) => {
  try {
    const { id } = req.params;
    const corgi = await Corgis.findByIdAndUpdate(id, req.body);
    res.status(201).json(corgi);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteCorgi = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Corgis.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Corgis deleted!");
    }

    throw new Error("Corgis not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};