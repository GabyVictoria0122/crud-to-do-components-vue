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
                  <h2>New Task</h2>
                  <form action="">
                    <div class="input-field col s12">
                      <input
                        placeholder="Title"
                        id="title"
                        type="text"
                        class="validate"
                        required
                        v-model="form.title"
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
                        v-model="form.project"
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
                        v-model="form.date"
                        type="date"
                        class="datepicker"
                        id="dueTo"
                      />
                      <label for="dueTo">Date due to</label>
                    </div>
                    <div class="input-field col s12"></div>
                    <button
                      @click="salvarTarefa"
                      class="waves-effect waves-light btn-large light-blue lighten-2"
                      id="btnSave"
                    >
                      Save
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
  data() {
    return {
      form: {
        id: null,
        title: null,
        dueTo: null,
        project: null,
        usuario: null,
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
      this.$emit("salvarClick", novaTarefa);
    },
  },
};
</script>
