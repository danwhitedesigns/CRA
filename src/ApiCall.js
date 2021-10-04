import React, { Component } from "react";
import { Text } from 'react-native';

//function ApiCall(props) {
//    let pokemonName = props.name;
//    let pokemonUrl = props.url;
//    let pokemonImg = "";
//    fetch(pokemonUrl)
//        .then(resx => resx.json())
//        .then((resultx) => {
//            pokemonImg = resultx.sprites.front_default;
//        });

//    return (
//        <div className="col-6 col-md-3 text-center border bg-dark">
            
//            <div className="row">
//                <div className="col-12">
//                    <Text style={{ textTransform: 'capitalize', color: 'white' }}>{pokemonName}</Text>
//                </div>
//            </div>
//            <div className="row">
//                <div className="col-12">
//                    <img src="{pokemonImg}" alt="Image of {pokemonName}" />
//                </div>
//            </div>
//        </div>
//    )
//}

//export default ApiCall;




//import React, { Component } from "react";

class ApiCall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonName: props.name,
            pokemonUrl: props.url,
            pokemonImg: "",
            pokemonImgAlt: ""
        }
    }


    componentDidMount() {
        fetch(this.state.pokemonUrl)
            .then(resx => resx.json())
            .then((resultx) => {
                this.setState({ pokemonImg: resultx.sprites.front_default });
                this.setState({ pokemonImgAlt: "image of " + this.state.pokemonName });
            });
    }

    render() {
        return (
            <div className="col-6 col-md-3 text-center border bg-dark">

                <div className="row">
                    <div className="col-12">
                        <Text style={{ textTransform: 'capitalize', color: 'white' }}>{this.state.pokemonName}</Text>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <img src={this.state.pokemonImg} alt={this.state.pokemonImgAlt} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ApiCall;
