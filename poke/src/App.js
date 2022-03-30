import './App.css';
import Hero from "./Components/Hero";

function App() {
    let url = 'https://pokeapi.co/api/v2/pokemon';
    let request = () => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                pokemon.push(json);
                window.localStorage.setItem("pokemon", JSON.stringify(pokemon));
            });
    }
    let pokemon = [];
    if(JSON.parse(window.localStorage.getItem('pokemon')) !== null) {
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
            <Hero/>
        </>
    );
}

export default App;
