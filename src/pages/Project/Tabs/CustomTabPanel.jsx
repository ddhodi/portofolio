import * as React from "react";
import Box from "@mui/material/Box";
import TabAssets from "./TabAssets";

export default function BasicTabs() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ p: 3 }}>
        <div className="flex justify-start gap-4">
          <TabAssets />
        </div>
      </Box>
    </Box>
  );
}