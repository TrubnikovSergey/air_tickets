export type stops = { count: number; title: string; only: boolean };

export enum curency {
  RUB = "RUB",
  USD = "USD",
  EUR = "EUR",
}

export type ticket = {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
};
