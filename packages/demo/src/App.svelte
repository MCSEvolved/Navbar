<script lang="ts">
  import '../../lib';

  import { initializeApp } from "firebase/app";
  import {
    signInWithPopup,
    getAuth,
    OAuthProvider,
    browserLocalPersistence,
    getAdditionalUserInfo,
    signOut,
  } from "firebase/auth";
  import {onMount} from "svelte";

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

   const login = async () => {
    const auth = getAuth();
    const handleNewUser = async (idToken: string) => {
      await fetch("http://localhost:8000/api/auth/check-user-roles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idtoken: idToken }),
      });

      await auth.currentUser?.getIdToken(true);
    };

    const provider = new OAuthProvider("microsoft.com");
    provider.setCustomParameters({
      prompt: "select_account",
    });

    await auth.setPersistence(browserLocalPersistence);

    try {
      const result = await signInWithPopup(auth, provider);
      const accessToken =
        OAuthProvider.credentialFromResult(result)?.accessToken;
      if (accessToken) localStorage.setItem("accessToken", accessToken);

      if (getAdditionalUserInfo(result)?.isNewUser) {
        const idToken = await result.user.getIdToken();
        await handleNewUser(idToken);
      }
    } catch (error) {
      alert(
        "Something went wrong. Please try again. (Error: " + error.code + ")"
      );
    }
  }
</script>

<main>
    <mcs-navbar logosrc="/emerald-exchange-wide.svg" debug="true"/>

    <button on:click={login}>
        LOGIN
    </button>
</main>