import React, { useState } from "react";
import { curency, ticket } from "../../../types";
import { Card } from "antd";
import ru from "dayjs/locale/ru";
import { ticketsStore } from "../../../stores/ticketsStore";
import { observer } from "mobx-react-lite";
import "./ticketsItem.css";

interface TicketsItemProp {
  item: ticket;
}

const TicketsItemComponent: React.FC<TicketsItemProp> = ({ item }) => {
  const formatingDate = (date: string): string => {
    const nameDaysWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

    const arrayDate = date.split(".");
    const d = Number(arrayDate[0]);
    const m = Number(arrayDate[1]) - 1;
    const y = `20${arrayDate[2]}`;
    const dt = new Date(y, m, d);

    const mStr = dt.toLocaleString("default", { month: "long" }).slice(0, 3);
    const dayWeek = dt.getDay();
    const dayWeekName = nameDaysWeek[dayWeek];

    return `${d} ${mStr} ${y}, ${dayWeekName}`;
  };

  const getCurency = (): curency => {
    switch (ticketsStore.ticketsCurency) {
      case curency.RUB:
        return "\u20bd";
      case curency.EUR:
        return "\u20ac";
      case curency.USD:
        return "\x24";

      default:
        break;
    }
    return "";
  };

  return (
    <Card className="container-list" bodyStyle={{ padding: 0 }}>
      <div className="content-list">
        <div className="left-part">
          <div className="content-left-part">
            <div className="air-company">
              <img src={`/${item.carrier}.png`} alt={item.carrier} />
            </div>
            <div className="button-buy">
              {"Купить"}
              <br />
              {`за ${item.price} ${getCurency()}`}
            </div>
          </div>
        </div>
        <div className="right-part">
          <div className="content-right-part">
            <div className="top-part">
              <div className="departure_time">{item.departure_time}</div>
              <div className="right-part__stops">
                <div className="stops">{`${item.stops} пересадка`}</div>
                <div className="airplane">
                  <img src="/airplane.png" alt="" />
                </div>
              </div>
              <div className="arrival_time">{item.arrival_time}</div>
            </div>
            <div className="bottom-part">
              <div className="bottom-part-left">
                <div className="place">{`${item.origin}, ${item.origin_name}`}</div>
                <div>{`${formatingDate(item.departure_date)}`}</div>
              </div>
              <div className="bottom-part-right">
                <div className="place">{`${item.destination_name}, ${item.destination}`}</div>
                <div>{`${formatingDate(item.arrival_date)}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export const TicketsItem = observer(TicketsItemComponent);
