<script lang="ts">
  import {onMount} from "svelte";

  import {initializeApp} from 'firebase/app';
  import {getAuth, OAuthProvider, signInWithPopup, browserLocalPersistence, getAdditionalUserInfo, signOut, getRedirectResult} from 'firebase/auth';

  import AccountIcon from '../images/AccountIcon.svg'

  let profilesrc = undefined
  let username = ""

  onMount(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyBlfZjJyhjcgyPfxaqkZHSR5SciFBWC5IY",
      authDomain: "mcsynergy-55878.firebaseapp.com",
      projectId: "mcsynergy-55878",
      storageBucket: "mcsynergy-55878.appspot.com",
      messagingSenderId: "822930182678",
      appId: "1:822930182678:web:23e8f0b3e044ae06cb9b37",
      measurementId: "G-3BK4KLMGTJ"
    };

    const app = initializeApp(firebaseConfig);

    const auth = getAuth(app)

    // signOut(auth)


    auth.onAuthStateChanged(async (user) => {
      if(user) {
        username = user.displayName

        const accessToken = localStorage.getItem('accessToken')

        const photo = await fetch("https://graph.microsoft.com/v1.0/me/photo/$value", {headers: {Authorization: `Bearer ${accessToken}`}})
        const blob = await photo.blob()
        const reader = new FileReader()
        reader.readAsDataURL(blob)
        reader.onload = url => profilesrc = url.target.result
      }
      else {
        profilesrc = undefined
        username = ""
      }
    })


  })

  async function login() {
    const auth = getAuth()
    const handleNewUser = async (idToken: string) => {
      await fetch('http://localhost:8000/api/auth/check-user-roles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"idtoken": idToken})
      })

      await auth.currentUser?.getIdToken(true)
    }

    const provider = new OAuthProvider('microsoft.com');
    provider.setCustomParameters({
      prompt: 'select_account',
    });

    await auth.setPersistence(browserLocalPersistence);

    try {
      const result = await signInWithPopup(auth, provider)
      const accessToken = OAuthProvider.credentialFromResult(result)?.accessToken
      if (accessToken) localStorage.setItem('accessToken', accessToken);

      if (getAdditionalUserInfo(result)?.isNewUser) {
        const idToken = await result.user.getIdToken()
        await handleNewUser(idToken)
      }


    } catch (error) {
      alert("Something went wrong. Please try again. (Error: " + error.code + ")");
    }
  }
</script>

<svelte:options tag="mcs-userinfo" />

<div class="user-info">
    {#if username != ""}
        <p>{username}</p>
    {:else}
        <a>
            <button on:click={login}>
                Log in
            </button>
        </a>
    {/if}

    <div class="profile-picture">
        {#if profilesrc != undefined}
        <img src={profilesrc} style="border-radius: 50%; width: 3rem" alt="profile-picture"/>
        {:else}
        <a href={username === undefined"/login"}>
            <AccountIcon fill='#2bc0d3'/>
        </a>
        {/if}
    </div>
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

    button {
        background-color: transparent;
        color: white;
        border-radius: 12px;
        height: 2rem;
        width: 6rem;
        font-size: 1rem;

        border: 2px solid #206191;
        text-align: center;
        text-decoration: none;
        display: inline-block;

        cursor: pointer;
    }

    button:hover {
        background-color: #206191;
    }

    p {
        color: white;
        font-size: 1.5rem;
        font-family: Calibri;
    }
</style>