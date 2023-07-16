<svelte:options tag="mcs-userinfo" />

<script lang="ts">
  import { onMount } from "svelte";

  import { initializeApp } from "firebase/app";
  import {
    getAuth,
    signOut,
  } from "firebase/auth";
  import {getStorage, ref, getDownloadURL, uploadBytes} from "firebase/storage"
  import type { StorageReference } from "firebase/storage"
  import AccountIcon from "../images/AccountIcon.svg";
  import SettingsIcon from "../images/SettingsIcon.svg";
  import LogoutIcon from "../images/LogoutIcon.svg";
  import "./LoginButton.wc.svelte"

  export let debug: string;

  let profilesrc = undefined;
  let username = "";
  let isLoggedin = false;
  let openedDropdown = false;

  function handleMenuOpen() {
		openedDropdown = true
    document.addEventListener('click', handleMenuClose)
	}
	function handleMenuClose() {
		openedDropdown = false
		document.removeEventListener('click', handleMenuClose)
	}

  onMount(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyBlfZjJyhjcgyPfxaqkZHSR5SciFBWC5IY",
      authDomain: "mcsynergy-55878.firebaseapp.com",
      projectId: "mcsynergy-55878",
      storageBucket: "mcsynergy-55878.appspot.com",
      messagingSenderId: "822930182678",
      appId: "1:822930182678:web:23e8f0b3e044ae06cb9b37",
      measurementId: "G-3BK4KLMGTJ",
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const saveProfilePicture = async (pfRef: StorageReference) => {
      const accessToken = localStorage.getItem("accessToken");
      try {
        const photo = await fetch(
                "https://graph.microsoft.com/v1.0/me/photo/$value",
                { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        if(photo.status !== 200) throw photo.statusText
        const blob = await photo.blob()
        await uploadBytes(pfRef, blob)
      } catch (error) {
        console.error(error)
      }
    }

    auth.onAuthStateChanged(async (user) => {
      if (user) {
        isLoggedin = true;
        username = user.displayName;

        const storage = getStorage(app)
        const pfRef = ref(storage, `user/${user.uid}/profile.png`)

        try {
          profilesrc = await getDownloadURL(pfRef)
        } catch (error: any) {
          if(error.code === "storage/object-not-found") await saveProfilePicture(pfRef)
          profilesrc = await getDownloadURL(pfRef)
        }

      } else {
        isLoggedin = false;
        profilesrc = undefined;
        username = "";
      }
    });
  });

</script>

<div class="user-info">
  {#if username != ""}
    <p>{username}</p>
  {:else}
    <mcs-loginbutton debug={debug}/>
  {/if}

  <div
    class="profile-picture"
    on:click|stopPropagation={handleMenuOpen}
    on:keydown|stopPropagation={handleMenuOpen}
  >
    {#if isLoggedin}
      {#if profilesrc != undefined}
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          src={profilesrc}
          style="border-radius: 50%; width: 3rem"
          alt="profile-picture"
        />
      {:else}
        <AccountIcon fill="#2bc0d3" />
      {/if}
    {:else}
      <a href="/login">
        <AccountIcon fill="#2bc0d3" />
      </a>
    {/if}
  </div>

  {#if isLoggedin}
    <div style={`display: ${openedDropdown ? undefined : 'none'};`} class="dropdown" on:click|stopPropagation={() => {}} on:keydown|stopPropagation={() => {}}>
      <a class="dropdown-button" href="/settings">
        <SettingsIcon height=40 width=40 viewBox="-2.5 0 25 24"/> <span class="dropdown-button-text">Settings</span>
      </a>
      <div class="dropdown-button" on:click={() => signOut(getAuth())} on:keydown={() => signOut(getAuth())}>
        <LogoutIcon height=40 width=40 /> <span class="dropdown-button-text">Log out</span>
      </div>
    </div>
  {/if}
</div>

<style>
  .user-info {
    display: flex;
    align-items: center;
  }
  .profile-picture {
    margin-left: 1rem;
    margin-right: 0.5rem;
  }

  p {
    color: white;
    font-size: 1.5rem;
    font-family: Calibri;
  }

  .dropdown {
    position: absolute;
    top: 3.5rem;
    right: 4px;
    width: 15rem;
    height: 6.5rem;
    background-color: #206191;
    border-radius: 16px;
    
    transition: 200ms;
  }
  .dropdown-button {
    width: max-content;
    height: 3rem;
    display: flex;
    align-items: center;
    margin-left: 0.25rem;

    text-decoration: none;

    font-size: 1.5rem;
    font-family: Calibri;

    transition: 100ms;

    cursor: pointer;

    color: white;
  }

  .dropdown-button:hover {
    transform: scale(1.05);
  }

  .dropdown-button-text {
    margin-left: 12px;
  }

</style>
