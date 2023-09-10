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

  const handleMouseEnter = (item: stops) => {
    if (item.only) setShowOnly(true);
  };
  const handleMouseLeave = (item: stops) => {
    if (item.only) setShowOnly(false);
  };
  const handleClickOnly = (item: stops) => {
    ticketsStore.clickOnly(item);
  };

  const handleChangeCheck = (itemStops: stops, e: CheckboxChangeEvent) => {
    const { checked } = e.target;

    if (checked) {
      ticketsStore.addStopsToList(itemStops);
    } else {
      ticketsStore.removeStopsFromList(itemStops);
    }
  };

  return (
    <div className="stops-item" onMouseEnter={() => handleMouseEnter(item)} onMouseLeave={() => handleMouseLeave(item)}>
      <Checkbox onChange={(e: CheckboxChangeEvent) => handleChangeCheck(item, e)} checked={item.checked}>
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
