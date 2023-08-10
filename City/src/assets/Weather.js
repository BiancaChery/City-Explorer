import React, {Component} from "react";
import axios from "axios";


class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: [],
            error: null,
            showResults: false,
        };
    }
    componentDidMount() {
        this.fetchWeatherData();
    }
}