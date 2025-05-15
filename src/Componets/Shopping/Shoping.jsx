import React from 'react';
import { Box } from '@mui/material';
import socialMediaImg1 from '../../assets/imags/insta-1.jpg';
import socialMediaImg2 from '../../assets/imags/insta-2.jpg';
import socialMediaImg3 from '../../assets/imags/insta-3.jpg';
import socialMediaImg4 from '../../assets/imags/insta-4.jpg';
import socialMediaImg5 from '../../assets/imags/insta-5.jpg';
import { SiFacebook, SiInstagram } from 'react-icons/si';
import { FaWhatsapp } from 'react-icons/fa';

function Shoping() {
    return (
        <Box
            sx={{
                overflowX: 'hidden', 
                display: 'grid',
                gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)', 
                    sm: 'repeat(2, 1fr)', 
                    md: 'repeat(3, 1fr)', 
                    lg: 'repeat(5, 1fr)', 
                },
                // gap: {  sm: '15px', md: '20px' }, 
                paddingTop: '60px',
                // paddingX: '10px', 
                boxSizing: 'border-box', 
                width: {xs:'100vw',md:'100%'}, 
            }}
        >
            {[socialMediaImg1, socialMediaImg2, socialMediaImg3, socialMediaImg4, socialMediaImg5].map((img, index) => (
                <Box
                    key={index}
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        
                        width: '100%', 
                    }}
                >
                    {/* Image */}
                    <img
                        src={img}
                        alt={`socialMediaImg${index + 1}`}
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'cover',
                            display: 'block',
                            
                        }}
                    />
                    {/* Overlay */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            color: 'white',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            opacity: 0, 
                            transition: 'opacity 0.3s ease', 
                            fontSize: { xs: '20px', sm: '25px', md: '30px' }, 
                            gap: { xs: 1, sm: 2 }, 
                            '&:hover': {
                                opacity: 1, 
                            },
                          
                        }}
                    >
                        <SiInstagram />
                        <SiFacebook />
                        <FaWhatsapp />
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

export default Shoping;
