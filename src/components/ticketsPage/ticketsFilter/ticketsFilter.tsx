import React from "react";
import { Card, Radio, RadioChangeEvent } from "antd";
import "./ticketsFilter.css";
import StopsList from "./stopsList/stopsList";
import { stops } from "../../../types";

const TicketsFilter: React.FC = () => {
  const stopList: stops[] = [
    { title: "Все", only: false },
    { title: "Без пересадок", only: true },
  ];

  const handleChangeRadio = (e: RadioChangeEvent): void => {
    console.log("handleChangeRadio");
  };

  return (
    <div className="wrapper-filter">
      <Card className="container-filter" bodyStyle={{ padding: 0, border: "solid 0px" }}>
        <div className="container-curency">
          <div className="curency-title">ВАЛЮТА</div>
          <Radio.Group defaultValue="RUB" className="group-button" size="large" buttonStyle="solid" onChange={handleChangeRadio}>
            <Radio.Button value="RUB" className="curency-button">
              RUB
            </Radio.Button>
            <Radio.Button value="USD" className="curency-button">
              USD
            </Radio.Button>
            <Radio.Button value="EUR" className="curency-button">
              EUR
            </Radio.Button>
          </Radio.Group>
        </div>
        <div className="container-stops-list">
          <div className="stops-title">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
          <StopsList className="stops-list" list={[...stopList, { title: "1 Пересадка", only: true }, { title: "2 Пересадки", only: true }, { title: "3 Пересадки", only: true }]} />
        </div>
      </Card>
    </div>
  );
};

export default TicketsFilter;
