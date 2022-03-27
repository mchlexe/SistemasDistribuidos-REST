<script>
    import {createEventDispatcher} from 'svelte';    

    let input;
    
    const dispatch = createEventDispatcher();

    const pesquisarLivro = (e) => {
        if (input.trim() === '') {
            return;
        }

        dispatch('search', {
            input
        });
    };
</script> 

<main>
    <!-- <div class="form-contato form-group">
        <p>
            <input placeholder="Nome" type="text" name="nome" class="form-control"
                   bind:value={nome} />
        </p>
        <p>
            <input placeholder="Telefone" name="telefone" class="form-control"
                   bind:value={telefone} />
        </p>
        <button on:click={adicionarContato} type="submit" class="btn btn-success">
            Salvar
        </button>
    </div> -->
<!-- 
    <div class="input-group">
        <div class="form-outline">
          <input type="search" id="form1" class="form-control" bind:value={input}/>
          <label class="form-label" for="form1">Digite o nome do livro</label>
        </div>
        <button on:click={pesquisarLivro} type="button" class="btn btn-primary">
          <i class="fas fa-search"></i>
        </button>
      </div> -->


    <div class="input-group mb-3">
        <input bind:value={input} type="text" class="form-control" placeholder="Digite o nome do livro" aria-label="Digite o nome do livro" aria-describedby="button-addon2">
        <div class="input-group-append">
          <button on:click={pesquisarLivro} class="btn btn-outline-secondary" type="button" id="button-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg></button>
        </div>
    </div>
</main>


<style>
</style>
