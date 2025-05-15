import { Box, Button, Container, Input, List, ListItem } from '@mui/material'
import React from 'react'
import logo from '../../assets/imags/logo.png';
import paymet1 from '../../assets/imags/payment-1 (1).png'
import paymet2 from '../../assets/imags/payment-1.png'
import paymet3 from '../../assets/imags/payment-3.png'
import paymet4 from '../../assets/imags/payment-4.png'
import paymet5 from '../../assets/imags/payment-5.png'
import { IoMdSend } from 'react-icons/io';
import { SiFacebook, SiInstagram } from 'react-icons/si';
import { FaWhatsapp } from 'react-icons/fa';
import { BsTwitter, BsYoutube } from 'react-icons/bs';


function Footer() {
    return (
        <>
            <Container>
                <Box sx={{ border: '1px solid gray', opacity: '0.2' }}></Box>
                <Box sx={{ display: 'grid', gridTemplateColumns: {xs:'repeat(1,1fr)',sm:'repeat(2,1fr)',md:'repeat(4,1fr)'}, gap: {sm:'40px',md:'10px'}, paddingTop: '60px', paddingBottom: '60px' }}>
                    <Box>
                        <List>
                            <ListItem>
                                <img src={logo} alt="logo" />
                            </ListItem>
                            <ListItem sx={{ paddingTop: '20px', color: 'gray', fontSize: '14px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt cilisis.
                            </ListItem>
                            <Box sx={{ display: 'flex' }}>
                                {
                                    [paymet1, paymet3, paymet4, paymet2, paymet5].map((data) => {
                                        return (
                                            <ListItem sx={{ padding: '20px 0 0 0' }}>
                                                <img src={data} alt="paymentImg" />
                                            </ListItem>
                                        )
                                    })
                                }
                            </Box>
                        </List>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: {xs:'start',md:'center'} }}>
                        <List>
                            <ListItem sx={{ fontSize: '22px', fontWeight: 600 }}>Quick links</ListItem>
                            <ListItem sx={{ color: 'gray', fontSize: '16px' }}>About</ListItem>
                            <ListItem sx={{ color: 'gray', fontSize: '16px' }}>Blogs</ListItem>
                            <ListItem sx={{ color: 'gray', fontSize: '16px' }}>Contact</ListItem>
                            <ListItem sx={{ color: 'gray', fontSize: '16px' }}>FAQ</ListItem>
                        </List>
                    </Box>


                    <Box sx={{ display: 'flex', justifyContent: {xs:'start',md:'center'} }}>
                        <List>
                            <ListItem sx={{ fontSize: '22px', fontWeight: 600 }}>Account</ListItem>
                            <ListItem sx={{ color: 'gray', fontSize: '16px' }}>My Account</ListItem>
                            <ListItem sx={{ color: 'gray', fontSize: '16px' }}>Orders Tracking</ListItem>
                            <ListItem sx={{ color: 'gray', fontSize: '16px' }}>Checkout</ListItem>
                            <ListItem sx={{ color: 'gray', fontSize: '16px' }}>Wishlist</ListItem>
                        </List>
                    </Box>

                    <Box>
                        <List>
                            <ListItem sx={{ fontSize: '22px', fontWeight: 600 }}>NEWSLETTER</ListItem>
                            <ListItem sx={{ gap: 1,paddingTop:{xs:'25px',md:'0'} }}>
                                <Input type='search' placeholder='Enter Your E-Mail'></Input>
                                <Button variant="contained" color="success" endIcon={<IoMdSend />}>
                                    Send
                                </Button>
                            </ListItem>
                            <ListItem sx={{ display: 'flex', alignItems: 'center', gap: 2, paddingTop: {xs:'25px',md:'15px'}, fontSize: '22px' }}>
                                <Box sx={{ bgcolor: '#E1E1E1', width: '45px', height: '45px', borderRadius: '50%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                                    <SiFacebook />
                                </Box>
                                <Box sx={{ bgcolor: '#E1E1E1', width: '45px', height: '45px', borderRadius: '50%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                                    < SiInstagram />
                                </Box>
                                <Box sx={{ bgcolor: '#E1E1E1', width: '45px', height: '45px', borderRadius: '50%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                                    <FaWhatsapp />
                                </Box>
                                <Box sx={{ bgcolor: '#E1E1E1', width: '45px', height: '45px', borderRadius: '50%',display:'flex',justifyContent:'center',alignItems:'center' }} >
                                    <BsTwitter />
                                </Box>
                                <Box sx={{ bgcolor: '#E1E1E1', width: '45px', height: '45px', borderRadius: '50%',display:'flex',justifyContent:'center',alignItems:'center' }} >
                                    <BsYoutube />
                                </Box>
                            </ListItem>
                        </List>
                    </Box>
                </Box>

            </Container>
        </>
    )
}

export default Footer
