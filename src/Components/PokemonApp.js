import React, { Component } from "react";
import PokemonCard from './PokemonCard'
import SearchForm from './SearchForm';
import Axios from 'axios';

class PokemonApp extends Component {
    constructor(props) {
        super(props);
        const limit = 1118;
        this.state = {
            url: `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`,
            pokemon: null,
            filterText: ''
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    async componentDidMount() {
        const response = await Axios.get(this.state.url);
        this.setState({ pokemon: response.data['results'] })
    }

    render() {
        return (
            <React.Fragment>
                <SearchForm filterText={this.state.filterText} onFilterTextChange={this.handleFilterTextChange} />
                {
                    this.state.pokemon ? (
                        <div className="container">
                            <div className="row mt-3">
                                {this.state.pokemon.map(pokemon => (
                                    <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} filterText={this.state.filterText} />
                                ))}
                            </div>
                        </div>
                    ) : (<div className="container text-center mt-3"><h4>Loading... Be patient, there are a lot of Pokemon to load...</h4></div>)
                }
            </React.Fragment>
        )
    };
}
export default PokemonApp