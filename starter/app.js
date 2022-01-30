const express = require("express")
const app = express()
const tasks = require("./router/tasks")
app.use(express.json())
app.use("/api/v1/tasks", tasks)

app.get("/", (req, res) => {
    res.send("home page")
})







const port = 3000
app.listen(port, () => console.log(`Port ${port}. Ooo. very good very good!!!`)) 