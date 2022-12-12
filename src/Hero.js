import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#9E7676'
      }
    },
    typography: {
      h2: {
        color: '#594545'
      },
      h5: {
        color: '#594545'
      }
    }
  }
);

export default function Hero() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Box
          sx={{
            backgroundColor: '#FFF8EA',
            color: '#594545',
            pt: 8,
            pb: 6,
            minHeight: '100vh'
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
            >
              Hero layout
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" sx={{color: '#594545'}}>Login</Button>
              <Button variant="outlined">Sign Up</Button>
            </Stack>
          </Container>
          {/* <div class="col-6 heroImage">
              <img src="images/headerImage.png" width="100%" alt=""/>
          </div> */}
        </Box>
    </ThemeProvider>
  );
};