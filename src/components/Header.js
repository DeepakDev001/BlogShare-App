import React, { Fragment, useState } from 'react'
import {
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from 'reactstrap';

const Header = (props) => {
    const drawerWidth = 240;
    const navItems = ['Home', 'Project', 'Subsliders', 'Blog', 'Career', 'Contact', 'Trainig'];
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const container = window !== undefined ? () => window().document.body : undefined;
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <img src="https://pub-87e52a4fd60d4ff081535b01c4bf149b.r2.dev/logo.png" alt='img_logo' width={64} />
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    //=============== main_return_function ==================//
    return (
        <Fragment>
            <Container fluid style={{
                background: "#FFFFFF",
                boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.14)",
                position: 'fixed',
                top: "0",
                zIndex: "3",
                right: "0"
            }}>
                <div className='Header_Section' >
                    <img src="https://pub-87e52a4fd60d4ff081535b01c4bf149b.r2.dev/logo.png" alt='img_logo' width={64} />
                    <div className='App_Header_blk'>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ display: { md: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                {navItems.map((item) => (
                                    <Button key={item} sx={{ color: '#000000' }}>
                                        {item}
                                    </Button>
                                ))}
                            </Box>
                        </Toolbar>
                        <Box>
                            <Drawer
                                container={container}
                                variant="temporary"
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                                sx={{
                                    display: { xs: 'block', sm: 'none' },
                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Box>
                    </div>
                </div>
            </Container>
        </Fragment>
    )
}

export default Header
