<template>
  <div>
    <Search />
    <task-list
      :tasks="tasks"
      @deleteTasks="delTarefas"
      v-show="mostrarListaTasks"
    ></task-list>
    <div style="margin-bottom: 3%" class="plus center-align add">
      <button
        class="btn-floating btn-large waves-effect waves-light"
        @click="mostrarListaTasks = false"
        v-show="mostrarListaTasks"
      >
        <i class="fa-solid fa-plus light-blue lighten-2"></i>
      </button>
    </div>
    <TaskForm @salvarClick="addTarefas" v-show="!mostrarListaTasks" />
    <EditTask />
    <FooterBar />
  </div>
</template>

<script>
import Search from "../src/components/Search.vue";
import FooterBar from "../src/components/FooterBar.vue";
import TaskList from "../src/components/TaskList.vue";
import TaskForm from "../src/components/TaskForm.vue";
import EditTask from "../src/components/EditTask.vue";

import tasksApi from "./tasksApi.js";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export default {
  name: "App",
  data() {
    return {
      tasks: [],
      mostrarListaTasks: true,
    };
  },
  components: {
    Search,
    FooterBar,
    TaskList,
    TaskForm,
    EditTask,
  },
  methods: {
    obterTarefas() {
      tasksApi.getTasks((respostaApi) => {
        this.tasks = respostaApi;
      });
    },
    addTarefas(novaTarefa) {
      tasksApi.postTasks(novaTarefa, () => {
        this.obterTarefas();
        this.mostrarListaTasks = true;
      });
    },
    attTarefas() {
      tasksApi.putTasks((respostaApi) => {
        this.tasks = respostaApi;
        this.obterTarefas();
      });
    },
    delTarefas(tarefaId) {
      console.log("recebido", tarefaId);
      tasksApi.deleteTasks(tarefaId, (respostaApi) => {
        this.tasks = respostaApi;
        this.obterTarefas();
      });
    },
  },
  created() {
    this.obterTarefas();
  },
};
</script>
