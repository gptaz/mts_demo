import { Box, Grid, Typography } from "@mui/material";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import FourKIcon from "@mui/icons-material/FourK";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
import React from "react";

function MyCard() {
  return (
    <Box sx={{ flexGrow: 1, height: "65vh", padding: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{
          height: "100%",
          flexDirection: "row", // Keep all items in a single row
          // alignItems: 'stretch', // Stretch items to fill the height
        }}
      >
        {/* First div - Takes 60% width on medium screens and smaller */}
        <Grid
          item
          xs={7} // Approximately 60% width on small screens
          md={6} // 50% width on larger screens when third div is hidden
          lg={4} // 33.33% width on large screens when all three divs are visible
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              marginTop: "1rem",
              fontSize: "1.5rem",
            }}
          >
            Testing, refining, and re-testing, we have developed a product suite
            that’s simple to switch on, cost-effective to run and proven in its
            effectiveness.
          </Typography>
        </Grid>

        {/* Second div - Takes 40% width on medium screens and smaller */}
        <Grid
          item
          xs={5} // Approximately 40% width on small screens
          md={6} // 50% width on larger screens when third div is hidden
          lg={4} // 33.33% width on large screens when all three divs are visible
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* inside 2nd div */}
          <Box sx={{ flexGrow: 1, height: "100vh", padding: 1 }}>
            <Grid
              container
              spacing={2} // Adds spacing between Grid items
              direction="column" // Ensures the direction is column
              alignItems="stretch" // Stretches items to fill the container height
              justifyContent="space-between" // Evenly distributes space between items
            >
              {/* First row of 2 div */}
              <Grid
                item
                xs={3} // Takes 4/12 of the width, or one-third
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "#c7fdc9",
                  },
                }}
              >
                <Box sx={{ flexGrow: 1, height: "20vh" }}>
                  <Grid
                    container
                    spacing={1} // Adds spacing between Grid items
                    direction="row" // Ensures the direction is row
                  >
                    {/* Icon div */}
                    <Grid
                      item
                      xs={1} // Takes 6/12 of the width, or half
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ThreeDRotationIcon />
                    </Grid>

                    {/* Cotent div */}
                    <Grid
                      item
                      xs={11} // Takes 6/12 of the width, or half
                      sx={{
                        display: "block",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "1.3rem", padding: "0.4rem" }}
                      >
                        Launch Your ShopFront
                      </Typography>
                      <Typography
                        sx={{ fontSize: "1.1rem", padding: "0.4rem" }}
                      >
                        Data-enabled websites
                      </Typography>
                      <Typography sx={{ padding: "0.4rem" }}>
                        Single bespoke sites or branded sites across dozens of
                        locations.
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              {/* Second row of the dov */}
              <Grid
                item
                xs={4} // Takes 4/12 of the width, or one-third
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "#c7fdc9",
                  },
                }}
              >
                <Box sx={{ flexGrow: 1, height: "20vh" }}>
                  <Grid
                    container
                    spacing={1} // Adds spacing between Grid items
                    direction="row" // Ensures the direction is row
                  >
                    {/* Icon div */}
                    <Grid
                      item
                      xs={1} // Takes 6/12 of the width, or half
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ThreeDRotationIcon />
                    </Grid>

                    {/* Cotent div */}
                    <Grid
                      item
                      xs={11} // Takes 6/12 of the width, or half
                      sx={{
                        display: "block",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "1.3rem", padding: "0.4rem" }}
                      >
                        Launch Your ShopFront
                      </Typography>
                      <Typography
                        sx={{ fontSize: "1.1rem", padding: "0.4rem" }}
                      >
                        Data-enabled websites
                      </Typography>
                      <Typography sx={{ padding: "0.4rem" }}>
                        Single bespoke sites or branded sites across dozens of
                        locations.
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              {/* Third row of the div */}
              <Grid
                item
                xs={4} // Takes 4/12 of the width, or one-third
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "#c7fdc9",
                  },
                }}
              >
                <Box sx={{ flexGrow: 1, height: "20vh" }}>
                  <Grid
                    container
                    spacing={1} // Adds spacing between Grid items
                    direction="row" // Ensures the direction is row
                  >
                    {/* Icon div */}
                    <Grid
                      item
                      xs={1} // Takes 6/12 of the width, or half
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ThreeDRotationIcon />
                    </Grid>

                    {/* Cotent div */}
                    <Grid
                      item
                      xs={11} // Takes 6/12 of the width, or half
                      sx={{
                        display: "block",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "1.3rem", padding: "0.4rem" }}
                      >
                        Launch Your ShopFront
                      </Typography>
                      <Typography
                        sx={{ fontSize: "1.1rem", padding: "0.4rem" }}
                      >
                        Data-enabled websites
                      </Typography>
                      <Typography sx={{ padding: "0.4rem" }}>
                        Single bespoke sites or branded sites across dozens of
                        locations.
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Third div - Hidden on medium screens and smaller */}
        <Grid
          item
          xs={12}
          md={0} // Not shown on medium screens
          lg={4} // 33.33% width on large screens when all three divs are visible
          sx={{
            display: { xs: "none", md: "none", lg: "block" }, // Hidden on medium and smaller screens, flex on large screens
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4">Features</Typography>
          <Typography sx={{fontSize:"1.2rem", padding: "0.4rem"}}>Industry Benchmark Data</Typography>
          <Typography sx={{fontSize:"1.2rem", padding: "0.4rem"}}>Optimisation</Typography>
          <Typography sx={{fontSize:"1.2rem", padding: "0.4rem"}}>Support When You Need It</Typography>
          <Typography sx={{fontSize:"1.2rem", padding: "0.4rem"}}>Tyre And Auto Only</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MyCard;
