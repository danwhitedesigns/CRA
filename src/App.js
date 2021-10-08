import React, { Component } from "react";
import PokemonApp from './Components/PokemonApp';

class App extends Component {
    constructor(props) {
        super(props);
        const limit = 1118;
        this.state = {
            url: `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`,
            pokemon: null,
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="App">
                <PokemonApp />
            </div>
        );
    }
}

export default App;
