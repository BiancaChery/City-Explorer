import React from 'react';
import axios from 'axios';
import

let mapKey = import.meta.env.VITE_MAP_API_KEY;


class App extends React.Component {
  handleGetCities = async () => {
    let result = await axios.get(`https://us1.locationiq.com/v1/search?key=${mapKey}&q=fort%20lauderdale&format=json`)
    console.log(result)
  }

  handleExplore = (event) => {
    event.preventDefault();
    console.log("explore", event.target.cityName.value);
  }

  render() {
    return (
      <>
      <h1>City Explorer</h1>
      <form onExplore={this.handleExplore}>    
      <label> city name: <input type="text" name="cityName"/></label>
      <button onClick={this.handleGetCities}>Explore!</button>
      </form>
      </>
    )
  }
}

export default App;