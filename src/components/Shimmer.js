import * as React from "react";
import { Skeleton } from "baseui/skeleton";

export const Shimmer = () => {
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

export const ShimmerMenu = () => {
  return (
    <>
        <div className="container-restaurant-menu">

      <Skeleton
        animation
        rows={6}
        width="100%"
        overrides={{
          Row: {
            style: {
              height: "150px",
              marginBottom: "15px",
              marginTop: "15px",
            
            },
          },
        }}
      />
</div>
     
    </>
  );
};
