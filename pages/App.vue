<template>
  <div>
    <Search />
    <task-list
      :tasks="tasks"
      @deleteTasks="delTarefas"
      v-show="mostrar"
    ></task-list>
    <div style="margin-bottom: 3%" class="plus center-align add">
      <a
        class="btn-floating btn-large waves-effect waves-light"
        @click="mostrar = false"
      >
        <i class="fa-solid fa-plus light-blue lighten-2"></i>
      </a>
    </div>

    <div class="card-content" v-show="!mostrar">
      <h2>New Task</h2>
      <form action="">
        <div class="input-field col s12">
          <input
            placeholder="Title"
            id="title"
            type="text"
            class="validate"
            required
          />
          <label for="title">Title</label>
        </div>

        <div class="input-field col s12">
          <div>
            <label for="project">Pick a Project</label>
          </div>
          <select
            class="browser-default col s12 disabled"
            id="project"
            name="project"
          >
            <option value="" disabled selected>Choose your option</option>
            <option value="Estudos">Estudos</option>
            <option value="Financeiro">Financeiro</option>
            <option value="Trabalho">Trabalho</option>
          </select>
        </div>

        <div class="input-field col s12">
          <input type="date" class="datepicker" id="dueTo" />
          <label for="dueTo">Date due to</label>
        </div>
        <div class="input-field col s12"></div>
        <a
          class="waves-effect waves-light btn-large light-blue lighten-2"
          id="btnSave"
          >Save</a
        >
      </form>
    </div>
    <FooterBar />
  </div>
</template>

<script>
import Search from "../src/components/Search.vue";
import FooterBar from "../src/components/FooterBar.vue";
import TaskList from "../src/components/TaskList.vue";
import tasksApi from "./tasksApi.js";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export default {
  name: "App",
  data() {
    return {
      tasks: [],
      mostrar: true,
    };
  },
  components: {
    Search,
    FooterBar,
    TaskList,
  },
  methods: {
    obterTarefas() {
      tasksApi.getTasks((respostaApi) => {
        this.tasks = respostaApi;
      });
    },
    addTarefas() {
      tasksApi.postTasks((respostaApi) => {
        this.tasks = respostaApi;
      });
    },
    attTarefas() {
      tasksApi.putTasks((respostaApi) => {
        this.tasks = respostaApi;
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
