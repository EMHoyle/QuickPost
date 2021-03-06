import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import MainStyles from './MainStyles';

const menuItems = [
    {
      listIcon: <HomeWorkIcon></HomeWorkIcon>,
      listText: "Home",
      listPath: "/home"
    },
    {
      listIcon: <LibraryBooksIcon></LibraryBooksIcon>,
      listText: "Posts",
      listPath: "/posts"
    }
];

const MainDrawer = () => {
  const history = useHistory();
  const classes = MainStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.typo} variant="h6" noWrap>
            React Test - Rokket Lab
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <List>
          {menuItems.map((lsItem, key) => (
            <ListItem
              button
              className={classes.list}
              key={key}
              onClick={() => history.push(lsItem.listPath)}
            >
              <ListItemIcon className={classes.icons}>
                {lsItem.listIcon}
              </ListItemIcon>
              <ListItemText
                primary={lsItem.listText}
              ></ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default MainDrawer;