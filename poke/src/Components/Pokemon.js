const pokemon = () => {
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
export default pokemon()