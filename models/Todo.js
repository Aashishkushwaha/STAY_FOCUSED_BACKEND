const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    completed: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      minlength: 1,
      maxlength: 35,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todos", todoSchema);
