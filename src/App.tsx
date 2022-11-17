import countries from "./country-data.json";
import { CountryList } from "./components/Countrylist/Countrylist";
import { transformedCountries } from "./mappers/transformCountriests";

export const App = () => {
  return (
    <div className="App overflow-hidden">
      <h1 className="text-secondary text-center">Country List</h1>

      <CountryList country={transformedCountries(countries)} />
    </div>
  );
};
