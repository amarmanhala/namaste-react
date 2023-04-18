import * as React from "react";
import { Skeleton } from "baseui/skeleton";

const Shimmer = () => {
  return (
    <>
      {Array(5).fill(null).map((index) => {
        return <Skeleton height="100px" width="200px" animation key={index} />;
      })}
    </>
  );
};

export default Shimmer;
