import mockdata from "../mockdata/tickets.json";
import { ticket } from "../types";

const sortTickets = () => {
  const sortByPrice = (a: ticket, b: ticket) => {
    if (a.price > b.price) return 1;
    if (a.price < b.price) return -1;
    return 0;
  };
  mockdata.tickets.sort(sortByPrice);
};

export const getAllTickets = (): ticket[] => {
  sortTickets();

  return mockdata.tickets;
};

export const getStopsList = (): string[] => {
  const stopsList = mockdata.tickets.map((item) => item.stops);
  const stopsSet = new Set(stopsList);
  return Array.from(stopsSet).sort();
};
