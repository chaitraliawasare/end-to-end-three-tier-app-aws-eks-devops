// backend/server.js

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


let db;

function connectWithRetry() {
  db = mysql.createConnection({
    host: "db",
    user: "root",
    password: "password",
    database: "tasks_db"
  });

  db.connect((err) => {
    if (err) {
      console.log("DB not ready, retrying in 5 seconds...");
      setTimeout(connectWithRetry, 5000);
    } else {
      console.log("Connected to MySQL");
    }
  });
}

connectWithRetry();

// Get tasks
app.get("/tasks", (req, res) => {
  db.query("SELECT * FROM tasks", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Delete task
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM tasks WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).send(err);
    res.send("Task deleted");
  });
});

app.listen(5000, () => console.log("Backend running on port 5000"));