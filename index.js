const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from 'public' directory
app.use(express.static('public'));

// Sample in-memory data
let todos = [
  { id: 1, text: 'Learn Express.js', completed: false },
  { id: 2, text: 'Build a REST API', completed: false }
];

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Express Todo App!');
});

// Get all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Add a new todo
app.post('/api/todos', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    text: req.body.text,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Toggle todo completion status
app.patch('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(todo => todo.id === id);

  if (todoIndex === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  todos[todoIndex].completed = !todos[todoIndex].completed;
  res.json(todos[todoIndex]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});