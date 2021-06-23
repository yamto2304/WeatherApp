import axios from "axios"
import React from "react"
import {
    View,
    Text,
} from 'react-native'
import TimeConvert from "./TimestampConvert";

export default class CurrentWeather extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            weather: {},
            count: 0,
            curTime: null,
        }
        this.updateTime = this.updateTime.bind(this);
        // this.updateCounter = this.updateCounter.bind(this);

    }

    componentDidMount() {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=HaNoi&appid=abc93db8f88f6d8cea49ba918c674d56')
            .then(res => {
                console.log('ok')
                this.setState({
                    weather: res.data
                    // weather: this.state.weather + 1
                })
            })
            .catch(error => {
                console.error(error);
            })
        this.counterInterval = setInterval(this.updateTime, 1000*1200);
        this.setState({ curTime: new Date().toLocaleString() });
        // this.counterInterval = setInterval(this.updateCounter, 1000);
    }

    updateTime() {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=HaNoi&appid=abc93db8f88f6d8cea49ba918c674d56')
            .then(res => {
                console.log(res)
                this.setState({
                    weather: res.data
                    // weather: this.state.weather + 1
                })
            })
            .catch(error => {
                console.error(error);
            })
    }

    updateCounter() {
        this.state.def++;
        this.setState({
            count: this.state.def
        });
    }

    render() {
        setInterval(function () { this.setState({ curTime: new Date().toLocaleString() }); }.bind(this), 1000);
        // var { weather } = this.state;
        // var time = TimeConvert(this.state.weather.dt)
        return (
            <View>
                {/* <Text>{time.convdataTime}</Text> */}
                <Text>{this.state.weather.dt}</Text>
                <Text>Date: {this.state.curTime}</Text>
                {/* <Text>{this.state.count}</Text> */}
            </View>
        )
    }
}
