<template>
  <div>
    <ul>
      <li v-for="todo in todos" v-bind:key="todo">{{ todo }}</li>
    </ul>

    <form v-on:submit.prevent="pushTodo">
      <input v-model="todoText">
      <input type="submit" value="Add Todo">
    </form>
  </div>

</template>


<script>
export default {
  name: "TodoApp",
  data: function () {
    return {
      todos: [],
      todoText: '',
    };
  },
  methods: {
    pushTodo: function () {
      this.todos = [...this.todos, this.todoText];
      localStorage.setItem('todos', JSON.stringify(this.todos));
      this.todoText = '';
    },
  },
  mounted: function () {
    const Todos = localStorage.getItem('todos');
    this.todos = JSON.parse(Todos) || [];
  }
};



</script>

<style scoped>


</style>