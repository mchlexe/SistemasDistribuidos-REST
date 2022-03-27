<script>
  import { Router, Link } from 'svelte-navigator';  
  import { logged, username, token } from './stores.js';


  const logout = () => {
    logged.set(false);
    username.set(0);
    token.set(0);
  };

</script>


<Router>
  <main>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to ="/"><span class="navbar-brand"><h3>Books API</h3></span></Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      {#if $logged}
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="livros"><span class="nav-link">Livros<span class="sr-only">(current)</span></span></Link>
          </li>
          {#if $username == 'adm'}
          <li class="nav-item">            
            <Link to="usuarios"><span class="nav-link">Usuários</span></Link>
          </li>
          {/if}
          <li class="nav-item">
            <a class="nav-link" href="/" on:click={() => logout()}>Logout</a>
          </li>
        </ul>
      </div>
      {/if}
    </nav>
  </main>
</Router>

<style>
</style>
