import { ICountry } from "../../types";
import { CountryItem } from "../Countryitem/Countryitem";
interface IProps {
  country: ICountry[];
}

export const CountryList = ({ country }: IProps) => {
  return (
    <div className="list-group">
      <CountryItem country={country} />
    </div>
  );
};
