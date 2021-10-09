import React, { Component } from "react";
import { Col, Card, CardBody, CardTitle } from 'reactstrap';

class PokemonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            pokemonIndex: ''
        }
    }
    componentDidMount() {
        const { name, url } = this.props;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

        this.setState({ name, imageUrl, pokemonIndex });
    }

    render() {
        const filterText = this.props.filterText;
        const imageAlt = `pokemon ${this.state.name}`;
        var displayClass = "";
        if (this.state.name.includes(filterText.toLowerCase())) {
            displayClass = "d-block";

        } else {
            displayClass = "d-none";
        }
        return (
            <Col md={4} lg={3} className={`mb-3 ${displayClass}`}>
                <Card>
                    <h4 className="card-header">{this.state.pokemonIndex}</h4>
                    <CardBody className="mx-auto">
                        <CardTitle className="text-center"><h6>{this.state.name.toLowerCase().split(" ").map(char => char.charAt(0).toUpperCase() + char.substring(1)).join(' ')}</h6></CardTitle>
                        <img alt={imageAlt} src={this.state.imageUrl} className="img-fluid d-block mx-auto" />
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default PokemonCard