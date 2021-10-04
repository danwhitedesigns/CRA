import React from "react";
import { Text } from 'react-native';

function ApiCall(props) {
    let pokemonName = props.name

    return (
        <div className="col-6 col-md-3 text-center border bg-dark">
            <Text style={{ textTransform: 'capitalize', color: 'white' }}>{pokemonName}</Text>
            </div>
    )
}

export default ApiCall;