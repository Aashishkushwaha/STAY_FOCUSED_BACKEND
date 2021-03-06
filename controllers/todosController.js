const Todo = require("../models/Todo");

const getTodos = async (req, res) => {
  const todos = await Todo.find({ userId: req.userId });
  return res.json({ todos });
};

const addTodo = async (req, res) => {
  const { text } = req.body;
  if (!text)
    return res
      .status(400)
      .json({ code: 400, message: "Please provide text for todo item." });
  if (text.length > 35)
    return res
      .status(400)
      .json({ code: 400, message: "Todo text is to long." });

  const todo = await new Todo({ text, userId: req.userId }).save();
  return res
    .status(201)
    .json({ message: "Todo item added successfully.", todo });
};

const updateTodo = async (req, res) => {
  try {
    const { _id } = req.body;

    if (!_id)
      res
        .status(400)
        .json({ code: 400, message: "Please provide all details" });

    const { modifiedCount } = await Todo.updateOne({ _id }, { ...req.body });

    if (!modifiedCount)
      return res
        .status(400)
        .json({ code: 400, message: "Please provide accurate details." });

    return res
      .status(200)
      .json({ message: "Todo item details updated successfully." });
  } catch (err) {
    return res.status(401).json({ code: 401, message: err.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { _id } = req.body;

    if (!_id)
      res
        .status(400)
        .json({ code: 400, message: "Please provide all details." });

    const { deletedCount } = await Todo.deleteOne({ _id });

    if (deletedCount)
      return res
        .status(200)
        .json({ message: "Todo item details deleted successfully." });
    return res.status(200).json({ message: "Todo item details not found." });
  } catch (err) {
    return res.status(401).json({ code: 401, message: err.message });
  }
};

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
