"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Card, CardContent, Grid } from "@mui/material";
import { BorderLeft, BorderTop } from "@mui/icons-material";
import MyCard from "./MyCard";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const timeoutRef = React.useRef(null);

  const handleProductClick = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  const handleMouseEnter = () => {
    isOpen && setIsHovered(true); // Set hover state to true
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear the timeout if mouse re-enters
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
      setIsOpen(!isOpen);
    }, 300);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="relative"
      style={{ backgroundColor: "transparent", marginTop: "-3rem" }}
    >
      <Grid container sx={{ display: { xs: "none", md: "flex" } }}>
        {/* First div: 25% width */}
        <Grid item xs={3} sx={{ flexBasis: "25%" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: "-0.1rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "2.2rem",
            }}
          >
            mts auto
          </Typography>
        </Grid>

        {/* Second div: 50% width */}
        <Grid
          item
          xs={6}
          sx={{ flexBasis: "50%", justifyContent: "space-between" }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "start",
              justifyContent: "left",
              gap: "5rem",
            }}
          >
            <Button
              onClick={handleProductClick}
              sx={{
                marginBottom: "5rem",
                alignItems: "start",
                paddingRight: "1.5rem",
                paddingBottom: "1.4rem",
                color: "white",
                position: "relative",
                gap: "0.5rem",
                "&:after": {
                  content: '""',
                  display: "block",
                  opacity: "0",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  height: "5px",
                  backgroundColor: "#c7fdc9",
                  transition: "all 0.2s ease-in-out",
                },
                "&:hover:after": {
                  opacity: "1",
                },
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Typography variant="button">Products</Typography>
              <ArrowDownwardIcon
                sx={{
                  transition: "transform 0.2s ease-in-out", // Transition for transform property
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", // Rotate based on isOpen state
                }}
              />
            </Button>
            {isOpen && (
              <Card
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                sx={{
                  width: "60vw", // 75% of the viewport width
                  height: "570",
                  position: "absolute",
                  top: "28%", // Position below the button
                  left: "50%",
                  transform: "translateX(-70%)", // Center horizontally
                  marginTop: "1rem", // Space between button and card
                  zIndex: 100,
                  // clipPath: "inset(0 0 round 0 25px)", // Create a custom polygon shape
                  // clipPath: "polygon(98% 0%, 100% 20%, 100% 100%, 2% 100%, 0% 80%, 0 0)",
                  clipPath:
                    "polygon(0 0, calc(100% - 35px) 0, 100% 35px, 100% 100%, 35px 100%, 0 calc(100% - 35px))",
                }}
              >
                <CardContent>
                  <MyCard />
                </CardContent>
              </Card>
            )}
            <Button
              onClick={() => {}}
              sx={{
                marginBottom: "5rem",
                alignItems: "start",
                paddingRight: "1.5rem",
                paddingBottom: "1.4rem",
                color: "white",
                position: "relative",
                "&:after": {
                  content: '""',
                  display: "block",
                  opacity: "0",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  height: "5px",
                  backgroundColor: "#c7fdc9",
                  transition: "all 0.2s ease-in-out",
                },
                "&:hover:after": {
                  opacity: "1",
                },
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              Solution
            </Button>
            <Button
              onClick={() => {}}
              sx={{
                marginBottom: "5rem",
                alignItems: "start",
                paddingRight: "1.5rem",
                paddingBottom: "1.4rem",
                color: "white",
                position: "relative",
                "&:after": {
                  content: '""',
                  display: "block",
                  opacity: "0",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  height: "5px",
                  backgroundColor: "#c7fdc9",
                  transition: "all 0.2s ease-in-out",
                },
                "&:hover:after": {
                  opacity: "1",
                },
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              Our Story
            </Button>
            <Button
              onClick={() => {}}
              sx={{
                marginBottom: "5rem",
                alignItems: "start",
                paddingRight: "1.5rem",
                paddingBottom: "1.4rem",
                color: "white",
                position: "relative",
                "&:after": {
                  content: '""',
                  display: "block",
                  opacity: "0",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  height: "5px",
                  backgroundColor: "#c7fdc9",
                  transition: "all 0.2s ease-in-out",
                },
                "&:hover:after": {
                  opacity: "1",
                },
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              Blog
            </Button>
          </Box>
        </Grid>

        {/* Third div: 25% width */}
        <Grid item xs={3} sx={{ flexBasis: "25%" }}>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="outlined"
              sx={{
                padding: "10px 15px",
                color: "white",
                borderColor: "white",
                display: "flex",
                zIndex: "1",
                "&:before": {
                  content: '""',
                  background: "#c7fdc9",
                  transition: "top 0.09s ease-in",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  top: "100%",
                  zIndex: "-1",
                },
                position: "relative",
                "&:hover:before": {
                  top: "0",
                },
                "&:hover": {
                  color: "black",
                  borderColor: "white",
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Grid>
      </Grid>
      {/* display in small screen */}
      <Grid
        container
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "space-between", // Ensures items are spaced across the full width
          alignItems: "center", // Aligns items vertically center
        }}
      >
        <Grid item xs={6}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: "-0.1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            mts auto
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "right" }}>
          {" "}
          {/* Aligns content to the right */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            {" "}
            {/* Aligns IconButton to the right */}
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  );
}
export default ResponsiveAppBar;
