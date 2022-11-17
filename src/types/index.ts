export interface ICountry {
  name: string;
  capital: string;
  population: number;
  flag: string;
  area: number;
  region: string;
}

export interface ICountryAPI {
  flags: ICountryFlag;
  name: ICountryName;
  capital: string[];
  region: string;
  area: number;
  population: number;
}

export interface ICountryFlag {
  png: string;
  svg: string;
}

export interface ICountryName {
  common: string;
  official: string;
  nativeName?: ICountryNativeName;
}

export interface ICountryNativeName {
  spa?: ICountrySpa;
}

export interface ICountrySpa {
  official: string;
  common: string;
}

export enum Color {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Danger = "danger",
  Warning = "warning",
  Info = "info",
  Light = "lightn",
  Dark = "dark",
}

export type BadgeLabel = "area" | "population";
