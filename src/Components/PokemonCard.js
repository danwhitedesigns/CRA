import React, { Component } from "react";

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
            <div className={`col-12 col-md-4 col-lg-3 mb-3 ${displayClass}`}>
                <div className="card">
                    <h4 className="card-header">{this.state.pokemonIndex}</h4>
                    <div className="card-body mx-auto">
                        <h6 className="card-title text-center">{this.state.name.toLowerCase().split(" ").map(char => char.charAt(0).toUpperCase() + char.substring(1)).join(' ')}</h6>
                        <img alt={imageAlt} src={this.state.imageUrl} className="img-fluid" />
                    </div>
                </div>
            </div>
        );
    }
}

export default PokemonCard