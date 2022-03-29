<script>
  import { Router, Link } from 'svelte-navigator';  
  import { logged, username } from './stores.js';
</script>


<Router>
  <main>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to ="/"><span class="navbar-brand"><h3>Books API</h3></span></Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  </main>
</Router>

<style>
</style>
