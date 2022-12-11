import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CottageIcon from '@mui/icons-material/Cottage';
import NavBtn from './NavBtn';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CottageIcon fontSize='large' sx={{color: '#594545', mr:2}}/>
          <Typography variant="h6" component="div" color="#594545" sx={{ flexGrow: 1 }}>
            PLACEHOLDER
          </Typography>
          <NavBtn/>
        </Toolbar>
      </AppBar>
    </Box>
  );
};