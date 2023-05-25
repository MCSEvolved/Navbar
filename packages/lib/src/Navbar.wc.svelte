<svelte:options tag="mcs-navbar"/>

<script lang="ts">
  export let count = 0;

  function onClick() {
    count = +count + 1
  }
</script>

<button on:click={onClick}>
  Count: {count}
</button>