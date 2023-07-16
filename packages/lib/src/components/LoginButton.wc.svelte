<svelte:options tag="mcs-loginbutton" />

<script lang="ts">
    import {getApp} from 'firebase/app'
    import {OAuthProvider, getAuth, signInWithPopup, browserLocalPersistence, getAdditionalUserInfo, } from "firebase/auth"
    
    export let debug: string|boolean;

    const saveAccessTokenInLocalStorage = (accessToken: string | undefined) => {
        if (!accessToken) {
        return;
        }
        localStorage.setItem('accessToken', accessToken);
    }

    const handleNewUser = async (idToken: string) => {
        const response = await fetch('https://api.mcsynergy.nl/auth/check-new-user', {
        method: 'POST',
        headers: {
            'authorization': idToken
        }
        })
        if (!response.ok) {
        alert("Something went wrong. Please try again. (Error: " + await response.text() + ")");
        }

        console.log("Response OK from auth server")
    }


    const signIn = () => {

        const provider = new OAuthProvider('microsoft.com');
        provider.setCustomParameters({
        prompt: 'select_account',
        });
        const app = getApp();
        const auth = getAuth(app);

        auth.setPersistence(browserLocalPersistence);

        signInWithPopup(auth, provider)
        .then((result) => {
            saveAccessTokenInLocalStorage(OAuthProvider.credentialFromResult(result)?.accessToken);
            if (getAdditionalUserInfo(result)?.isNewUser) {
            return result.user.getIdToken()
            }
        }).then(async (idToken) => {
            if (idToken) {
            await handleNewUser(idToken)
            }
        })
        .catch((error) => {
            alert("Something went wrong. Please try again. (Error: " + error.code + ")");
        });
    }
</script>

{#if debug === "true"}
    <button on:click={signIn}> Log in </button>
{:else}
    <a href="/login">
        <button> Log in </button>
    </a>
{/if}

<style>
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
</style>