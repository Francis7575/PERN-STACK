const express = require("express");
const { createTodo, todoList, todoListById, updateTodoById, deleteTodoById } = require("../controller/todoController");

const router = express.Router();

router.post("/create-todo", createTodo);
router.get("/todos", todoList);
router.get("/todos/:id", todoListById);
router.put("/update-todo/:id", updateTodoById);
router.delete("/delete-todo/:id", deleteTodoById);

module.exports = router;
