import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const AllCard = ({ data }) => {


  return (
    <Grid item xs={12} md={6} >
      <Card sx={{ display: "flex" }} style={{width:'450px',borderRadius:'20px'}}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" style={{color:'#120e66',marginLeft:'30px',marginTop:'30px'}}>
              {data.title}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151,height:130 }}
          style={{marginLeft:'70px'}}
          image={data.img}
      
          alt="Live from space album cover"
        />
      </Card>
    </Grid>
  );
};
export default AllCard;
