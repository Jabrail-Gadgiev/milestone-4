import React from "react";
import { Box, Typography } from "@mui/material";
import AboutImage2 from "./AboutImage2.jpeg";

const About = () => {
  return (
    <Box>
      <Typography
        align="center"
        variant="h3"
        color="brown"
        xs={{ fontWeight: 900 }}
      >
        About Us
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${AboutImage2})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 650,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "40%" },
            padding: { xs: 3, sm: 2, md: 20 },
          }}
        >
          <Box sx={{ background: "white", opacity: "0.6" }}>
            <Typography variant={"h4"} color="brown" align="center" pt={8}>
              PLACEHOLDER
            </Typography>
            <Typography variant="h6" align="center">
              Jabrail, Kymbat and Ibrahim first started PLACEHOLDER in order to
              provide luxury staycations around the world. Based in United Arab
              Emirates, Dubai, they operate an online marketplace focused on
              short-term and long-term homestays and experences. PLACEHOLDER was
              one of the 15 leading sponsors of the 2022 FIFA World Cup in
              Qatar.
            </Typography>
            <Typography variant="h5" align="center" color="brown" pb={8}>
              Enjoy your homestay and get notified on time!
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default About;
