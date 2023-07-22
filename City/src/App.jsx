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
    cityLon: '' 
  }
}

  handleGetCities = async () => {
    let result = await axios.get(`https://us1.locationiq.com/v1/search?key=${mapKey}&q=fort%20lauderdale&format=json`)
    console.log(result)
    let data = result.data;
    console.log(data);
    this.setState({
      cityDisplayName: data[1].display_name,
      cityLat: data[1].lat,
      cityLon: data[1].lon 
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("explore", event.target.cityName.value);
  }

  render() {
    return (
      <>
      <h1> {this.state.cityDisplayName} </h1>
      <p> latitude: {this.state.cityLat} </p>
      <p> longitude: {this.state.cityLon} </p>
      <img src={`https://maps.locationiq.com/v3/staticmap?key=${mapKey}&center=${this.state.cityLat},${this.state.cityLon}&zoom=18`}/>
      <form onSubmit={this.handleSubmit}>    
      <label> city name: <input type="text" name="cityName"/></label>
      <button onClick={this.handleGetCities}>Explore!</button>
      </form>
      </>
    )
  }
}

export default App;