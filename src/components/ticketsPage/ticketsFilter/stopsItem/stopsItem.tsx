import React, { useState } from "react";
import { stops } from "../../../../types";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import "./stopsItem.css";
import { ticketsStore } from "../../../../stores/ticketsStore";
import { observer } from "mobx-react-lite";

interface StopsItemProp {
  item: stops;
}

const StopsItem: React.FC<StopsItemProp> = observer(({ item }) => {
  const [showOnly, setShowOnly] = useState<boolean>();

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (item.only) setShowOnly(true);
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (item.only) setShowOnly(false);
  };
  const handleClickOnly = (item: stops) => {
    ticketsStore.clickOnly(item);
  };

  const handleChangeCheck = (itemStops: stops, target: CheckboxChangeEventTarget) => {
    const { checked } = target;

    if (checked) {
      ticketsStore.addStopsToList(itemStops);
    } else {
      ticketsStore.removeStopsFromList(itemStops);
    }
  };

  return (
    <div className="stops-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Checkbox onChange={(e: CheckboxChangeEvent) => handleChangeCheck(item, e.target)} checked={item.checked}>
        {item.title}
      </Checkbox>
      {showOnly && (
        <div className="only" onClick={() => handleClickOnly(item)}>
          ТОЛЬКО
        </div>
      )}
    </div>
  );
});

export default StopsItem;
