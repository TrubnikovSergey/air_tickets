import React from "react";
import { Card, Radio, RadioChangeEvent } from "antd";
import StopsList from "./stopsList/stopsList";
import { ticketsStore } from "../../../stores/ticketsStore";
import "./ticketsFilter.css";

const TicketsFilter: React.FC = () => {
  const handleChangeRadio = (e: RadioChangeEvent): void => {
    ticketsStore.changeCurency(e.target.value);
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
          <StopsList className="stops-list" list={ticketsStore.stopsList} />
        </div>
      </Card>
    </div>
  );
};

export default TicketsFilter;
