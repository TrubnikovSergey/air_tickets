import { makeAutoObservable } from "mobx";
import { getAllTickets, getStopsList } from "../services/tickets";
import { ticket, curency, stops } from "../types.ts";

class Tickets {
  ticketsList: ticket[] = getAllTickets();
  ticketsCurency: curency = curency.RUB;
  stopsList: stops[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setStopsList = (list: stops[]) => {
    this.stopsList = list;
  };

  initStopsList = () => {
    const createStopsList = (): stops[] => {
      return getStopsList().map((item) => {
        switch (item) {
          case 0:
            return { count: 0, title: "Без пересадок", only: true };

          case 1:
            return { count: 1, title: "1 пеерсадка", only: true };

          case 2:
            return { count: 2, title: "2 пересадки", only: true };

          case 3:
            return { count: 3, title: "3 пересадки", only: true };

          case 4:
            return { count: 4, title: "4 пересадки", only: true };

          case 5:
            return { count: 5, title: "5 пересадок", only: true };

          case 6:
            return { count: 6, title: "6 пересадок", only: true };

          case 7:
            return { count: 7, title: "7 пересадок", only: true };

          default:
            break;
        }
      });
    };
    this.stopsList = [{ count: -1, title: "Все", only: false }, ...createStopsList()];
  };

  addStopsToList = (item: stops) => {
    this.stopsList.push(item);
  };

  removeStopsFromList = (removeItem: stops) => {
    this.stopsList = this.stopsList.filter((item) => item.count != removeItem.count);
  };

  setTickets = (list: ticket[]) => {
    this.ticketsList = list;
  };

  setTicketsCurency = (value: curency) => {
    this.ticketsCurency = value;
  };

  changeCurency = (value: string) => {
    const init = getAllTickets();

    if (value === curency.USD) {
      this.setTicketsCurency(curency.USD);
      this.setTickets(init.map((item) => ({ ...item, price: Number(item.price / 2).toFixed(2) })));
    } else if (value === curency.EUR) {
      this.setTicketsCurency(curency.EUR);
      this.setTickets(init.map((item) => ({ ...item, price: Number(item.price / 3).toFixed(2) })));
    } else {
      this.setTickets(init);
      this.setTicketsCurency(curency.RUB);
    }
  };
}

export const ticketsStore = new Tickets();
