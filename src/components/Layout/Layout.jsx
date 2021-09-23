import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  SwipeableDrawer,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  ListSubheader,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";

import { useState } from "react";

function Layout(props) {
  const [state, setState] = useState({
    menu: false,
    navigationSelected: 1,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, menu: open });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, position: "sticky", top: 0, zIndex: 1 }}>
        <AppBar position="static" elevation={0}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ShortCaller
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            backgroundColor: theme.palette.primary.main,
            color: "#ffffff",
          }}
        >
          <Tabs
            value={state.navigationSelected}
            onChange={(event, newValue) => {
              setState({ ...state, navigationSelected: newValue });
            }}
            textColor="inherit"
            indicatorColor="secondary"
            variant="fullWidth"
          >
            <Tab icon={<QueryStatsIcon />} />
            <Tab icon={<HomeIcon />} />
            <Tab icon={<SettingsIcon />} />
          </Tabs>
        </Box>
      </Box>

      <SwipeableDrawer
        anchor="left"
        open={state.menu}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <nav aria-label="main mailbox folders">
          <List
            sx={{ width: "70vw", maxWidth: "25rem" }}
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Pages
              </ListSubheader>
            }
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <QueryStatsIcon />
                </ListItemIcon>
                <ListItemText primary="Statistic" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Call" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="License" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </SwipeableDrawer>
      {props.children}
    </ThemeProvider>
  );
}

export default Layout;
