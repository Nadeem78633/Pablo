import React from "react";
import { Card } from "@mui/material";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Cards = ({ data }) => {
  return (
    <div>
      <Card>
        <CardMedia sx={{ height: 140 }} image={data.pic} title={data.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.des}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
