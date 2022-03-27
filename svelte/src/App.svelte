<script>
    
    import { onMount } from 'svelte';
    import { writable, derived } from 'svelte/store'
    import { Router, Route } from 'svelte-navigator';

    import Livros from './routes/Livros.svelte';
    import Navbar from './routes/components/Navbar.svelte';
    import Login from './routes/components/Login.svelte';
    import { logged, token, username } from './routes/components/stores';


    const usersApiData = writable([]);
    let users; 

    onMount(async () => {
        
    });
</script>

<main>
    <Navbar />

    <Router>    
        <Route path="/">
            {#if $logged}
                <h1 class="text-center greet">Olá, {$username}!</h1>
                
                <Livros />
            {:else}
               <Login />
            {/if}
        </Route>
            
        <Route path="livros">
            <Livros />
        </Route>  
    </Router>
    
    
<p class="text-center font-weight-light msg">Sistemas Distribuídos - APIBooks - 2021.2 - Grupo AmandaMichel</p>
</main>

<style>
    .greet, .msg {
        margin-top: 10%;
    }

</style>
