export function tocelsius(fahrenheit){
    return ((fahrenheit-32)*5/9)
}

export function tofahrenheit(celsius){
    return((celsius*5/9) + 32)
}

export function convert(temperature, convertTo){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output = convertTo(input);
    const rounded = Math.round(output*1000)/1000;
    return rounded.toString();
}