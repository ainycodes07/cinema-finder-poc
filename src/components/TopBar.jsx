import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SiteLogo from './SiteLogo';
import MapTypeMenu from './MapTypeMenu';

const TopBar = () => (
  <AppBar 
    position="static" 
    sx={{ 
      backgroundColor: '#141414', 
      borderBottom: '1px solid #2d2d2d',
      boxShadow: 'none'
    }}
  >
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <SiteLogo />
        <Typography
          variant="h6"
          noWrap
          component={RouterLink}
          to="/"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            color: '#ffffff',
            textDecoration: 'none',
            flexGrow: 1, /* Pushes MapTypeMenu (gear icon) to the far right */
            ml: 1,
            '&:hover': {
              color: '#e50914', /* Glows cinema red on hover */
            },
          }}
        >
          Cinema Finder
        </Typography>
        <MapTypeMenu />
      </Toolbar>
    </Container>
  </AppBar>
);

export default TopBar;