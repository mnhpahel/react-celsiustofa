import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';
import Boiling from './Boiling';
import {toCelsius, toFahrenheit, convert} from './Converter';

class Calculator extends Component {
    state ={temperature: '', scale: '',}

    handlechange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale
        })
    };

  render() {
    const {temperature, scale} = this.state;
    const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;
    return (
      <>
        <TemperatureInput scale='c' temperature= {celsius} onTemperatureChange={this.handlechange}/>
        <TemperatureInput scale='f' temperature= {fahrenheit} onTemperatureChange={this.handlechange}/>
        <Boiling/>
      </>
    )
  }
}

export default Calculator