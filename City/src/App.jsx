import React from 'react';
import axios from 'axios';

class App extends React.Component {
  handleGetCities = async () => {
    let result = axios.get("https://us1.locationiq.com/v1/search.php")
  }

  render() {
    return (
      <>
      City Explorer
      <button onClick={handleGetCities}>get Cities</button>
      </>
    )
}

export default App;