import { Box, Grid, GridItem } from "@chakra-ui/react";
import { ProductionUser } from "./ProductionUser";
import ProductForm from "./ProductForm";
import { Posts } from "./Productions";

export const GridProd = () => {
  return (
    <Grid
      templateRows="auto 1fr"
      templateColumns="repeat(5, 1fr)"
      gap={4}
      padding={4}
    >
      <GridItem rowSpan={2} colSpan={1}>
        <Box>
          <ProductionUser />
        </Box>
      </GridItem>

      <GridItem colSpan={2}>
        <Box>
          <ProductForm />
        </Box>
      </GridItem>

      <GridItem colSpan={4}>
        <Box>
          <Posts />
        </Box>
      </GridItem>
    </Grid>
  );
};
