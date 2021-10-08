import React, { Component } from "react";

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        }

        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSearchChange(event) {
        this.setState({ value: event.target.value });
        console.log(this.state.value)
    }

    componentDidMount() {

    }

    render() {

        return (
            <div className="row justify-content-center mt-3">
                <div className="col-12 col-md-4">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.handleSearchChange} />
                </div>
            </div>
        );
    }
}

export default SearchForm