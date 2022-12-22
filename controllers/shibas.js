import Shiba from "../models/shiba.js";

export const getShibas = async (req, res) => {
  try {
    const shibas = await Shiba.find();
    res.json(shibas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getShiba = async (req, res) => {
  try {
    const { id } = req.params;
    const shiba = await Shiba.findById(id);

    if (shiba) {
      return res.json(shiba);
    }

    res.status(404).json({ message: "Shiba not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createShiba = async (req, res) => {
  try {
    const shiba = new Shiba(req.body);
    await shiba.save();
    res.status(201).json(shiba);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateShiba = async (req, res) => {
  try {
    const { id } = req.params;
    const shiba = await Shiba.findByIdAndUpdate(id, req.body);
    res.status(201).json(shiba);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteShiba = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Shiba.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Shiba deleted!");
    }

    throw new Error("Shiba not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};