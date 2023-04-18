import * as React from "react";
import { Skeleton } from "baseui/skeleton";
import {useStyletron} from 'baseui';
import {Grid, Cell} from 'baseui/layout-grid';

const Shimmer = () => {
  return (
    <>

     <div className="card-container"> 
     {Array(5).fill(null).map((index) => {
        return <Skeleton height="200px" width="322px" animation key={index} />
      })}
      </div>
    
     
     
    </>
  );
};

export default Shimmer;
