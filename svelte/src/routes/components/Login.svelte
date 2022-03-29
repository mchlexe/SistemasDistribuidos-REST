<script>
    import { logged, username } from './stores';
    import { GoogleAuth } from '@beyonk/svelte-social-auth'

    const onSignIn = (e) => {
        username.set(e.detail.user.Du.VX);
        logged.set(true);
    };
    
</script>

<main>
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
