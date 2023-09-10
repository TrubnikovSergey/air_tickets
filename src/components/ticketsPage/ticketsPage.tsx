import React from "react";
import TicketsFilter from "./ticketsFilter/ticketsFilter";
import { TicketsList } from "./ticketsList/ticketsList";
import "./ticketsPage.css";

const TicketsPage: React.FC = () => {
  return (
    <div className="wrapper-page">
      <div className="container-page">
        <TicketsFilter />
        <TicketsList />
      </div>
    </div>
  );
};

export default TicketsPage;
