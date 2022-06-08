import React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

const LoaderWebsite = () => {
  return (
    <div>
      <div className="flex h-screen w-screen justify-center items-center flex-col gap-3 font-bold md:text-xl sm:text-sm text-white bg-bg-1 bg-cover -z-20">
        <div className="flex-row">
          QUENTIN IS CURRENTLY{" "}
          <span className="text-main-1 md:text-xl sm:text-sm">CRAFTING</span>{" "}
          STUFF...
        </div>

        <Stack sx={{ width: "50%", color: "#ee6c4d" }} spacing={1}>
          <LinearProgress color="inherit" />
        </Stack>
      </div>
    </div>
  );
};

export default LoaderWebsite;
