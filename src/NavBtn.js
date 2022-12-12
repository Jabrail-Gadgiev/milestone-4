import * as React from 'react';
import { ListItemText } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddHomeIcon from '@mui/icons-material/AddHome';
import { ContentCut } from '@mui/icons-material';
import {Link as ReactLink} from 'react-router-dom';

const pages = ['Sign Up', 'Login'];
const pagesPaths = ['/signup', '/login'];

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        sx={{color: '#594545'}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Get Started
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {pages.map((page, i) => {
          return (<MenuItem 
          component={ReactLink}
          key={page}
          to={pagesPaths[i]}
          onClick={handleClose} 
          sx={{backgroundColor:'#FFF8EA'}}
          >
            <AddHomeIcon sx={{color: '#594545', mr:1}}>
                <ContentCut fontSize="small" />
            </AddHomeIcon>
            <ListItemText sx={{color: '#594545'}}>
                {page}
            </ListItemText>
          </MenuItem>)
        })}
        {/* <MenuItem onClick={handleClose} sx={{backgroundColor:'#FFF8EA'}}>
            <AddHomeIcon sx={{color: '#594545', mr:1}}>
                <ContentCut fontSize="small" />
            </AddHomeIcon>
            <ListItemText sx={{color: '#594545'}}>
                Sign Up
            </ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{backgroundColor:'#FFF8EA'}}>
            <AddHomeIcon sx={{color: '#594545', mr:1}}>
                <ContentCut fontSize="small" />
            </AddHomeIcon>
            <ListItemText sx={{color: '#594545'}}>
                Login
            </ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{backgroundColor:'#FFF8EA'}}>
            <AddHomeIcon sx={{color: '#594545', mr:1}}>
                <ContentCut fontSize="small" />
            </AddHomeIcon>
            <ListItemText sx={{color: '#594545'}}>
                Ready to Host?
            </ListItemText>
        </MenuItem> */}
      </Menu>
    </div>
  );
}