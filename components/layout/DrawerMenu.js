import React from 'react'
import MenuItems from './MenuItems'
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { useTheme } from '@material-ui/core/styles';

const DrawerMenu = props => {
    const theme = useTheme();

    return(
        <nav className={props.classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={props.container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={props.mobileOpen}
            onClose={props.handleDrawerToggle}
            classes={{
              paper: props.classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, 
            }}
          >
            <MenuItems classes={props.classes}/>
          </Drawer>
        </Hidden>

        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: props.classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <MenuItems classes={props.classes}/>
          </Drawer>
        </Hidden>
      </nav>
    )
}

export default DrawerMenu;