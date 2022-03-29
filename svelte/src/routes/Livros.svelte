<script>
    import { onMount } from 'svelte';
    import FormLivroSearch from './components/FormLivroSearch.svelte';
    import { Router, Link } from 'svelte-navigator'; 
    import { titulo, capa, sinopse, autor, bookId, books } from './components/stores'

    let livros = $books;

    const API_KEY = 'AIzaSyAJmSVNtNzWXz9iOOFRzw08-GGecvGpEBQ';


    const getLivros = async (event) => {
        await fetch(`http://localhost:3030/books/v1/volumes?q=${event.detail.input}:keyes&key=${API_KEY}`)
        .then(r => r.json())
        .then(data => {
            books.set(data.items);
            livros = data.items;
        });
    };

    const livroInfo = (idx) => {
        titulo.set(livros[idx].volumeInfo.title);
        autor.set(livros[idx].volumeInfo.authors[0])
        capa.set(livros[idx].volumeInfo.imageLinks.thumbnail);
        sinopse.set(livros[idx].volumeInfo.description);
        bookId.set(livros[idx].id);
    };

  
    onMount(async () => {
    });
</script>


<Router>
    <main>
        <hr>
            <FormLivroSearch on:search={getLivros} />

            
                <div class="list-group">         
                    {#each livros as livro, index}
                            <div class="list-group-item">
                                <Link to="livro">
                                    <img id="livro{index}" src="{livro.volumeInfo.imageLinks.thumbnail}" alt="{livro.volumeInfo.title}" on:click={() => livroInfo(index)}>
                                </Link>
                            </div>
                    {/each}
                </div>
        <hr />
    </main>
</Router>

<style>
    .list-group {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .list-group-item {
        padding: 10%;
        flex: 1 1 0px;
    }
</style>
