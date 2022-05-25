import React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import Navbar from "./Navbar";

const LoaderContact = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex h-screen w-screen justify-center items-center flex-col gap-3 font-bold text-xl text-white">
        <div className="flex-row">
          CURRENTLY <span className="text-main-1">FINDING</span> MY ADRESS...
        </div>

        <Stack sx={{ width: "50%", color: "#E8C64C" }} spacing={1}>
          <LinearProgress color="inherit" />
        </Stack>
      </div>
    </div>
  );
};

export default LoaderContact;
