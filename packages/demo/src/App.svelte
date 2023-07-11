<script lang="ts">
  import '../../lib';

  import { initializeApp } from "firebase/app";
  import {
    signInWithPopup,
    getAuth,
  } from "firebase/auth";
  import {onMount} from "svelte";
  import firebase from "firebase/compat";
  import OAuthProvider = firebase.auth.OAuthProvider;

  let app;

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

    app = initializeApp(firebaseConfig);
  })
  const login = () => {
    const provider = new OAuthProvider('microsoft.com');
    provider.setCustomParameters({
      prompt: 'select_account',
    });
    signInWithPopup(getAuth(app), provider)
  }
</script>

<main>
    <mcs-navbar logosrc="/emerald-exchange-wide.svg" />

    <button on:click={login}>
        LOGIN
    </button>
</main>