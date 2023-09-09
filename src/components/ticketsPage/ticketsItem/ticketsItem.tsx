import React, { useState } from "react";
import { ticket } from "../../../types";
import { Card } from "antd";
import * as dayjs from "dayjs";
import ru from "dayjs/locale/ru";
import "./ticketsItem.css";

interface TicketsItemProp {
  item: ticket;
}

dayjs.locale(ru);

const TicketsItem: React.FC<TicketsItemProp> = ({ item }) => {
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

    // const day = dayjs(dt).format("D MMM YYYY");
    // const dayWeek = dayjs(dt).format("dd");

    return `${d} ${mStr} ${y}, ${dayWeekName}`;
  };

  return (
    <Card className="container-list" bodyStyle={{ padding: 0 }}>
      <div className="content-list">
        <div className="left-part">
          <div className="content-left-part">
            {/* <div>{item.carrier}</div> */}
            <div className="air-company">
              <img src={`/${item.carrier}.png`} alt={item.carrier} />
            </div>
            <div className="button-buy">
              {"Купить"}
              <br />
              {`за ${item.price} р.`}
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
        {/* <li>{item.carrier}</li> */}
      </div>
    </Card>
  );
};

/**
 *origin
origin_name
destination
destination_name
 */

export default TicketsItem;
