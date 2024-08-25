import React from "react";
import { Grid, Typography, Paper, Button } from "@mui/material";

function Product() {
  return (
    <Grid
      container
      spacing={2} // Optional: Add spacing between columns
      sx={{
        height: "100vh", // Set height to view height or adjust as needed
        maxWidth: "70vw",
        padding: "1rem", // Optional: Add padding
        marginTop: "25rem",
        marginLeft: "-16%",
      }}
    >
      <Grid item xs={12} md={4}>
        <Paper
          elevation={24}
          sx={{
            minHeight: "512px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            backgroundColor: "white",
            padding: "2rem",
            position: "relative",
            clipPath:
              "polygon(0 0, 100% 0, 100% 0, 100% 100%, 35px 100%, 0 calc(100% - 35px))",
            "&:before": {
              content: '""',
              background: "#c7fdc9", // Background color for the hover effect
              transition: "top 0.3s ease-in", // Smooth transition for the hover effect
              position: "absolute", // Absolute positioning for the pseudo-element
              bottom: "0",
              left: "0",
              right: "0",
              top: "100%", // Initially position the pseudo-element out of view
              zIndex: "-1", // Ensure the pseudo-element is behind the content
            },
            "&:hover:before": {
              top: "0", // Move the pseudo-element into view on hover
            },
            "&:hover": {
              // backgroundColor: "transparent",
              // Ensure the button hover effect is triggered when Paper is hovered
              "& .MuiButton-root": {
                color: "black", // Button hover color
                borderColor: "transparent", // Button hover border color
                backgroundColor: "white",
              },
            },
          }}
        >
          <Typography variant="h6" color="black">
            LAUNCH YOUR SHOPFRONT
          </Typography>
          <Typography
            variant="h4"
            sx={{
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            Data-enabled Websites
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              marginTop: "1rem",
            }}
          >
            Deepen customer engagement and simplify the sales process with a
            single bespoke site or a branded presence across dozens of
            locations.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#c7fdc9",
              color: "black",
              borderColor: "transparent",
              fontWeight: "bold",
              width: "100%",
              marginTop: "6rem",
              position: "relative",
              padding: "14px 32px",
              "&:hover": {
                borderColor: "transparent",
              },
            }}
          >
            Learn more
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
      <Paper
          elevation={24}
          sx={{
            minHeight: "512px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            backgroundColor: "white",
            padding: "2rem",
            position: "relative",
            clipPath:
              "polygon(0 0, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0)",
            "&:before": {
              content: '""',
              background: "#c7fdc9", // Background color for the hover effect
              transition: "top 0.3s ease-in", // Smooth transition for the hover effect
              position: "absolute", // Absolute positioning for the pseudo-element
              bottom: "0",
              left: "0",
              right: "0",
              top: "100%", // Initially position the pseudo-element out of view
              zIndex: "-1", // Ensure the pseudo-element is behind the content
            },
            "&:hover:before": {
              top: "0", // Move the pseudo-element into view on hover
            },
            "&:hover": {
              // backgroundColor: "transparent",
              // Ensure the button hover effect is triggered when Paper is hovered
              "& .MuiButton-root": {
                color: "black", // Button hover color
                borderColor: "transparent", // Button hover border color
                backgroundColor: "white",
              },
            },
          }}
        >
          <Typography variant="h6" color="black">
            LAUNCH YOUR SHOPFRONT
          </Typography>
          <Typography
            variant="h4"
            sx={{
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            Data-enabled Websites
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              marginTop: "1rem",
            }}
          >
            Deepen customer engagement and simplify the sales process with a
            single bespoke site or a branded presence across dozens of
            locations.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#c7fdc9",
              color: "black",
              borderColor: "transparent",
              fontWeight: "bold",
              width: "100%",
              marginTop: "6rem",
              position: "relative",
              padding: "14px 32px",
              "&:hover": {
                borderColor: "transparent",
              },
            }}
          >
            Learn more
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper
          elevation={24}
          sx={{
            minHeight: "512px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            backgroundColor: "white",
            padding: "2rem",
            position: "relative",
            clipPath:
              "polygon(0 0, calc(100% - 35px) 0, 100% 35px, 100% 100%, 0 100%)",
            "&:before": {
              content: '""',
              background: "#c7fdc9", // Background color for the hover effect
              transition: "top 0.3s ease-in", // Smooth transition for the hover effect
              position: "absolute", // Absolute positioning for the pseudo-element
              bottom: "0",
              left: "0",
              right: "0",
              top: "100%", // Initially position the pseudo-element out of view
              zIndex: "-1", // Ensure the pseudo-element is behind the content
            },
            "&:hover:before": {
              top: "0", // Move the pseudo-element into view on hover
            },
            "&:hover": {
              // backgroundColor: "transparent",
              // Ensure the button hover effect is triggered when Paper is hovered
              "& .MuiButton-root": {
                color: "black", // Button hover color
                borderColor: "transparent", // Button hover border color
                backgroundColor: "white",
              },
            },
          }}
        >
          <Typography variant="h6" color="black">
            LAUNCH YOUR SHOPFRONT
          </Typography>
          <Typography
            variant="h4"
            sx={{
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            Data-enabled Websites
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              marginTop: "1rem",
            }}
          >
            Deepen customer engagement and simplify the sales process with a
            single bespoke site or a branded presence across dozens of
            locations.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#c7fdc9",
              color: "black",
              borderColor: "transparent",
              fontWeight: "bold",
              width: "100%",
              marginTop: "6rem",
              position: "relative",
              padding: "14px 32px",
              "&:hover": {
                borderColor: "transparent",
              },
            }}
          >
            Learn more
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Product;
