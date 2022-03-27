<script>
    import { onMount } from 'svelte';
    import FormLivroSearch from './components/FormLivroSearch.svelte';


    let livros = [];

    const API_KEY = 'AIzaSyAJmSVNtNzWXz9iOOFRzw08-GGecvGpEBQ';

    let reqHeaders = new Headers({
        //'Auth-Token': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });

    $: numLivros = livros.length;

    export const num = numLivros;


    const getLivros = async (event) => {
        await fetch(`https://www.googleapis.com/books/v1/volumes?q=${event.detail.input}:keyes&key=${API_KEY}`)
        .then(r => r.json())
        .then(data => {
            console.log(data.items);
            livros = data.items;
        });
        
        console.log(livros);
    };

  
    onMount(async () => {
        console.log();
    });

    // https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=yourAPIKey
</script>

<main>
    <hr>

    <FormLivroSearch on:search={getLivros} />

    <div class="list-group">
        {#each livros as livro, index}
            <div class="list-group-item">
                <img id="livro" src="{livro.volumeInfo.imageLinks.smallThumbnail}" alt="{livro.volumeInfo.title}">
            </div> 
        {/each}
     </div>

     <hr />
</main>

<style>
    .list-group {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap 
    }

    .list-group-item {
        padding: 10%;
    }
</style>
