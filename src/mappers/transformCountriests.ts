import { ICountry, ICountryAPI } from "../types";

export const transformedCountries = (countries: ICountryAPI[]): ICountry[] => {
  return countries.map(
    ({ name, capital, flags, region, area, population }) => ({
      name: name.common,
      capital: capital[0],
      population: population,
      area: area,
      region: region,
      flag: flags.svg,
    })
  );
};
