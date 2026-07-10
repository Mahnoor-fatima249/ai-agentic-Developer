import Note from "../models/Note.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();

    res.json(notes);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);

    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};