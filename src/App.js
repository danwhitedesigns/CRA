import React, { Component } from "react";
import PokemonCard from './Components/PokemonCard';
import SearchForm from './Components/SearchForm';
import Axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        const limit = 1118;
        this.state = {
            url: `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`,
            pokemon: null,
        }
    }

    async componentDidMount() {
        const response = await Axios.get(this.state.url);
        this.setState({ pokemon: response.data['results'] })
    }

    render() {
        return (
            <div className="App">
                <SearchForm />
                {
                    this.state.pokemon ? (
                        <div className="container">
                            <div className="row mt-3">
                                {this.state.pokemon.map(pokemon => (
                                    <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
                                ))}
                            </div>
                        </div>
                    ) : (<span>Loading...</span>)
                }
            </div>
        );
    }
}

export default App;
