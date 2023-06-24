import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Outlet } from "react-router-dom";



// Second Toolbar
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

// Svg
import brand from "./img/brand.svg";


// Images
import appbar from "../images/appbarbg.png";
import vector from "./img/Vector.svg";
import vector1 from "./img/Vector (1).svg";
import gold from "./img/gold.svg";
import dream from "./img/Dreams.svg";

const pages = ["Home", "Bestseller", "Earrings"];
const additionalPages = ["Men", "Woman", "custom"];

const allPages = ["Home", "Bestseller", "Earrings", "Men", "Woman", "custom"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="relative"
     
        style={{
          backgroundColor: "white",
          color: "white",
          backgroundImage: `url(${appbar})`,
          backgroundSize: "100% 320px",
          height: "300px",
        }}
      >
        <Container maxWidth="xl">
          {/* First Toolbar */}
          <Stack direction="row" style={{ marginTop: "20px", height: "1" }}>
            <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }} style={{marginLeft:'8px'}}>
              <Typography>India | En</Typography>
              <Typography>Store</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Typography sx={{ display: { sm: "block" } }}>
                <img alt="gold" src={gold} style={{ marginRight: "10px" }} />
                Digital Gold
              </Typography>
              <Typography>
                <img
                  alt="login"
                  src={vector1}
                  style={{ marginRight: "10px" }}
                />
                Login | Register
                <img alt="heart" src={vector} style={{ marginLeft: "10px" }} />
              </Typography>
            </Stack>
          </Stack>

          {/* Second Toolbar */}
          <Stack direction="row" style={{ height: "100px",marginTop:'30px'}}>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {allPages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              <img src={brand} alt="brand" />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                 
                >
                  {page}
                </Button>
              ))}
              <Typography
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  marginTop: "18px",
                  marginLeft: "200px",
                }}
              >
                <img src={brand} alt="brand" />
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              {additionalPages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Stack>

          {/* Third Toolbar */}
          <Stack direction="column" style={{marginLeft:'8px'}}>
            <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
              <img src={dream} alt="dream" style={{ height: "30px" }} />
            </Stack>
            <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
              <Typography variant="body2" style={{fontStyle:'oblique',marginTop:'5px'}}>
                Looking for wear forever <br /> fashion Jewellery
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
             <Button variant="contained" style={{backgroundColor:'white',color:'black',marginTop:'5px'}}>Shop Now</Button>
            </Stack>
          
          </Stack>
        </Container>
      </AppBar>


      {/* Render the content */}
      <Container maxWidth="xl" sx={{ marginTop: "100px" }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Header;
