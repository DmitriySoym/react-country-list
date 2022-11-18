import { ICountry } from "../../types";
import { CountryItem } from "../Countryitem/Countryitem";

interface IProps {
  country: ICountry[];
}

export const CountryList = ({ country }: IProps) => {
  return (
    <ul className="w-75 mx-auto list-group">
      {country.map((countryItem: ICountry) => (
        <CountryItem country={countryItem} key={countryItem.name} />
      ))}
    </ul>
  );
};
