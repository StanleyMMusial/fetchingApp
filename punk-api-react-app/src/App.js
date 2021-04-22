import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import beerList from './componenets/beerList'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beerList: [],
    };
  }

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers")
      .then((res) => {
      const beerList = res.data;
      this.setState({ beerList });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Beer List</h1>
          <ol class="beer-list">
            {this.state.beerList.map((beer, index) => {
              return (
                <Beers
                  key={index}
                  name={beer.name}
                  image_url={beer.image_url}
                  first_brewed={beer.first_brewed}
                  tagline={beer.tagline}
                  abv={beer.abv}
                  description={beer.description}
                />
              );
            })}
          </ol>
        </header>
      </div>
    );
  }
}

export default App;