import React from 'react';
import axios from 'axios';

let mapKey = import.meta.env.VITE_MAP_API_KEY;
console.log(mapKey)

class App extends React.Component {
  handleGetCities = async () => {
    let result = axios.get(`https://us1.locationiq.com/v1/search?key=${mapKey}&q=fort%20lauderdale&format=json`)
    console.log(result)
  }

  render() {
    return (
      <>
      City Explorer
      <button onClick={handleGetCities}>Explore!</button>
      </>
    )}
}

export default App;