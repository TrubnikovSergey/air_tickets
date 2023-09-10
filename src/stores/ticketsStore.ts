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
            return { chacked: false, stops: 0, title: "Без пересадок", only: true };

          case 1:
            return { chacked: false, stops: 1, title: "1 пеерсадка", only: true };

          case 2:
            return { chacked: false, stops: 2, title: "2 пересадки", only: true };

          case 3:
            return { chacked: false, stops: 3, title: "3 пересадки", only: true };

          case 4:
            return { chacked: false, stops: 4, title: "4 пересадки", only: true };

          case 5:
            return { chacked: false, stops: 5, title: "5 пересадок", only: true };

          case 6:
            return { chacked: false, stops: 6, title: "6 пересадок", only: true };

          case 7:
            return { chacked: false, stops: 7, title: "7 пересадок", only: true };

          default:
            break;
        }
      });
    };

    this.stopsList = [{ chacked: false, stops: -1, title: "Все", only: false }, ...createStopsList()];
  };

  addStopsToList = (item: stops) => {
    if (item.stops === -1) {
      this.stopsList.forEach((el) => (el.checked = true));
    } else {
      this.stopsList.forEach((el) => {
        if (el.stops === item.stops) {
          el.checked = true;
        }
      });
    }

    const stopsArray = this.stopsList.filter((el) => el.checked).map((el) => el.stops);

    this.setTickets(getAllTickets().filter((ticket) => stopsArray.includes(ticket.stops)));
  };

  removeStopsFromList = (item: stops) => {
    if (item.stops === -1) {
      this.stopsList.forEach((el) => (el.checked = false));
    } else {
      this.stopsList.forEach((el) => {
        if (el.stops === item.stops) {
          el.checked = false;
        }
      });
    }

    const stopsArray = this.stopsList.filter((el) => el.checked).map((el) => el.stops);

    this.setTickets(getAllTickets().filter((ticket) => stopsArray.includes(ticket.stops)));
  };

  clickOnly = (item: stops) => {
    this.stopsList.forEach((el) => {
      if (el.stops === item.stops) {
        el.checked = true;
      } else {
        el.checked = false;
      }
    });

    this.setTickets(getAllTickets().filter((ticket) => ticket.stops === item.stops));
  };

  setTickets = (list: ticket[]) => {
    this.ticketsList = list;
  };

  setTicketsCurency = (value: curency) => {
    this.ticketsCurency = value;
  };

  changeCurency = (value: string) => {
    // const init = getAllTickets();

    if (value === curency.USD) {
      this.setTicketsCurency(curency.USD);
      // this.setTickets(init.map((item) => ({ ...item, price: Number(item.price / 2).toFixed(2) })));
    } else if (value === curency.EUR) {
      this.setTicketsCurency(curency.EUR);
      // this.setTickets(init.map((item) => ({ ...item, price: Number(item.price / 3).toFixed(2) })));
    } else {
      // this.setTickets(init);
      this.setTicketsCurency(curency.RUB);
    }
  };
}

export const ticketsStore = new Tickets();
