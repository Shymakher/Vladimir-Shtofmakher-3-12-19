import {convertCelsToFahren, convertFahrenToCels} from "./convertTemperature";

export default (value, unit, settingsUnit) => {
  if (unit === settingsUnit) {
    return `${value} ${unit}`
  } else {
    switch (unit) {
      case 'C':
        return `${convertCelsToFahren(value)} ${settingsUnit}`;

      case 'F':
        return `${convertFahrenToCels(value)} ${settingsUnit}`;

      default:
        return 'invalid unit';
    }
  }
};