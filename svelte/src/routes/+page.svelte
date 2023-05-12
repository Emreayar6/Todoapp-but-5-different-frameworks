<script>
  import { onMount } from "svelte";

  let todos = [];
  let todoText = "";

  onMount(() => {
    const Todos = localStorage.getItem("todos");
    todos = JSON.parse(Todos) || [];
  });

  function pushTodo() {
    todos = [...todos, todoText];
    localStorage.setItem("todos", JSON.stringify(todos));
    todoText = "";
  }
</script>

<main>
  <ul>
    {#each todos as todo}
      <li>{todo}</li>
    {/each}
  </ul>

  <form on:submit|preventDefault={pushTodo}>
    <input bind:value={todoText} />
    <input type="submit" value="Add todo" />
  </form>
</main>
