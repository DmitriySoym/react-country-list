import countries from "./country-data.json";
import { CountryList } from "./components/Countrylist/Countrylist";
import { transformedCountries } from "./mappers/transformCountriests";

export const App = () => {
  const countriesData = transformedCountries(countries);

  return (
    <div className="overflow-hidden">
      <h1 className="text-secondary text-center">Country List</h1>
      <CountryList country={countriesData} />
    </div>
  );
};
