import React, { Component } from "react";
import Boiling from "./Boiling";
import TemperatureInput from "./TemperatureInput";
import {convert, tocelsius, tofahrenheit} from "./Converter";

class Calculator extends Component {
  state = { temperature: '', scale: '',};

  handleChange = (e, scale) => {
    this.setState({ 
        temperature: e.target.value,
        scale,
    });
  };
  render() {
    const { temperature, scale} = this.state;
    const celsius = scale === 'f' ? convert(temperature, tocelsius) : temperature;
    const fahrenheit = scale === 'c' ? convert(temperature, tofahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput scale ='c' temperature={celsius} onTemperatureChange = {this.handleChange} />
        <TemperatureInput scale ='f' temperature={fahrenheit} onTemperatureChange = {this.handleChange} />
        <Boiling celsius={parseFloat(temperature)}/>
      </div>
    );
  }
}

export default Calculator;
