import React from "react";
import JabrailImage from "./JabrailImage.jpg";
import IbrahimImage from "./IbrahimImage.jpg";
import KimImage from "./KimImage.JPG";
import { Box, Stack, styled, Typography } from "@mui/material";

const StyledBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
});
const StyledTypography = styled(Typography)({
  margin: "25% 25px 25% 25px",
  background: "white",
  opacity: "0.7",
  justifyContent: "flex-end",
});
const Contact = () => {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        mt={2}
      >
        <StyledBox sx={{ backgroundImage: `url(${JabrailImage})` }}>
          <StyledTypography color="brown" align="center" variant="h7">
            Jabrail Gadgiev - CEO Jabrail@placeholder.com contact:+971 04226789
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${IbrahimImage})` }}>
          <StyledTypography color="brown" align="center" variant="h7">
            Ibrahim Roba - Managing Director Ibrahim@placeholder.com
            contact:+971 042277905
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${KimImage})` }}>
          <StyledTypography color="brown" align="center" variant="h7">
            Kymbat Asanbaeva - Chief Financial Director Kymbat@placeholder.com
            contact:+971 04225648
          </StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
};

export default Contact;
