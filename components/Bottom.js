import React, { useState }  from 'react';
import { Card } from 'react-native-paper';
import { Title, Text } from 'react-native';

const Bottom = (props) => {
    const { country, recovered, confirmed, deaths, updation } = props;
    console.log(props);
    return(
        <Card
            theme={{colors: {primary: "#7497e8"}}}
            style={{backgroundColor: "#7497e8", marginTop: 20, margin: 10, padding: 20}}
        >
          <Card.Content>
                <Text style={{padding: 10, fontSize: 30, color: "white"}}>{ country.toUpperCase() }</Text>
                <Text style={{padding: 5, color: "white", fontSize: 30}}>Confirmed:{ confirmed }</Text>
                <Text style={{padding: 5, color: "white", fontSize: 30}}>Recovered:{ recovered }</Text>
                <Text style={{padding: 5, color: "white", fontSize: 30}}>Deaths:{ deaths }</Text>
                <Text style={{padding: 5, color: "white", fontSize: 15}}>{ updation }</Text>
          </Card.Content>
        </Card>
    );
};

export default Bottom;