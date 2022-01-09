import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { 
    favoriteShipsAtom,
    displayOnlyFavoriteShipsAtom
} from "../atoms";
import { useAtom } from 'jotai';

export default function NavBar() {
  const [favoriteShips] = useAtom(favoriteShipsAtom);
  const [_,setDisplayOnlyFavoriteShipsAtom] = useAtom(displayOnlyFavoriteShipsAtom)

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' } }}
          >
            Harbey Spaceships
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'block', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={() => setDisplayOnlyFavoriteShipsAtom((e)=>true)}
            >
              <Badge badgeContent={favoriteShips.length} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    <br />
    <br />
    </>
  );
}
