import React, { useState } from "react";
import { getAllTickets } from "../../../services/tickets";
import { ticket } from "../../../types";
import { Card } from "antd";
import TicketsItem from "../ticketsItem/ticketsItem";
import "./ticketsList.css";

const TicketsList: React.FC = () => {
  const [list, setList] = useState<ticket[]>(getAllTickets());

  return (
    <div className="wrapper-list">
      {list.map((item, idx) => (
        <TicketsItem key={idx} item={item} />
      ))}
    </div>
  );
};

export default TicketsList;
