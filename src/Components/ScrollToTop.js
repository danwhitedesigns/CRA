import React, { Component } from "react";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from 'reactstrap';
import './Styles/ScrollToTop.css';

class ScrollToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false
        };
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function (e) {
            scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility() {
        if (window.pageYOffset > 300) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        const { is_visible } = this.state;
        return (
            <Container className="scrollToTopContainer">
                <Row>
                    <Col className="d-flex justify-content-end">
                        <div className="scrollToTop d-inline-block">
                            {is_visible && (
                                <div onClick={() => this.scrollToTop()}>
                                    <FontAwesomeIcon icon={faChevronCircleUp} size='2x' />
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ScrollToTop;