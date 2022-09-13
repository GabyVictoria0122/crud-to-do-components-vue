import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export default {
  getTasks: (callback) => {
    axios
      .get("/tasks")
      .then((response) => {
        callback(response.data);
        console.log("get foi");
      })
      .catch((error) => {
        console.log("error:", error);
      });
  },
  getTask: (tarefaId, callback) => {
    axios
      .get(`/tasks/${tarefaId}`)
      .then((response) => {
        callback(response.data);
        console.log("get foi");
      })
      .catch((error) => {
        console.log("error:", error);
      });
  },
  postTasks: (tasksData, callback) => {
    axios
      .post("/tasks", tasksData)
      .then((response) => {
        callback(response.data);
        console.log(tasksData);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  },
  updateTasks: (task, callback) => {
    axios
      .patch(`http://localhost:3000/tasks/${task.id}`, task)
      .then((response) => {
        callback(response.data);
      });
  },
  deleteTasks: (tarefaId, callback) => {
    axios
      .delete(`/tasks/${tarefaId}`)
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  },
};
