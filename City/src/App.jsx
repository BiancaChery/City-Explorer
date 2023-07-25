import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

let mapKey = import.meta.env.VITE_MAP_API_KEY;


class App extends React.Component {
constructor() {
  super();
  this.state = {
    cityDisplayName: '',
    cityLat: '',
    cityLon: '',
    cityName: '' 
  }
}

  handleGetCities = async (event) => {
    let result = await axios.get(`https://us1.locationiq.com/v1/search?key=${mapKey}&q=${this.state.cityName}&format=json`)
    console.log(result)
    let data = result.data;
    console.log(data);
    this.setState({
      cityDisplayName: data[0].display_name,
      cityLat: data[0].lat,
      cityLon: data[0].lon, 
      cityName: ''
    });
  }

  handleChange = (event) => {
    this.setState({
      cityName: event.target.value
    })
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleGetCities}>    
      <label> City name: <input type="text" name="cityName" value={this.state.cityName} onChange={this.handleChange}/></label>
      <button type="submit">Explore!</button>
      </form>
      <h1> {this.state.cityDisplayName} </h1>
      <p> latitude: {this.state.cityLat} </p>
      <p> longitude: {this.state.cityLon} </p>
      <img src={`https://maps.locationiq.com/v3/staticmap?key=${mapKey}&center=${this.state.cityLat},${this.state.cityLon}&zoom=18`}/>
      </>
    )
  }
}

export default App;