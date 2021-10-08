import React, { Component } from "react";

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    componentDidMount() {

    }

    render() {

        return (
            <div className="row justify-content-center mt-3">
                <div className="col-12 col-md-4">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.handleFilterTextChange} />
                </div>
            </div>
        );
    }
}

export default SearchForm