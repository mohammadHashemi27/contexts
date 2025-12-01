import { Badge, Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import "./App.css";

import { Posts } from "./production/Productions";
import ProductForm from "./production/ProductForm";
import { ProductionUser } from "./production/ProductionUser";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useProductionStore } from "./production/ProductionZus";

function App() {
  const { pro } = useProductionStore();
  return (
    <>
      <Grid
        templateColumns={{
          base: "1fr", // موبایل
          md: "repeat(2, 1fr)", // تبلت
          lg: "repeat(5, 1fr)", // دسکتاپ بزرگ
        }}
        gap={4}
        padding={4}
      >
        {/* Users */}
        <GridItem
          colSpan={{ base: 1, md: 1, lg: 1 }}
          rowSpan={{ base: 1, lg: 2 }}
        >
          <ProductionUser />
        </GridItem>

        {/* Product Form */}
        <GridItem colSpan={{ base: 1, md: 1, lg: 2 }}>
          <ProductForm />
        </GridItem>

        {/* Icon */}
        <GridItem colSpan={{ base: 1, md: 1, lg: 2 }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent={{ base: "center", md: "flex-end" }}
            fontSize="1.5rem" // سایز کلی کوچیک‌تر
            gap="8px"
          >
            <HStack alignItems="center" gap={2}>
              <Badge
                colorScheme="green" // رنگ سبز
                fontSize="0.85rem" // اندازه متن
                px={2} // padding افقی
                py={1} // padding عمودی
                borderRadius="md" // گردی گوشه‌ها
              >
                Selected: {pro.length}
              </Badge>
            </HStack>

            <MdOutlineProductionQuantityLimits size={28} />
          </Box>
        </GridItem>

        {/* Posts list */}
        <GridItem colSpan={{ base: 1, md: 2, lg: 4 }}>
          <Posts />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
