import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

// Card

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";



const Footer = () => {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{ backgroundColor: "#0a0661", marginTop: "40px" }}
    >
      <Grid
        container
        spacing={2}
        style={{ backgroundColor: "#0a0661" }}
      >
        <Grid item xs={12} md={3}>
          <Card
            sx={{ minHeight: 150 }}
            style={{
              textAlign: "start",
              backgroundColor: "#0a0661",
              color: "white",
              boxShadow:'none',
              
            }}
          >
            <CardContent style={{ marginLeft: "50px" }}>
              <Typography variant="h6" component="div">
                Useful Links
              </Typography>
              
              
              <Typography variant="subtitle1" component="div">
                Delivery Information
              </Typography>
              <Typography variant="subtitle1" component="div">
                International Shipping
              </Typography>
              <Typography variant="subtitle1" component="div">
                Payment Options
              </Typography>
              <Typography variant="subtitle1" component="div">
               Track Your Order
              </Typography>
              <Typography variant="subtitle1" component="div">
              Returns
              </Typography>
              <Typography variant="subtitle1" component="div">
                Find a Store
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card
            sx={{ minHeight: 150 }}
            style={{
              textAlign: "start",
              backgroundColor: "#0a0661",
              color: "white",
              boxShadow:'none'
            }}
          >
            <CardContent style={{ marginLeft: "50px" }}>
              <Typography variant="h6" component="div">
                Information
              </Typography>
              <Typography variant="subtitle1" component="div">
                Careers
              </Typography>
              <Typography variant="subtitle1" component="div">
                BLog
              </Typography>
              <Typography variant="subtitle1" component="div">
               Offer and Contest Details
              </Typography>
              <Typography variant="subtitle1" component="div">
                Help & FAQs
              </Typography>
              <Typography variant="subtitle1" component="div">
                About Sr
              </Typography>
            
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card
            sx={{ minHeight: 150 }}
            style={{
              textAlign: "start",
              backgroundColor: "#0a0661",
              color: "white",
              boxShadow:'none'
            }}
          >
            <CardContent style={{ marginLeft: "50px" }}>
              <Typography variant="h6" component="div">
                Company
              </Typography>

              <Typography variant="subtitle1" component="div">
                Partnership
              </Typography>
              <Typography variant="subtitle1" component="div">
                Terms of Use
              </Typography>
              <Typography variant="subtitle1" component="div">
              Privacy
              </Typography>
              
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card
            sx={{ minHeight: 150 }}
            style={{
              textAlign: "start",
              backgroundColor: "#0a0661",
              color: "white",
              boxShadow:'none'
            }}
          >
            <CardContent style={{ marginLeft: "50px" }}>
              <Typography variant="h6" component="div">
                Get in Touch
              </Typography>
              <Typography variant="subtitle1" component="div">
                You'll find your next Marketing value you prefer.
              </Typography>

              <TwitterIcon style={{ marginLeft: "10px",marginTop:'60px' }} />
              <InstagramIcon style={{ marginLeft: "10px" }} />
              <EmailIcon style={{ marginLeft: "10px" }} />

              
            
            </CardContent>
          </Card>
        </Grid>
       
      </Grid>
    </Box>
  );
};
export default Footer;
