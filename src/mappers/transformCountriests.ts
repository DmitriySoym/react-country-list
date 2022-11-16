import { ICountry, ICountryAPI } from "../types";

export const transformedCountries = ({
  name,
  capital,
  population,
  area,
  region,
  flags,
}: ICountryAPI): ICountry => {
  return {
    name: name.common,
    capital: capital[0],
    population: population,
    area: area,
    region: region,
    flag: flags.svg,
  };
};
