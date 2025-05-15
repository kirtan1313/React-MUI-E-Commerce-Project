import { AppBar, Box, Button, List, ListItem, TextField, Toolbar, IconButton } from '@mui/material';
import React, { useState } from 'react';
import logo from '../../assets/imags/logo.png';
import { CiHeart, CiSearch, CiShoppingCart } from 'react-icons/ci';
import CloseIcon from '@mui/icons-material/Close';
import OffCanvas from '../OffCanvas/OffCanvas';
import { useNavigate } from 'react-router';

function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const [activeItem, setActiveItem] = useState('Home');
    const navigate = useNavigate();

    const toggleSearch = () => {
        setShowSearch((prev) => !prev);
    };

    const handleSetActive = (item, path) => {
        setActiveItem(item);
        navigate(path)
        console.log("path", path);

    };
    const menuItems = [
        { name: 'Home', path: '/' },
        { name: "Men's", path: '/mens' },
        { name: "Women's", path: '/womens' },
        { name: "Kid's", path: '/kids' },
        { name: 'Shop', path: '/shop' },
        { name: 'Contact', path: '/contact' },
    ];

 

    return (
        <>

            {/* Header */}
            <AppBar sx={{ bgcolor: 'white', zIndex: showSearch ? 999 : 'auto', padding: { xs: '8px 0' }, position: 'unset' }}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        px: '10px',
                    }}
                >
                    {/* Logo Section */}
                    <Box sx={{ color: 'black' }}>
                        <img src={logo} alt="logo-img" />
                    </Box>


                    {/* Offcanva Button */}
                    <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'relative', }}>
                        <OffCanvas />
                    </Box>


                    {/* Navigation Menu */}
                    <Box sx={{ color: 'black', display: { xs: 'none', md: 'block' } }}>
                        <List sx={{ display: 'flex', gap: 2 }}>
                            {menuItems.map(({ name, path }) => (
                                <ListItem
                                    key={name}
                                    onClick={() => handleSetActive(name, path)}
                                    sx={{
                                        fontSize: '16px',
                                        textTransform: 'uppercase',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        listStyle: 'none',
                                        padding: '0 10px',
                                        ':hover::after': {
                                            width: '100%',
                                        },
                                        '::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: activeItem === name ? '100%' : '0',
                                            height: '2px',
                                            backgroundColor: 'red',
                                            transition: 'width 0.3s ease',
                                            overflow: 'hidden',
                                        },
                                    }}
                                >
                                    {name}
                                </ListItem>
                            ))}
                        </List>

                    </Box>

                    {/* Icons Section */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2, cursor: 'pointer' }}>
                        <Box sx={{ color: 'gray' }}>Login/Register</Box>
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
                        <Box sx={{ fontSize: '25px', position: 'relative', color: 'black', fontWeight: 700 }} onClick={() => navigate('/wishlist')}>
                            <CiHeart />
                            <Box sx={{
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
                                left: '15px'
                            }}>

                                2
                            </Box>
                        </Box>
                        <Box sx={{ fontSize: '25px', position: 'relative', color: 'black', fontWeight: 700 }} onClick={() => navigate('/CartProduct')}>
                            <CiShoppingCart />
                            <Box sx={{
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
                                left: '15px'
                            }}>

                                2
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Search Overlay */}
            {showSearch && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: '10px',
                        left: 0,
                        width: '100%',
                        bgcolor: 'white',
                        zIndex: 1000,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
                    }}
                >
                    {/* Search Input */}
                    <TextField
                        fullWidth
                        f
                        variant="outlined"
                        placeholder="Search..."
                        InputProps={{
                            style: { fontSize: '16px' },
                        }}
                    />

                    {/* Close Button */}
                    <IconButton
                        sx={{
                            ml: 2,
                            bgcolor: 'transparent',
                            '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.1)' },
                        }}
                        onClick={toggleSearch}
                    >
                        <CloseIcon sx={{ color: 'black', fontSize: 30 }} />
                    </IconButton>
                </Box>
            )}
        </>
    );
}

export default Header;
