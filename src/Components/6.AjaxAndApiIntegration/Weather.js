import React, { useState } from "react";
import {
  TextField,
  Grid,
  Card,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

const api = {
  key: "2b92d1a263b02d6495953b11305be2f9",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Weather = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = () => {
    setLoading(true);
    setError("");

    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.cod === 200) {
          setData(result);
          setError("");
          fetch(`${api.base}forecast?q=${search}&units=metric&APPID=${api.key}`)
            .then((res) => res.json())
            .then((result) => {
              if (result.cod === "200") {
                setForecast(result.list);
              } else {
                setForecast([]);
                setError("Failed to fetch weather predictions");
              }
              setLoading(false);
            })
            .catch((error) => {
              setError("Failed to fetch weather predictions");
              setLoading(false);
            });
        } else {
          setData({});
          setForecast([]);
          setError("City not found");
          setLoading(false);
        }
      })
      .catch((error) => {
        setError("Failed to fetch weather data");
        setLoading(false);
      });
  };

  const convertUnixToDate = (unixTime) => {
    const date = new Date(unixTime * 1000);
    return date.toLocaleString();
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2} md={2}></Grid>
        <Grid item xs={8} md={8}>
          <Card>
            <CardContent>
              <Typography
                variant="h4"
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                Weather app
              </Typography>
              <div>
                <TextField
                  variant="outlined"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                />
                <Button
                  variant="contained"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "10px auto", // Add margin for vertical centering
                    backgroundColor: "#120e66",
                  }}
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </div>
              {loading && (
                <p
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Loading...
                </p>
              )}
              {error && (
                <p
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {error}
                </p>
              )}
              {data.name && (
                <Card
                  style={{
                    width: "300px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "10px auto", // Add margin for vertical centering
                    backgroundColor: "#120e66",
                    color: "white",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">City: {data.name}</Typography>
                    <Typography variant="h6">
                      Temperature: {data.main.temp}°C
                    </Typography>
                  </CardContent>
                </Card>
              )}
              <Typography
                variant="h4"
                style={{
                  flex: 1,
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Weather Predictions
              </Typography>
              {forecast.length > 0 ? (
                forecast.map((prediction, index) => (
                  <Card
                    key={index}
                    style={{
                      width: "400px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "10px auto", // Add margin for vertical centering
                      backgroundColor: "#120e66",
                      color: "white",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6">
                        Date and Time: {convertUnixToDate(prediction.dt)}
                      </Typography>
                      <Typography variant="h6">
                        Temperature: {prediction.main.temp}°C
                      </Typography>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Typography
                  variant="subtitle1"
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    color: "red",
                  }}
                >
                  No weather predictions available
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} md={2}></Grid>
      </Grid>
    </div>
  );
};

export default Weather;
