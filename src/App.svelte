<script lang="ts">
  import { _, locale, locales } from 'i18n';
  export let name: string;
</script>

<main class="text-center p-4 max-w-full md:max-w-md mx-auto">
  <h1 class="text-primary uppercase text-6xl font-extralight my-8">
    {$_('hello')}
    {name}!
  </h1>
  <p>
    <a href="https://github.com/wadehrarshpreet/svelte-typescript-boilerplace"
      >Svelte Typescript Boilerplate</a
    >
    by
    <a target="_blank" href="https://wadehrarshpreet.com">Arshpreet Wadehra</a>
  </p>
  <select bind:value={$locale}>
    {#each $locales as locale}
      <option value={locale}>{locale}</option>
    {/each}
  </select>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
