import React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

const LoaderWebsite = () => {
  return (
    <div>
      <div className="flex h-screen w-screen justify-center items-center flex-col gap-3 font-bold text-xl text-white bg-bg-1 bg-cover -z-20">
        <div className="flex-row">
          Q IS CURRENTLY <span className="text-main-1">CRAFTING</span> STUFF...
        </div>

        <Stack sx={{ width: "50%", color: "#D41C62" }} spacing={1}>
          <LinearProgress color="inherit" />
        </Stack>
      </div>
    </div>
  );
};

export default LoaderWebsite;
