import React from "react";
import { Countrylist } from "./components/Countrylist/Countrylist";
import countries from "./country-data.json";

export const App = () => {
  console.log(countries);
  return (
    <div className="App">
      <h1 className="text-secondary">Country List</h1>
      <Countrylist />
    </div>
  );
};
