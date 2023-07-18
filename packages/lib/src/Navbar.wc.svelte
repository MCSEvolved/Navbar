<svelte:options tag="mcs-navbar"/>

<script lang="ts">
  import "./components/Portal.wc.svelte";
  import "./components/UserInfo.wc.svelte";
  import {onMount} from "svelte";
  export let logosrc;
  export let debug;
  export let redirect = "/";
</script>

<header>
  <div class='bg-MCS-DarkerBlue h-14 flex items-center justify-between'>
    <div class='flex items-center w-80 h-full'>
      <mcs-portal />
      <a href={redirect} class='h-max ml-1'>
        <img src={logosrc} alt='Logo' class='logo'/>
      </a>
    </div>
    <div class='flex items-center w-80 justify-end h-full'>
      <mcs-userinfo debug={debug}/>
    </div>
  </div>
</header>

<style>
  .bg-MCS-DarkerBlue {
    --tw-bg-opacity: 1;
    background-color: rgb(13 29 48 / var(--tw-bg-opacity));
  }

  .h-14 {
    height: 3.5rem;
  }
  .flex {
    display: flex;
  }

  .items-center {
    align-items: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .w-80  {
    width: 20rem;
  }

  .h-full {
    height: 100%;
  }

  .h-max {
    height: -moz-max-content;
    height: max-content;
  }

  .ml-1 {
    margin-left: 0.25rem;
  }

  .logo {
    height: 2rem;
    margin-top: 0.25rem;
    z-index: 1001;
  }

  .justify-end {
    justify-content: flex-end;
  }
</style>