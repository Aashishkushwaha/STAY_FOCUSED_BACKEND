const router = require("express").Router();
const {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todosController");

router
  .route("/")
  .get(getTodos)
  .post(addTodo)
  .put(updateTodo)
  .delete(deleteTodo);

module.exports = router;
