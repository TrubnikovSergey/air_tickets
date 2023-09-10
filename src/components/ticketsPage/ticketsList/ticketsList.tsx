import React from "react";
import { TicketsItem } from "../ticketsItem/ticketsItem";
import { observer } from "mobx-react-lite";
import { ticketsStore } from "../../../stores/ticketsStore";
import "./ticketsList.css";

export const TicketsList: React.FC = observer(() => {
  return (
    <div className="wrapper-list">
      {ticketsStore.ticketsList.map((item, idx) => (
        <TicketsItem key={idx} item={item} />
      ))}
    </div>
  );
});
