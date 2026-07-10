import Team from "../models/Team.js";

export const getMembers = async (req, res) => {
  try {
    const members = await Team.find();

    res.json(members);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const createMember = async (req, res) => {
  try {
    const member = await Team.create(req.body);

    res.status(201).json(member);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const deleteMember = async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};