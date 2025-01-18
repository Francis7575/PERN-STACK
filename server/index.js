const express = require("express");
const cors = require("cors");

const todoRoutes = require('./routes/todoRoutes')

const app = express();
//middleware
app.use(cors());
app.use(express.json()); //req.body

app.use("/api", todoRoutes)

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
