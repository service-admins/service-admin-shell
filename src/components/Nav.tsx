import { NavLink } from "react-router";
import { menus as iitMenus } from "service-admin-iit/exposes";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 280;

const menus = [...iitMenus];

export default function Nav() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        {menus.map((menu) => (
          <List key={menu.name}>
            <ListItemButton>
              <ListItemText primary={menu.name} />
            </ListItemButton>
            {menu.list.map((menu) => (
              <List key={menu.name} component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary={menu.name} />
                </ListItemButton>
                {menu.list.map((menu) => (
                  <List key={menu.name} component="div" disablePadding>
                    <NavLink to={menu.path}>
                      <ListItemButton sx={{ pl: 8 }}>
                        <ListItemText secondary={menu.name} />
                      </ListItemButton>
                    </NavLink>
                  </List>
                ))}
              </List>
            ))}
          </List>
        ))}
      </Box>
    </Drawer>
  );
}
