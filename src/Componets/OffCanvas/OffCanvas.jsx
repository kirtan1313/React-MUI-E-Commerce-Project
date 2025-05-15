import React, { useState } from 'react';
import { Box, Button, Drawer, IconButton, List, ListItem, TextField } from '@mui/material';
import logo from '../../assets/imags/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { CiHeart, CiSearch, CiShoppingCart } from 'react-icons/ci';

const OffCanvas = () => {
    const [open, setOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [activeItem, setActiveItem] = useState('Home');

    const handleSetActive = (item) => {
        setActiveItem(item);
    };

    const toggleDrawer = (state) => () => {
        setOpen(state);
    };

    const toggleSearch = () => {
        setShowSearch((prev) => !prev);
    };

    return (
        <>
            {/* OffCanvas Button */}
            <IconButton
                onClick={toggleDrawer(true)}
                sx={{
                    width: '40px',
                    height: '40px',
                    position: 'relative',
                    color: 'black',
                }}
            >
                <GiHamburgerMenu />
            </IconButton>

            {/* OffCanvas Drawer */}
            <Drawer
                anchor="left"
                open={open}
                onClose={toggleDrawer(false)}
                sx={{
                    zIndex: 1300,
                    '.MuiPaper-root': {
                        width: '250px',
                    },
                }}
            >
                <Box sx={{ padding: 2 }}>
                    {/* Drawer Header */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ color: 'black' }}>
                            <img src={logo} alt="logo-img" />
                        </Box>
                        <Button onClick={toggleDrawer(false)} sx={{ padding: 0 }}>
                            <IoMdClose color="black" fontSize="20px" />
                        </Button>
                    </Box>

                    {/* Icons Section */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'center',
                            gap: 2,
                            cursor: 'pointer',
                            paddingTop: '30px',
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: '25px',
                                color: 'black',
                                fontWeight: 700,
                            }}
                            onClick={toggleSearch}
                        >
                            <CiSearch />
                        </Box>
                        <Box sx={{ fontSize: '25px', position: 'relative', color: 'black', fontWeight: 700 }}>
                            <CiHeart />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bgcolor: 'black',
                                    color: 'white',
                                    fontSize: '11px',
                                    width: '18px',
                                    height: '18px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    top: '-7px',
                                    left: '15px',
                                }}
                            >
                                2
                            </Box>
                        </Box>
                        <Box sx={{ fontSize: '25px', position: 'relative', color: 'black', fontWeight: 700 }}>
                            <CiShoppingCart />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bgcolor: 'black',
                                    color: 'white',
                                    fontSize: '11px',
                                    width: '18px',
                                    height: '18px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    top: '-7px',
                                    left: '15px',
                                }}
                            >
                                2
                            </Box>
                        </Box>
                    </Box>

                    {/* Menu Section */}
                    <Box sx={{ color: 'black' }}>
                        <List>
                            {['Home', "Men's", "Women's", "Kid's", 'Shop', 'Contact'].map((item) => (
                                <ListItem
                                    key={item}
                                     onClick={() => handleSetActive(item)}
                                    sx={{
                                        fontSize: '16px',
                                        textTransform: 'uppercase',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        listStyle: 'none',
                                        padding: '10px 0',
                                        ':hover::after': {
                                            width: '30%',
                                        },
                                        '::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                           width: activeItem === item ? '26%' : '0',
                                            height: '2px',
                                            backgroundColor: 'red',
                                            transition: 'width 0.3s ease',
                                            overflow: 'hidden',
                                        },
                                    }}
                                >
                                    {item}
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Drawer>

            {/* Search Overlay */}
            {showSearch && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        bgcolor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1400,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: '90%',
                            maxWidth: '400px',
                            bgcolor: 'white',
                            p: 2,
                            borderRadius: '8px',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                        }}
                    >
                        <TextField
                            fullWidth
                            type='search'
                            variant="outlined"
                            placeholder="Search..."
                            InputProps={{
                                style: { fontSize: '16px' },
                            }}
                        />
                        <IconButton
                            onClick={toggleSearch}
                            sx={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                            }}
                        >
                            <IoMdClose />
                        </IconButton>
                    </Box>
                </Box>
            )}
        </>
    );
};

export default OffCanvas;
