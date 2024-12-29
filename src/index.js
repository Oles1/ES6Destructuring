// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
// import cars from "./practice";
import animals from "./data";

console.log(animals);
// const animals = [
//   { name: "cat", sound: "meow" },
//   { name: "dog", sound: "woof" },
// ];
const [cat, dog] = animals;
console.log(cat);

const {
  name,
  sound,
  feedingRequirements: { food, water },
} = cat;
console.log(sound);
console.log("Food: ", food);

const cars = [
  {
    model: "Honda Civic",
    //The top colour refers to the first item in the array below:
    //i.e. hondaTopColour = "black"
    coloursByPopularity: ["black", "silver"],
    speedStats: {
      topSpeed: 140,
      zeroToSixty: 8.5,
    },
  },
  {
    model: "Tesla Model 3",
    coloursByPopularity: ["red", "white"],
    speedStats: {
      topSpeed: 150,
      zeroToSixty: 3.2,
    },
  },
];

const [honda, tesla] = cars;
console.log(honda.model, tesla.model);
const { speedStats: teslaSpeedStats, coloursByPopularity: teslaColors } = tesla;
const [teslaTopColour, ...rest] = teslaColors;
console.log(teslaTopColour);
console.log(teslaSpeedStats);
const { topSpeed: teslaTopSpeed } = teslaSpeedStats;
console.log(teslaTopSpeed);

const { speedStats: hondaSpeedStats, coloursByPopularity: hondaColors } = honda;
const [hondaTopColour, ...resto] = hondaColors;
console.log(hondaTopColour);
console.log(hondaSpeedStats);
const { topSpeed: hondaTopSpeed } = hondaSpeedStats;
console.log(hondaTopSpeed);
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
