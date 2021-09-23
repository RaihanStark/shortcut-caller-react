import {
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Dialog,
  AppBar,
  IconButton,
  Divider,
  Button,
  Typography,
  Toolbar,
  ListItemIcon,
  Switch,
  ListSubheader,
  Fab,
  Box,
  Grid,
} from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import Layout from "./components/Layout/Layout";
import CloseIcon from "@mui/icons-material/Close";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AddIcon from "@mui/icons-material/Add";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import { useState } from "react";
function App() {
  const [numberDetailedOpen, setnumberDetailedOpen] = useState(false);
  return (
    <Layout>
      <CssBaseline />

      <Dialog fullScreen open={numberDetailedOpen}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="close"
              onClick={() => {
                setnumberDetailedOpen(false);
              }}
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              +62 851-5643-7221
            </Typography>
          </Toolbar>
        </AppBar>
        <List subheader={<ListSubheader>Call to Action</ListSubheader>}>
          <ListItem button>
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
            <ListItemText primary="Call via Phone" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <WhatsAppIcon />
            </ListItemIcon>
            <ListItemText primary="Text via Whatsapp" />
          </ListItem>
        </List>
        <List subheader={<ListSubheader>Settings</ListSubheader>}>
          <ListItem button>
            <ListItemIcon>
              <PhoneIphoneIcon />
            </ListItemIcon>
            <ListItemText primary="Active Number" />
            <Switch />
          </ListItem>
          <Divider />
        </List>
      </Dialog>

      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          paddingTop: 0,
        }}
        aria-label="contacts"
      >
        <ListItem
          disablePadding
          divider
          onClick={() => {
            setnumberDetailedOpen(true);
          }}
        >
          <ListItemButton>
            <ListItemText
              primary="+62 851-5643-7221"
              secondary={
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <CallReceivedIcon color="success" fontSize="small" />
                  <span>Active Number</span>
                </Grid>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding divider>
          <ListItemButton>
            <ListItemText
              primary="+62 851-5643-7221"
              secondary={
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <CloseIcon color="error" fontSize="small" />
                  <span>Inactive Number</span>
                </Grid>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding divider>
          <ListItemButton>
            <ListItemText
              primary="+62 851-5643-7221"
              secondary={
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <CallMadeIcon color="warning" fontSize="small" />
                  <span>Need to Call</span>
                </Grid>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding divider>
          <ListItemButton>
            <ListItemText
              primary="+62 851-5643-7221"
              secondary={
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <CallMadeIcon color="warning" fontSize="small" />
                  <span>Need to Call</span>
                </Grid>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding divider>
          <ListItemButton>
            <ListItemText
              primary="+62 851-5643-7221"
              secondary={
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <CallMadeIcon color="warning" fontSize="small" />
                  <span>Need to Call</span>
                </Grid>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding divider>
          <ListItemButton>
            <ListItemText
              primary="+62 851-5643-7221"
              secondary={
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <CallMadeIcon color="warning" fontSize="small" />
                  <span>Need to Call</span>
                </Grid>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding divider>
          <ListItemButton>
            <ListItemText
              primary="+62 851-5643-7221"
              secondary={
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <CallMadeIcon color="warning" fontSize="small" />
                  <span>Need to Call</span>
                </Grid>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding divider>
          <ListItemButton>
            <ListItemText
              primary="+62 851-5643-7221"
              secondary={
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <CallMadeIcon color="warning" fontSize="small" />
                  <span>Need to Call</span>
                </Grid>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding divider>
          <ListItemButton>
            <ListItemText
              primary="+62 851-5643-7221"
              secondary={
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <CallMadeIcon color="warning" fontSize="small" />
                  <span>Need to Call</span>
                </Grid>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding divider>
          <ListItemButton>
            <ListItemText
              primary="+62 851-5643-7221"
              secondary={
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <CallMadeIcon color="warning" fontSize="small" />
                  <span>Need to Call</span>
                </Grid>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding divider>
          <ListItemButton>
            <ListItemText
              primary="+62 851-5643-7221"
              secondary={
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <CallMadeIcon color="warning" fontSize="small" />
                  <span>Need to Call</span>
                </Grid>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding divider>
          <ListItemButton>
            <ListItemText
              primary="+62 851-5643-7221"
              secondary={
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <CallMadeIcon color="warning" fontSize="small" />
                  <span>Need to Call</span>
                </Grid>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding divider>
          <ListItemButton>
            <ListItemText
              primary="+62 851-5643-7221"
              secondary={
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <CallMadeIcon color="warning" fontSize="small" />
                  <span>Need to Call</span>
                </Grid>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding divider>
          <ListItemButton>
            <ListItemText
              primary="+62 851-5643-7221"
              secondary={
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <CallMadeIcon color="warning" fontSize="small" />
                  <span>Need to Call</span>
                </Grid>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding divider>
          <ListItemButton>
            <ListItemText
              primary="+62 851-5643-7221"
              secondary={
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <CallMadeIcon color="warning" fontSize="small" />
                  <span>Need to Call</span>
                </Grid>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Box sx={{ position: "fixed", bottom: "1.5rem", right: "1.5rem" }}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
    </Layout>
  );
}

export default App;
