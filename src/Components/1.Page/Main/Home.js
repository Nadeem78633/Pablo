import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// Importing the react router
import {  Outlet } from "react-router-dom";



// Importing data
import data from "./data";

// Card Import
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Button from "@mui/material/Button";
import AllCard from "./AllCard";

// Images
import girl from "../img/Girl.png";
import doubleRectangle from "../img/doubleRectnagle.svg";
import rectangle from "../img/rectangle.svg";
import sign from "../img/sign.svg";
import necklase from "../img/necklase.png";
import chokers from "../img/chokers.png";
import pendant from "../img/pendant.png";

// Woman
import woman from '../img/woman.png'
import man from '../img/man.png'
import kids from '../img/kids.png'

// rings
import firstRing from '../img/firstRing.svg'
import secondRing from '../img/secondRing.svg'
import thirdRing from '../img/thirdRing.svg'
import fourthRing from '../img/4thRing.svg'
import fifthRing from '../img/fifthRing.svg'

import { Stack, Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          {data.map((d) => (
            <AllCard data={d} />
          ))}

          <Grid item xs={12} md={6} style={{ marginTop: "40px" }}>
            <Card style={{ boxShadow: "none" }}>
              <CardMedia
                component="img"
                height="400"
                image={girl}
                sx={{ objectFit: "contain" }}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={6} style={{ marginTop: "40px" }}>
            <Card style={{ boxShadow: "none" }}>
              <CardMedia
                component="img"
                height="150"
                image={doubleRectangle}
                sx={{ objectFit: "contain" }}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              />
              <CardContent
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "140px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: "bold", color: "#120e66" }}
                >
                  Dexter hoop Earrings <br />
                  Octagon, Pade,Large,White,Gold-
                  <br />
                  tone Plated
                  <br />₹ 1800
                </Typography>
              </CardContent>
              <div
                style={{
                  backgroundColor: "white",
                  color: "white",
                  backgroundImage: `url(${rectangle})`,
                  backgroundSize: "100% 100px",
                  height: "100px",
                }}
              >
                <Box textAlign="center">
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#120e66",
                      color: "white",

                      justifyContent: "center",
                    }}
                  >
                    Shop now
                  </Button>
                </Box>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography
              variant="h5"
              style={{
                color: "#120e66",
                flex: 1,
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
                marginTop: "40px",
              }}
            >
              New For You
            </Typography>
            <Typography
              variant="subtitle2"
              style={{
                color: "#120e66",
                flex: 1,
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Browse through your favorite categories.We've got them all
            </Typography>
            <Stack direction="col">
              <hr
                style={{
                  width: "250px",
                  height: "3px",
                  backgroundColor: "#120e66",
                  border: "none",
                  borderRadius: "5px",
                  marginTop: "20px",
                }}
              />
              <img src={sign} alt="sign" style={{ height: "40px" }} />
              <hr
                style={{
                  width: "250px",
                  height: "3px",
                  backgroundColor: "#120e66",
                  border: "none",
                  borderRadius: "5px",
                  marginTop: "20px",
                }}
              />
            </Stack>
          </Grid>
          {/* New For You */}
          <Grid item xs={12} md={4}>
            <Card style={{ boxShadow: "none" }}>
              <CardMedia
                component="img"
                height="200"
                image={necklase}
                sx={{ objectFit: "contain" }}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              />
              <CardContent
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "90px",
                }}
              >
                <Typography variant="subtitle1" style={{ color: "#120e66" }}>
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    Neckless
                  </Typography>
                  Be unpologetically you in bold you in bold colours <br />
                  <div style={{ fontWeight: "bold" }}>...Read more</div>
                </Typography>
              </CardContent>

              <Box textAlign="center">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#120e66",
                    color: "white",

                    justifyContent: "center",
                    marginRight: "45px",
                  }}
                >
                  Shop now
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card style={{ boxShadow: "none" }}>
              <CardMedia
                component="img"
                height="200"
                image={chokers}
                sx={{ objectFit: "contain" }}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              />
              <CardContent
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "90px",
                }}
              >
                <Typography variant="subtitle1" style={{ color: "#120e66" }}>
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    Chokers
                  </Typography>
                  Be unpologetically you in bold you in bold colours <br />
                  <div style={{ fontWeight: "bold" }}>...Read more</div>
                </Typography>
              </CardContent>

              <Box textAlign="center">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#120e66",
                    color: "white",

                    justifyContent: "center",
                    marginRight: "45px",
                  }}
                >
                  Shop now
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card style={{ boxShadow: "none" }}>
              <CardMedia
                component="img"
                height="200"
                image={pendant}
                sx={{ objectFit: "contain" }}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              />
              <CardContent
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "90px",
                }}
              >
                <Typography variant="subtitle1" style={{ color: "#120e66" }}>
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    Pendant
                  </Typography>
                  Be unpologetically you in bold you in bold colours <br />
                  <div style={{ fontWeight: "bold" }}>...Read more</div>
                </Typography>
              </CardContent>

              <Box textAlign="center">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#120e66",
                    color: "white",

                    justifyContent: "center",
                    marginRight: "45px",
                  }}
                >
                  Shop now
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography
              variant="subtitle1"
              style={{
                color: "#120e66",
                flex: 1,
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              Diamond day dream Petal Crescent
            </Typography>
            <Typography
              variant="subtitle2"
              style={{
                color: "#120e66",
                flex: 1,
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              Earrings exclusively set diamond cluster ring is <br />
              delicate dreamy and thoroughly modern
            </Typography>

            <Typography
              variant="h6"
              style={{
                color: "#120e66",
                flex: 1,
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              Online Exclusives
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                color: "#120e66",
                flex: 1,
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              Browse through your favorite categories. We'he got them All.{" "}
            </Typography>
          </Grid>

          {/* Online exlusives */}
          <Grid item sm={12} md={2}>
            <Card style={{ boxShadow: "none" }}>
              <CardMedia
                component="img"
                image={firstRing}
                sx={{ objectFit: "contain" }}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  marginTop:'22px'
                }}
              />
            </Card>
          </Grid>
          <Grid item sm={12} md={2.5}>
            <Card style={{ boxShadow: "none" }}>
              <CardMedia
                component="img"
                image={secondRing}
                sx={{ objectFit: "contain" }}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  marginTop:'14px'
                }}
              />
            </Card>
          </Grid>
          <Grid item sm={12} md={3}>
            <Card style={{ boxShadow: "none" }}>
              <CardMedia
                component="img"
                image={thirdRing}
                sx={{ objectFit: "contain" }}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              />
            </Card>
          </Grid>
          <Grid item sm={12} md={2.5}>
            <Card style={{ boxShadow: "none" }}>
              <CardMedia
                component="img"
                image={fourthRing}
                sx={{ objectFit: "contain" }}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  marginTop:'14px'
                }}
              />
            </Card>
          </Grid>
          <Grid item sm={12} md={2}>
            <Card style={{ boxShadow: "none" }}>
              <CardMedia
                component="img"
                image={fifthRing}
                sx={{ objectFit: "contain" }}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  marginTop:'22px'
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={12}>
          <Box textAlign="center">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#120e66",
                    color: "white",

                    justifyContent: "center",
                  marginTop:'40px'
                  }}
                >
                  Shop now
                </Button>
              </Box>
          </Grid>
          {/* Woman man kids */}
          {/* Second New For You */}
          <Grid item xs={12} md={12}>
            <Typography
              variant="h5"
              style={{
                color: "#120e66",
                flex: 1,
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
                marginTop: "40px",
              }}
            >
              New For You
            </Typography>
            <Typography
              variant="subtitle2"
              style={{
                color: "#120e66",
                flex: 1,
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Browse through your favorite categories.We've got them all
            </Typography>
            <Stack direction="col">
              <hr
                style={{
                  width: "250px",
                  height: "3px",
                  backgroundColor: "#120e66",
                  border: "none",
                  borderRadius: "5px",
                  marginTop: "20px",
                }}
              />
              <img src={sign} alt="sign" style={{ height: "40px" }} />
              <hr
                style={{
                  width: "250px",
                  height: "3px",
                  backgroundColor: "#120e66",
                  border: "none",
                  borderRadius: "5px",
                  marginTop: "20px",
                }}
              />
            </Stack>
          </Grid>
                {/* Second New For You */}
                <Grid item xs={12} md={4}>
            <Card style={{ boxShadow: "none" }}>
              <CardMedia
                component="img"
                height="200"
                image={woman}
                sx={{ objectFit: "contain" }}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              />
              <CardContent
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "90px",
                }}
              >
                <Typography variant="subtitle1" style={{ color: "#120e66" }}>
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    Woman
                  </Typography>
                  Be unpologetically you in bold you in bold colours <br />
                  <div style={{ fontWeight: "bold" }}>...Read more</div>
                </Typography>
              </CardContent>

              <Box textAlign="center">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#120e66",
                    color: "white",

                    justifyContent: "center",
                    marginRight: "45px",
                  }}
                >
                  Shop now
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card style={{ boxShadow: "none" }}>
              <CardMedia
                component="img"
                height="200"
                image={man}
                sx={{ objectFit: "contain" }}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              />
              <CardContent
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "90px",
                }}
              >
                <Typography variant="subtitle1" style={{ color: "#120e66" }}>
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    Man
                  </Typography>
                  Be unpologetically you in bold you in bold colours <br />
                  <div style={{ fontWeight: "bold" }}>...Read more</div>
                </Typography>
              </CardContent>

              <Box textAlign="center">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#120e66",
                    color: "white",

                    justifyContent: "center",
                    marginRight: "45px",
                  }}
                >
                  Shop now
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card style={{ boxShadow: "none" }}>
              <CardMedia
                component="img"
                height="200"
                image={kids}
                sx={{ objectFit: "contain" }}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              />
              <CardContent
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "90px",
                }}
              >
                <Typography variant="subtitle1" style={{ color: "#120e66" }}>
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    Kids
                  </Typography>
                  Be unpologetically you in bold you in bold colours <br />
                  <div style={{ fontWeight: "bold" }}>...Read more</div>
                </Typography>
              </CardContent>

              <Box textAlign="center">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#120e66",
                    color: "white",

                    justifyContent: "center",
                    marginRight: "45px",
                  }}
                >
                  Shop now
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Outlet />
    </>
  );
};
export default Home;
