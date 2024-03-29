import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ColorPicker() {
  const [color, setColor] = useState({ red: 0, green: 0, blue: 0 });

  const handleChange = (event) => {
    setColor({
      ...color,
      [event.target.name]: parseInt(event.target.value),
    });
  };

  const backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;

  return (
    <div>
    <h2>Color Picker</h2>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: backgroundColor,
        }}
      ></div>
      <label htmlFor="red">Red:</label>
      <input
        type="range"
        min="0"
        max="255"
        name="red"
        value={color.red}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="green">Green:</label>
      <input
        type="range"
        min="0"
        max="255"
        name="green"
        value={color.green}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="blue">Blue:</label>
      <input
        type="range"
        min="0"
        max="255"
        name="blue"
        value={color.blue}
        onChange={handleChange}
      />
    </div>
  )
}

export default ColorPicker;
