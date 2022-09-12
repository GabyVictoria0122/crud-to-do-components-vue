<template>
  <div>
    <div class="container">
      <div class="section">
        <!--   Icon Section   -->
        <div class="row">
          <div class="col s12" id="elTasks">
            <!-- New tasks area-->
            <div class="card horizontal">
              <div class="card-stacked">
                <div class="card-content">
                  <h2>{{ titulo }}</h2>
                  <form action="">
                    <div class="input-field col s12">
                      <input
                        placeholder="Title"
                        id="title"
                        type="text"
                        class="validate"
                        required
                        name="title"
                        :value="title"
                        @input="form.title = $event.target.value"
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
                        :value="project"
                        @input="form.project = $event.target.value"
                      >
                        <option value="" disabled selected>
                          Choose your option
                        </option>
                        <option value="Estudos">Estudos</option>
                        <option value="Financeiro">Financeiro</option>
                        <option value="Trabalho">Trabalho</option>
                      </select>
                    </div>

                    <div class="input-field col s12">
                      <input
                        @input="form.dueTo = $event.target.value"
                        type="date"
                        class="datepicker"
                        id="dueTo"
                        :value="dueTo"
                      />
                      <label for="dueTo">Date due to</label>
                    </div>
                    <div class="input-field col s12"></div>
                    <button
                      @click="salvarTarefa"
                      class="waves-effect waves-light btn-large light-blue lighten-2"
                      id="btnSave"
                    >
                      {{ btn }}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["titulo", "title", "project", "btn", "id"],
  data() {
    return {
      form: {
        id: null,
        title: null,
        dueTo: null,
        project: null,
        usuario: null,
        // titulo: null,
      },
    };
  },
  methods: {
    salvarTarefa() {
      const novaTarefa = {
        title: this.form.title,
        dueTo: this.form.dueTo,
        project: this.form.project,
      };
      if (this.btn == "Adicionar") {
        this.$emit("salvarClick", novaTarefa);
        // this.titulo = "Adicione uma nova Tarefa";
      } else {
        novaTarefa.id = this.id;
        this.$emit("alterarClick", novaTarefa);
      }
    },
  },
};
</script>
