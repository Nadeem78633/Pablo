import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function FormValidation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isMessageError, setIsMessageError] = useState(false);
  const [isNameError, setIsNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);

  const handleChange = (event) => {
    let name = event.target.value;
    setName(name);
    setIsNameError(name.length === 0);
  };

  const handleEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Email validation regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailError(!emailRegex.test(newEmail));
  };

  const handleMessage = (e) => {
    let inputValue = e.target.value;
    setMessage(inputValue);
    setIsMessageError(inputValue.length < 20 || inputValue.length > 1000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.length < 20 || message.length > 1000) {
      setIsMessageError(true);
      return; // Return early without creating the user
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Box
        sx={{ flexGrow: 1 }}
        style={{ marginTop: "10px", marginBottom: "40px" }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={12}
            style={{
              flex: 1,
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <Card>
              <CardContent>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  gutterBottom
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Add a User
                </Typography>
                <form onSubmit={handleSubmit}>
                  {/* Name */}
                  <TextField
                    helperText={
                      isNameError ? "You cannot leave the Name field empty" : ""
                    }
                    variant="outlined"
                    required
                    label="Name"
                    type="string"
                    value={name}
                    error={isNameError}
                    onChange={handleChange}
                    component="div"
                    autoFocus={true}
                    color="secondary"
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                  />
                  <br />
                  {/* Email */}
                  <TextField
                    helperText={isEmailError ? "Enter a valid Email" : ""}
                    variant="outlined"
                    error={isEmailError}
                    required
                    label="Email"
                    type="string"
                    value={email}
                    onChange={handleEmail}
                    component="div"
                    color="secondary"
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                  />
                  <br />
                  {/* Message */}
                  <TextField
                    helperText={
                      isMessageError
                        ? "Message should be between 20 and 1000 "
                        : ""
                    }
                    label="Message"
                    required
                    value={message}
                    onChange={handleMessage}
                    component="div"
                    error={isMessageError}
                    type="message"
                    color="secondary"
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                    id="standard-multiline-static"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                  />
                  <br />
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "0 auto",
                      backgroundColor: "#120e66",
                    }}
                  >
                    Create User
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default FormValidation;
