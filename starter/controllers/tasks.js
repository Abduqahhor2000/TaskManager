
const getAllTasks = (req, res) => {
    res.send("get All Tasks")
}
const createTask = (req, res) => {
    res.send("create Task")
}
const getTask = (req, res) => {
    res.send("get Task")
}
const updateTask = (req, res) => {
    res.send("update Task")
}
const deleteTask = (req, res) => {
    res.send("delete Task")
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
  }