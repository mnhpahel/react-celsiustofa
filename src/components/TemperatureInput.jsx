import React from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
}

const TemperatureInput = (props) => {
    const { temperature, scale, onTemperatureChange} = props
  return (
    <div>
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input type="text" value={temperature} onChange={(e) => onTemperatureChange(e, scale)}/>
        </fieldset>
    </div>
  )
}

export default TemperatureInput