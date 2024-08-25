import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";

function Hero() {
  const [translateY, setTranslateY] = useState("translateY(0)");
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const cardPosition = cardRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the card is within the viewport
        if (cardPosition.top < windowHeight && cardPosition.bottom > 0) {
          // Calculate how far the card is from the bottom of the viewport
          const distanceFromBottom = windowHeight - cardPosition.bottom;

          // Calculate the translation percentage based on the card's position
          // Ensure the card doesn't translate past -25% from its original position
          const translation = Math.min(
            (distanceFromBottom / windowHeight) * 50,
            25
          ); // 50% max translation but clamped to stop at -25%
          
          setTranslateY(`translateY(-${translation}%)`);
        } else {
          setTranslateY("translateY(0)");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial call to handleScroll to set the initial state
    handleScroll();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Grid
      container
      sx={{ height: "100vh", maxWidth: "90%", marginLeft: "-15%" }}
    >
      {/* First Div */}
      <Grid item xs={12} md={5}>
        <Box
          sx={{
            p: 2, // padding
            display: "block",

            textAlign: "left", // text alignment
            height: "100%", // make it fill the height of the Grid item
          }}
        >
          <Typography
            sx={{
              fontSize: "5rem",
              lineHeight: "1.1",
            }}
          >
            Customer connection, the heart of{" "}
            <span style={{ color: "#c7fdc9" }}>mts auto</span>.
          </Typography>
          <Typography
            sx={{ padding: "4rem 0", fontSize: "2rem", lineHeight: "1.1" }}
          >
            With decades of tyre, wheel and auto research we know why customers
            go to a site, what makes their journey rewarding and how to
            encourage them to return.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              fontSize: "1.2rem",
              padding: "1rem",
              backgroundColor: "#c7fdc9",
              borderColor: "black",
              color: "#000",
              zIndex: "1",
              position: "relative",
              overflow: "hidden", // Ensure the pseudo-element does not overflow the button
              "&:before": {
                content: '""',
                backgroundColor: "#fff",
                transition: "top 0.1s ease-in", // Transition effect for sliding background
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                top: "100%", // Start from below the button
                zIndex: "-1", // Place behind button content
              },
              "&:hover:before": {
                top: "0", // Slide the background up to cover the button
              },
              "&:hover": {
                color: "#000", // Text color on hover (already set to black)
                borderColor: "black",
              },
            }}
          >
            Request a demo
          </Button>
        </Box>
      </Grid>

      {/* Second Div */}
      <Grid item xs={12} md={7}>
        <Box
          component="img"
          src={`/home-hero.jpg`}
          sx={{
            p: 2,
            textAlign: "center",
            height: "100%",
            display: "block",
            margin: "0 0 0 auto",
            objectFit: "cover",
            WebkitMaskSize: "cover",
            maskSize: "cover",
            WebkitMaskImage: "url(/trademark-mask.png)", // Adjust the image URL as needed
            maskImage: "url(/trademark-mask.png)",
          }}
        ></Box>
      </Grid>
      <Card
        ref={cardRef}
        id="animated-card"
        sx={{
          width: "70vw", // 75% of the viewport width
          height: "300px",
          position: "relative",
          marginTop: "-25%",
          marginBottom: "72px",
          backgroundColor: "#c7fdc9",
          opacity: 0.8,
          zIndex: 100,
          // clipPath: "inset(0 0 round 0 25px)", // Create a custom polygon shape
          // clipPath: "polygon(98% 0%, 100% 20%, 100% 100%, 2% 100%, 0% 80%, 0 0)",
          clipPath:
            "polygon(0 0, calc(100% - 35px) 0, 100% 35px, 100% 100%, 35px 100%, 0 calc(100% - 35px))",
          transform: translateY,
          transition: "transform 0.5s ease", // Smooth transition effect
        }}
      >
        <CardContent>
          <Typography variant="h3">Featuring</Typography>
          <Box sx={{ flexGrow: 1, height: "65vh", padding: 2 }}>
            <Grid
              container
              spacing={2}
              sx={{
                paddingTop: "4rem",
                height: "100%",
                flexDirection: "row", // Keep all items in a single row
                // alignItems: 'stretch', // Stretch items to fill the height
              }}
            >
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "end",
                  height: "100%",
                }}
              >
                <img src="/data.svg" width={30} height={30} />
                <Typography
                  sx={{
                    fontSize: "1.3rem",
                    paddingLeft: "1rem",
                  }}
                >
                  Industry-benchmark data for power
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "end",
                  height: "100%",
                }}
              >
                <img src="/performance.svg" width={30} height={30} />
                <Typography
                  sx={{
                    fontSize: "1.3rem",
                    paddingLeft: "1rem",
                  }}
                >
                  connect plus platform for performance
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "end",
                  height: "100%",
                }}
              >
                <img src="/SMSconverstions.svg" width={30} height={30} />
                <Typography
                  sx={{
                    fontSize: "1.3rem",
                    paddingLeft: "1rem",
                  }}
                >
                  Frank advice to unlock online growth
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Hero;
