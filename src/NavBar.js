import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CottageIcon from '@mui/icons-material/Cottage';
import {Link as ReactLink} from 'react-router-dom';
import NavBtn from './NavBtn';

function logoHover(e) {
  e.target.style.color = "#594545"
}

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CottageIcon
          fontSize='large' 
          sx={{color: '#594545', mr:2}}/>
          <Typography component={ReactLink} onMouseOver={logoHover} to={'/'} variant="h6" color="#594545" sx={{ flexGrow: 1, textDecoration: 'none', fontWeight: '600'}}>
            PLACEHOLDER
          </Typography>
          <NavBtn/>
        </Toolbar>
      </AppBar>
    </Box>
  );
};