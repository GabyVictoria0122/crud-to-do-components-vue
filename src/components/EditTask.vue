<template>
        <div class="card horizontal  row col s12">
            <div class="card-stacked">
                <div class="card-content">
                    <h2>Edit Task</h2>
                    <form action="">
                        <div class="input-field col s12">
                            <input v-model="taskFrom.title" placeholder="Title" id="title" type="text" class="validate" required />
                            <label for="title">Title</label>
                        </div>
                        <div class="input-field  col s12">
                            <div>
                                <label for="project">Pick a Project</label>
                            </div>
                            <select v-model="taskFrom.project" class=" browser-default col s12 disabled" id="project"
                            name="project">
                                <option value="" disabled selected>Choose your option</option>
                                <option value="Estudos">Estudos</option>
                                <option value="Financeiro">Financeiro</option>
                                <option value="Trabalho">Trabalho</option>
                            </select>
                        </div>
                        <div class="input-field col s12">
                            <input v-model="taskFrom.dueTo" type="date" class="datepicker" id="dueTo" />
                            <label for="dueTo">Date due to</label>
                        </div>
                        <div class="input-field col s12"></div>
                            <a  class="waves-effect waves-light btn-large light-blue lighten-2"
                             id="btnSave">Save</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  data() {
    return {
      taskFrom: {
        id: null,
        title: null,
        dueTo: null,
        project: null,
        usuario: null,
      },
    };
  },
};
</script>
