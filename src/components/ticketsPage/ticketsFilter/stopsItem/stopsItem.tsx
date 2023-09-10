import React, { useState } from "react";
import { stops } from "../../../../types";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import "./stopsItem.css";

interface StopsItemProp {
  item: stops;
}

const StopsItem: React.FC<StopsItemProp> = ({ item }) => {
  const [showOnly, setShowOnly] = useState<boolean>();

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (item.only) setShowOnly(true);
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (item.only) setShowOnly(false);
  };
  const handleClickOnly = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("handleClickOnly");
  };

  const handleChangeCheck = (e: CheckboxChangeEvent) => {
    const { checked } = e.target;

    console.log("chacked", item);
  };

  return (
    <div className="stops-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Checkbox onChange={handleChangeCheck}>{item.title}</Checkbox>
      {showOnly && (
        <div className="only" onClick={handleClickOnly}>
          ТОЛЬКО
        </div>
      )}
    </div>
  );
};

export default StopsItem;
