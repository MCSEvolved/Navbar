<script lang="ts">
  import PortalGridIcon from "../images/PortalGridIcon.svg"
  import Asset_9 from "../images/Asset 9.svg"
  import Asset_10 from "../images/Asset 10.svg"
  import Asset_11 from "../images/Asset 11.svg"
  import Asset_12 from "../images/Asset 12.svg"
  import Asset_13 from "../images/Asset 13.svg"

  let isToggled = false;
</script>

<svelte:options tag="mcs-portal" />

<div>
        <section class="popover" class:slidein={isToggled} on:mouseleave={() => isToggled = false}>
            <a href="/jukebox" class='page-icon'>
                <Asset_9 style="height: 2rem"></Asset_9>
            </a>
            <a href="/turtle" class='page-icon'>
                <Asset_10 style="height: 2rem"></Asset_10>
            </a>
            <a href="/analyser" class='page-icon'>
                <Asset_11 style="height: 2rem"></Asset_11>
            </a>
            <a href="/storage" class='page-icon'>
                <Asset_12 style="height: 2rem"></Asset_12>
            </a>
            <a href="/home" class='page-icon'>
                <Asset_13 style="height: 2rem"></Asset_13>
            </a>
        </section>

        <div class:rotate-180={isToggled} class='portal-button' on:mousedown={() => isToggled = !isToggled}>
            <PortalGridIcon style="width: max-content; height: max-content"/>
        </div>
</div>

<style>
    .portal-button {
        margin-left: 1rem;
        margin-right: 0.5rem;
        transition: 300ms;
        width: 1.75rem;
        height: 1.75rem;
    }

    .rotate-180 {
        transform: rotate(180deg);
    }

    .popover {
        background-color: rgb(13 29 48 / var(--tw-bg-opacity));
        position: absolute;
        height: calc(100vh - 3.5rem);
        width: 13rem;
        transition-duration: 200ms;
        transition-property: transform;
        top: 3.5rem;
        left: -15rem;
        transform-origin: top left;
        transform: scale(0.9);
        overflow: hidden;
    }

    .slidein {
        left: 0;
        transform: scale(1);
    }

    .page-icon {
        height: 2rem;
        width: auto;
        margin-top: 1rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        display: flex;
        justify-content: center;
    }
</style>