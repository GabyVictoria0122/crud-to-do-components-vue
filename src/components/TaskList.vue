<template>
  <div>
    <div class="section">
      <!--   Icon Section   -->
      <div class="row">
        <!-- card de tarefa que repete para cada item do array -->
        <div v-for="tarefa in tasks" :key="tarefa.id" class="card horizontal">
          <div class="card-stacked">
            <div class="card-content">
              <p>
                {{ tarefa.title }}
                <span class="new badge data-badge-caption light-blue lighten-2">
                  {{ tarefa.dueTo }}
                </span>
              </p>
              <span class="chip #f8bbd0 pink lighten-4">{{
                tarefa.project
              }}</span>
            </div>
            <div class="card-action">
              <a
                @click="$emit('editarTasks', tarefa.id)"
                class="light-blue-text fa-solid fa-pen-to-square"
              ></a>
              <a
                @click="$emit('deleteTasks', tarefa.id)"
                class="light-blue-text fa-solid fa-trash-can"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tasks"],
};
</script>
