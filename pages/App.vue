<template>
  <div>
    <Search />
    <task-list
      :tasks="tasks"
      @editarTasks="recebiEditar"
      @deleteTasks="delTarefas"
      v-show="mostrarListaTasks"
    ></task-list>
    <div style="margin-bottom: 3%" class="plus center-align add">
      <button
        class="btn-floating btn-large waves-effect waves-light"
        @click="mostrarCadastro"
        v-show="mostrarListaTasks"
      >
        <i class="fa-solid fa-plus light-blue lighten-2"></i>
      </button>
    </div>
    <TaskForm
      :titulo="form.titulo"
      :title="form.title"
      :project="form.project"
      :dueTo="form.dueTo"
      :btn="form.btn"
      :id="form.id"
      @salvarClick="addTarefas"
      @alterarClick="attTarefas"
      v-show="!mostrarListaTasks"
    />
    <FooterBar />
  </div>
</template>

<script>
import Search from "../src/components/Search.vue";
import FooterBar from "../src/components/FooterBar.vue";
import TaskList from "../src/components/TaskList.vue";
import TaskForm from "../src/components/TaskForm.vue";

import tasksApi from "./tasksApi.js";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export default {
  name: "App",
  data() {
    return {
      tasks: [],
      mostrarListaTasks: true,
      form: {
        id: null,
        title: null,
        dueTo: null,
        project: null,
        usuario: null,
        btn: "Adicionar",
      },
    };
  },
  components: {
    Search,
    FooterBar,
    TaskList,
    TaskForm,
  },
  methods: {
    obterTarefas() {
      tasksApi.getTasks((respostaApi) => {
        this.tasks = respostaApi;
        console.log("algo", respostaApi);
      });
    },
    mostrarCadastro() {
      this.mostrarListaTasks = false;
      this.form.btn = "Adicionar";
      this.form.titulo = "Adicione uma nova tarefa";
    },
    addTarefas(novaTarefa) {
      tasksApi.postTasks(novaTarefa, () => {
        this.obterTarefas();
        this.mostrarListaTasks = true;
      });
    },
    recebiEditar(tarefaId) {
      tasksApi.getTask(tarefaId, (task) => {
        console.log("ta indo", tarefaId, task);
        this.form.title = task.title;
        this.form.project = task.project;
        this.form.dueTo = task.dueTo;
        this.form.id = task.id;
        this.form.btn = "Editar";
        this.mostrarListaTasks = false;
        this.form.titulo = "Edite sua tarefa";
      });
    },
    attTarefas(tarefa) {
      tasksApi.updateTasks(tarefa, () => {
        console.log("att", tarefa);
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
