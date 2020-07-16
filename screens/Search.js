import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import Header from './Header';
import Bottom from '../components/Bottom';

const Search = () => {
  const [country, setCountry] = useState('');
  const [confirmed, setConfirmed] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [updation, setUpdation] = useState('');

  const fetchJsonData = () => {
    fetch("https://covid19.mathdro.id/api/countries/" + country)
    .then( data => data.json() )
    .then(record => {
      setConfirmed(record.confirmed.value);
      setDeaths(record.deaths.value);
      setRecovered(record.recovered.value);
      setUpdation(record.lastUpdate);
      // console.log(confirmed + ' ' + deaths + '  ' + recovered);
      console.log('Logging right here');
    }).catch( error => {
      console.log("Error caught under fetch catch--->" + error)
    });
  };

  const setNull = () => {
    setConfirmed(0);
    setRecovered(0);
    setDeaths(0);
  };
    return (
    <View style={{}}>

        <Header />

        <Searchbar
          placeholder="Search by country name"
          style={{margin: 20, padding: 5}}
          onChangeText={val => setCountry(val)}
          value={ country }
        />

        <Button
          icon="magnify"
          mode="contained"
          style={{marginLeft: 150, marginRight: 150, marginTop: 50, padding: 5, color: "white"}} 
          color="#7497e8"
          onPress={ () => fetchJsonData() }
        >Search</Button>



      { (country != '') ? <Bottom country={country} recovered={recovered} confirmed={confirmed} deaths={deaths} updation={updation}/> : null }         
    </View>
  );
};

export default Search;