import React, { Component } from "react";
import PokemonApp from './Components/PokemonApp';
import ScrollToTop from './Components/ScrollToTop';

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
                <ScrollToTop />
            </div>
        );
    }
}

export default App;
