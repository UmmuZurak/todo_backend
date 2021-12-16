//import todo model
const { Todo } = require("../models/todo");

//create a get all todos controller
const getAllTodos = (req, res) => {
  Todo.find()
    .then((response) => {
      console.log(response);
      res.send(response);
    })
    .catch((err) => {
      res.send("an error occured");
    });
  //   res.send("Get all todos");
};

const getTodoById = (req, res) => {
  const id = req.params.id;

  Todo.findById(id)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send("an error occured");
    });
};

const createTodo = (req, res) => {
  const todo = new Todo(req.body);

  todo
    .save()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
};

const deleteTodo = (req, res) => {
  const id = req.params.id;

  Todo.findByIdAndDelete(id)
    .then((response) => {
      res.send("Todo with specified ID deleted");
    })
    .catch((err) => {
      res.send("an error occured");
    });
};

const updateTodo = (req, res) => {
  const id = req.params.id;

  Todo.findByIdAndUpdate({ _id: id }, req.body)
    .then((response) => {
      res.send("Todo with specified ID updated");
    })
    .catch((err) => {
      res.send("an error occured while updating todo");
    });
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  deleteTodo,
  updateTodo,
};
