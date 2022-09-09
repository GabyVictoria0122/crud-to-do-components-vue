<template>
  <div>
    <nav class="purple accent-3">
      <div class="nav-wrapper">
        <div class="filtro">
          <nav class="purple accent-3">
            <!-- <div class="nav-wrapper"> -->
            <form>
              <div class="input-field">
                <input
                  id="search"
                  type="search"
                  required
                  placeholder="Pesquisar tarefa..."
                />
                <label class="label-icon" for="search"
                  ><i class="fa-solid fa-magnifying-glass"></i
                ></label>
              </div>
            </form>
          </nav>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "testePesquisar",
  computed: {
    filterTasks() {
      return this.tasks.filter((el) =>
        el.title.toLowerCase().includes(this.textFilter.toLowerCase())
      );
    },
  },
};
</script>
