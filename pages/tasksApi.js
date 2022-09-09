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
  putTasks: (tarefaId, callback) => {
    axios
      .put(`/tasks/${tarefaId}`)
      .then((response) => {
        callback(response.data);
        this.getTasks();
      })
      .catch((error) => {
        console.log("error:", error);
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
