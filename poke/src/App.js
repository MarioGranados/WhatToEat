import './App.css';
import Pokemon from "./Components/Pokemon";

function App() {

    let request = () => {
        let url = 'https://pokeapi.co/api/v2/pokemon/';
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                pokemon.push(json);
                console.log(json);
                window.localStorage.setItem("pokemon", JSON.stringify(pokemon));
            });
    }

    let pokemon = [];

    if (JSON.parse(window.localStorage.getItem('pokemon')) !== null) {
        pokemon = JSON.parse(window.localStorage.getItem('pokemon'));
        console.log("from local")
        console.log(pokemon)
    } else {
        console.log("new Request")
        request();
        console.log(pokemon)
    }

    return (
        <>
            <Pokemon poke={pokemon}/>
        </>
    );
}

export default App;
