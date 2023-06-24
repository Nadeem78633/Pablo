import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import data from "./data";

const Performance = () => {
  return (
    <>
      {data.map((d) => (
        <Card sx={{ minWidth: 275 }} style={{ boxShadow: "none" }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5" component="div">
              {d.topic}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {d.desc}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default Performance;
