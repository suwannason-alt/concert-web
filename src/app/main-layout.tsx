'use client';
import React, { useEffect, useState } from 'react';
import {
  Drawer,
  Divider,
  CssBaseline,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton
} from '@mui/material';
import { Home, History, SwapHoriz, Logout } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const drawerWidth = 240;
import { MuiTheme } from '../lib/mui/theme';
import { ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import store, { AppDispatch, RootState } from '../lib/redux/store'
import { Provider, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setRole } from '../lib/redux/reducer/user.reducer';



export default function MainLayout({ children }: { children: React.ReactNode }) {
  const dispatch: AppDispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const theme = useTheme();


  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [showMenu, setShowMenu] = useState<string[]>([]);
  const router = useRouter()
  const role = useSelector((state: RootState) => state.user.role);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const switchRole = () => {
    let changeto;
    if (role === 'Admin') {
      changeto = 'User'
    } else {
      changeto = 'Admin'
    }
    dispatch(setRole(changeto))
    // setCurrentRole(role)
  }

  useEffect(() => {
    if (role === 'Admin') {
      setShowMenu([
        'Home',
        'History',
      ])
    } else {
      setShowMenu([])
    }
  }, [role])

  const drawer = (
    <div style={{ height: '100%' }}>
      <Toolbar>
        <div className='center-container text-2xl'>
          {role}
        </div>

      </Toolbar>
      <Divider />
      <List>
        {showMenu.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => router.push(text.replace(' ', '').toLowerCase())}>
              <ListItemIcon style={{ minWidth: 30, marginRight: 4 }}>
                {text === 'Home' ? <Home /> : null}
                {text === 'History' ? <History /> : null}
              </ListItemIcon>
              <ListItemText primary={<span className='text-lg'>{text}</span>} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton onClick={switchRole}>
            <ListItemIcon style={{ minWidth: 30, marginRight: 4 }}>
              <SwapHoriz />
            </ListItemIcon>
            <ListItemText primary={<span className='text-lg'>{`Switch to ${(role === 'Admin') ? 'User' : 'Admin'}`}</span>} />
          </ListItemButton>
        </ListItem>
      </List>
      <div className="absolute bottom-15 left-0 w-full">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon style={{ minWidth: 30, marginRight: 4 }}>
              <Logout />
            </ListItemIcon>
            <ListItemText primary={<span className="text-base">Logout</span>} />
          </ListItemButton>
        </ListItem>
      </div>
    </div>
  );


  return (
    <Provider store={store}>

      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {isMobile && (
          <Box sx={{ position: 'fixed', top: 0, left: 0, zIndex: 1300, padding: 2 }}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ padding: 1 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        )}
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            slotProps={{
              root: {
                keepMounted: true,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            slotProps={{
              paper: {
                elevation: 1
              }
            }}
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar style={{ minHeight: 15 }} />
          <ThemeProvider theme={MuiTheme}>
            <div>
              {children}
            </div>
          </ThemeProvider>
        </Box>
      </Box>
    </Provider>
  );
}