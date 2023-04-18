import * as React from "react";
import { Skeleton } from "baseui/skeleton";

const Shimmer = () => {
  return (
    <>
      <Skeleton
        animation
        rows={1}
        width="20%"
        overrides={{
          Row: {
            style: {
              height: "50px",
              marginBottom: "24px",
              marginTop: "24px",
              marginLeft: "24px",
            },
          },
        }}
      />

      <div className="card-container">
        {Array(20)
          .fill(null)
          .map((index) => {
            return (
              <Skeleton height="200px" width="322px" animation key={index} />
            );
          })}
      </div>
    </>
  );
};

export default Shimmer;
