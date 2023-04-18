import * as React from "react";
import { Skeleton } from "baseui/skeleton";
import {useStyletron} from 'baseui';
import {Grid, Cell} from 'baseui/layout-grid';

const Shimmer = () => {
  return (
    <>

      <Grid gridColumns={4}
        gridGaps={[6, 6, 12]}
        gridGutters={[6, 6, 12]}
        gridMargins={[8, 16, 32]}
        gridMaxWidth={"100%"}>
      {Array(5).fill(null).map((index) => {
        return <Cell span={[3, 2, 3, 4]}><Skeleton height="200px" width="400px" animation key={index} /></Cell>
      })}
      </Grid>
    


     
    </>
  );
};

export default Shimmer;
