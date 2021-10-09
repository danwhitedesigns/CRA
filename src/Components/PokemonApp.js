import React, { Component } from "react";
import PokemonCard from './PokemonCard'
import SearchForm from './SearchForm';
import Axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

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
            <Container>
                <Row className="mt-5 mb-3">
                    <Col className="text-center">
                        <h1>Pokemon Search</h1>
                    </Col>
                </Row>
                <SearchForm filterText={this.state.filterText} onFilterTextChange={this.handleFilterTextChange} />
                {
                    this.state.pokemon ? (
                            <Row className="mt-3 justify-content-center">
                                {this.state.pokemon.map(pokemon => (
                                    <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} filterText={this.state.filterText} />
                                ))}
                            </Row>
                    ) : (<Container className="text-center mt-3"><h4>Loading Pokemon...</h4></Container>)
                }
            </Container>
        )
    };
}
export default PokemonApp