const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;


// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Home
app.get("/", ( res) => {
   res.json({ message: "Success" });
});

// Post request
app.post("/POST/v1/tasks", (req, res) => {
   res.json({ id: "2" }).statusCode(201);
   console.log(req);
});


// GET request
app.get("/GET/v1/tasks", (req, res) => {
   res.json({
      tasks: [
         { id: 1, title: "Test Task 1", is_completed: true },
         { id: 2, title: "Test Task 2", is_completed: false },
      ],
   }).status(200);
})

// GET request 2
app.get("GET/v1/tasks/3", (req, res) => {
   res.json({ id: 3, title: "Test Task 2", is_completed: false }).status(200);
});


// DELETE 
app.delete("DELETE /v1/tasks/3");


//UPDATE
app.put("PUT/v1/tasks/:id", (res) => {
   res.json("").status(204);
});

// POST request 2
app.post("POST/v1/tasks", (res) => {
   res.json({ tasks: [{ id: 1 }, { id: 2 }, { id: 3 }] }).statusCode(201)
});

// DELETE request 2
app.delete('DELETE/v1/tasks',(res)=>{
  res.json("").status(204)
})

// SERVER
app.listen(port, () => {
   console.log(`Server running on ${port}`);
});
