import React, { Component } from "react";
import { Container, Row, Col, Input } from 'reactstrap';
import './Styles/SearchForm.css';

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
            <Container className="searchForm">
                <Row className="justify-content-center mt-3">
                    <Col md={4}>
                        <Input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.handleFilterTextChange} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SearchForm