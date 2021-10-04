import React, { Component } from "react";
import ApiCall from './ApiCall';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            offset: 0,
            initialAmount: 24,
            currentPage: 1
        }

        this.nextPageClickEvent = this.nextPageClickEvent.bind(this);
    }

    nextPageClickEvent() {
        fetch('https://pokeapi.co/api/v2/pokemon/?offset=' + this.state.offset + '&limit=' + this.state.initialAmount)
            .then(res => res.json())
            .then((result) => {
                this.setState({ results: result.results });
                this.setState({ offset: this.state.offset + this.state.initialAmount });
                this.setState({ currentPage: this.state.currentPage+1 });
            });
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=' + this.state.initialAmount)
            .then(res => res.json())
            .then((result) => {
                this.setState({ results: result.results });
                this.setState({ offset: this.state.initialAmount });
            });
        
    }

    render() {
        const apiCallList = this.state.results.map((pokemon, i) => {
            return <ApiCall key={i} name={pokemon.name} />
        })
        return (
            <div className="App">
                <div className="container">
                    <h1 className="text-center mb-4">Pokemon Api Results</h1>
                    <div className="text-center mb-4">
                        <span>Current page: {this.state.currentPage}</span>
                    </div>
                    <div className="text-center mb-4">
                        <button onClick={this.nextPageClickEvent}>Next Page</button>
                    </div>
                    <div className="row">
                        {apiCallList}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
