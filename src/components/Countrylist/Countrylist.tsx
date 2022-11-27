import { ICountry } from "../../types";
import { CountryItem } from "../Countryitem/Countryitem";

interface IProps {
  country: ICountry[];
}

export const CountryList = ({ country }: IProps) => {
  return (
    <ul className=" list-group">
      {country.map((countryItem: ICountry) => (
        <CountryItem country={countryItem} key={countryItem.name} />
      ))}
    </ul>
  );
};
