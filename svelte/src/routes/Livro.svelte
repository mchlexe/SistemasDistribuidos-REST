<script>
    import { onMount } from 'svelte';
    import { Router, Link } from 'svelte-navigator';
    import { titulo, capa, sinopse, autor, bookId, username } from './components/stores';

    let comentarios = [];

    const getComentarios = async () => {
        await fetch(`http://localhost:3030/comentarios/${$bookId}`)
        .then(r => r.json())
        .then(data => {
            comentarios = data.comentarios;
        });
    };
        
    const criarComentario = async () => {
        let reqBody = new Object();
        reqBody.bookId = $bookId;
        reqBody.username = $username;
        reqBody.texto = document.getElementById('text').value;

        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody)
        };

        await fetch(`http://localhost:3030/comentarios`, settings)
        .then(() => {
            document.getElementById('text').value = '';
            getComentarios();
        });
    }

    const delComentario = async (index) => {
        let id = comentarios[index].id;

        const settings = {
            method: 'DELETE'
        };
        
        await fetch(`http://localhost:3030/comentarios/${id}`, settings)
        .then(() => {
            getComentarios();
        });

    }

    const converterData = (data) => {
        return data.toString().substr(0, 10);        
    };
  

    onMount(async () => {
        getComentarios();
    });
</script>

<Router>
    <main>  
        <Link to="/"><button class="btn btn-dark mb-2 btn-sm voltar">Voltar</button></Link>
       
        <div class="bookInfo">
            <div class="card" id="info">
                <img id="capa" src="{$capa}" class="card-img-top" alt="Capa">
                <div class="card-body">
                <h5 class="card-title">{$titulo} ({$autor})</h5>
                <p class="card-text">{$sinopse}</p>
                </div>               
            </div>                 
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Novo comentário</h5>
                    <div class="input-group">
                        <textarea id="text" class="form-control" aria-label="Novo comentário" rows="7"></textarea>
                        <div class="input-group-prepend">
                          <span class="input-group-text"><button type="submit" class="btn btn-success mb-2" on:click={() => criarComentario()}>Enviar</button></span>
                        </div>
                    </div>
                </div>                
            </div> 
        </div>

        
        <ul class="list-group comentarios">
            {#each comentarios as comentario, index}
                    <li class="list-group-item" id="comentario{index}">
                        <div class="comment">
                            <p>{converterData(comentario.createdAt)} - <b>{comentario.username}:</b></p>
                            <p>{comentario.texto}</p>
                            <button id="apagar" class="btn btn-danger mb-2 btn-sm voltar" on:click={() => delComentario(index)}>Apagar</button>
                        </div>
                    </li>
            {/each}
        </ul>
    
    </main>
</Router>

<style>
    .bookInfo { 
        display:flex;
    }

    .card {
        flex: 1;
        flex-direction: row;
    }

    #info {
        margin-right: 1%;
    }

    #capa {
        width: 150px;
        height: 200px;
        margin: 1%;
    }

    .comentarios {
        margin-top: 1%;
    }

    .voltar {
        margin: 1%;
    }    

    .comment {
        position: relative;
    }

    #apagar {
        position: absolute;
        top: 0;
        right: 0;
    }
</style>