import React from "react";
import "./reference.css";
import NavBar from "../../components/navbar/navbar";
import Image from "../../components/image/image";
import {Box, Drawer, Toolbar, List, Divider, ListItem, ListItemButton, ListItemText, ListItemIcon} from '@mui/material';
import {MoveToInbox, Mail} from '@mui/icons-material';

const Reference = () => {
  const drawerWidth = 240;
  return (
    <div className="PAGES-install">
      <NavBar />
      <Box sx={{ display: 'flex' }}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { 
              width: drawerWidth, 
              boxSizing: 'border-box',
              backgroundColor: 'transparent'
             },
          }}
        >
          <Toolbar sx={{
            height : "10vh"
          }}/>
          <Box sx={{ 
              overflow: 'auto',
              height: "90vh",
              backgroundColor: "black",
             }}>
            <List>
              {['Overview', 'How to Play',  'How-to Guide'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon 
                    sx={{
                      color: 'white',
                    }}
                    >
                      {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
                    </ListItemIcon>
                    <ListItemText 
                      primary={text} 
                      sx={{
                        color: "white"
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider sx={{ bgcolor: '#eee' }}/>
            <List>
              {['Technical Overview', 'Octopus API', 'FAQs'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon
                    sx={{
                      color: 'white',
                    }}>
                      {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
                    </ListItemIcon>
                    <ListItemText 
                      primary={text} 
                      sx={{
                        color: "white"
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Image src="illustration.png" alt="project illustration" height="800px" width="auto"/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
            enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
            imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
            Convallis convallis tellus id interdum velit laoreet id donec ultrices.
            Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
            nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
            leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
            feugiat vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
            sapien faucibus et molestie ac.
          </p>
          <p>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
            eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
            neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
            tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
            sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
            tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
            et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
            tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
            eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          </p>
        </Box>
      </Box>
    </div>
  );
};

export default Reference;