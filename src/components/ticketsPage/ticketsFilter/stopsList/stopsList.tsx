import React from "react";
import { stops } from "../../../../types";
import StopsItem from "../stopsItem/stopsItem";

interface StopsListProp {
  list: stops[];
  className?: string;
}

const StopsList: React.FC<StopsListProp> = ({ list, className }) => {
  console.log("list", list);

  return (
    <div className={className}>
      {list.map((item, idx) => (
        <StopsItem item={item} key={idx} />
      ))}
    </div>
  );
};

export default StopsList;
