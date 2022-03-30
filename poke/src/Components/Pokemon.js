const pokemon = (props) => {
    let pokemon = props.poke;
    console.log('props');
    console.log(pokemon[0].results);
    console.log('name');
    console.log(pokemon[0].results[0].name);

    let searchedPokemon = "ivysaur";

    let searchPokemon = (pokemon, searchedPokemon) => {
        for(let i = 0; i < pokemon[0].results.length; i++) {
            if (pokemon[0].results[i].name === searchedPokemon.toLowerCase()) {
                console.log('name is')
                console.log(pokemon[0].results[i].name)
            }
        }
    }
    searchPokemon(pokemon, searchedPokemon);

    return(
        <>
            <div className="container">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">pokemonName</h5>
                        <h6 className="card-subtitle mb-2 text-muted">height</h6>
                        <p className="card-text">pokemonDesc</p>
                        <a href="#" className="card-link">type1</a>
                        <a href="#" className="card-link">typ2</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default pokemon