<script context="module">
  import { gql } from "apollo-boost";
  import { client, BOOKS } from "./data";

  export async function preload() {
    return {
      cache: await client.query({ query: BOOKS })
    };
  }
</script>

<script>
  import { getClient, restore, query } from "svelte-apollo";

  export let cache;
  restore(client, { query: BOOKS, data: cache.data });

  const books = query(client, { query: BOOKS });
</script>

<ul>
  {#await $books}
    <li>Loading...</li>
  {:then result}
    {#each result.data.User as book (book.id)}
      <li>{book.id}</li>
      <li>{book.name}</li>
      <li>{book.email}</li>
      <li />
    {:else}
      <li>No books found</li>
    {/each}
  {:catch error}
    <li>Error loading books: {error}</li>
  {/await}
</ul>
