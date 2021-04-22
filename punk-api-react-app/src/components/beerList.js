import React, { useEffect, useState } from 'react'

const Beers = () => {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers')
            .then((res) => res.json())
            .then((beers) => setBeers(beers))
    }, [])

    return (
        <div>
            <div className="beerList">
                {beers.map((beer) => {
                    return (
                        <div className="beerCard" key={beer.id}>
                            <h1 className="name">{beer.name}</h1>
                            <h2 className="abv">{beer.abv}</h2>
                            <h5 className="tagline">{beer.tagline}</h5>
                            <h6 className="description">{beer.description}</h6>
                            <img className="img" src={beer.image_url}></img>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Beers