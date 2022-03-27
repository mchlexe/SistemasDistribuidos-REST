<script>
    import { onMount } from 'svelte';
    import {createEventDispatcher} from 'svelte';
    import { logged, token, username } from './stores';
    import { GoogleAuth } from '@beyonk/svelte-social-auth'
    // import { dotenv } from 'dotenv';

    let email;
    let password;

    const dispatch = createEventDispatcher();

    
    // onMount(async () => {
    //     function onSignIn() {
    //         logged.set(true);
    //         console.log('hey!');
    //     };
    // });  

    const onSignIn = (e) => {
        username.set(e.detail.user.Du.VX);
        logged.set(true);
        console.log(e.detail);
    };
    
</script>

<main>
    <!-- <script>    
    window.addEventListener("load", function(){
            onSignIn();
    });
    </script>

     <div id="login" class="g-signin2" data-onsuccess="login" data-theme="dark"></div> -->
    <div id="login">
        <GoogleAuth clientId="716744845606-7i7hdjdnr8cf23fgfi01buboqeb1qiv2" on:auth-success={e => onSignIn(e)}/>
    </div>
</main>


<style> 
    #login {
        display: flex;
        justify-content: center;
        padding-top: 10%;
    }
</style>
