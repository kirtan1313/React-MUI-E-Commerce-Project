import { Box, createTheme, Typography } from '@mui/material'
import React from 'react'
import './Banner.css'


function Banner() {


    return (
        <>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }, gap: '5px', paddingTop: '30px' }}>
                <Box className='banner-img-1' sx={{ height: { xs: '300px', md: '600px' }, paddingLeft: { xs: '10px', md: '30px' }, display: 'flex', alignItems: 'center' }}>
                    <Box >
                        <Typography sx={{ fontSize: { xs: '30px', md: '50px' } }}>Women’s fashion</Typography>
                        <Typography sx={{ color: 'gray', paddingTop: '15px', display: { xs: '-webkit-inline-box', md: 'block' } }}>
                            Sitamet, consectetur adipiscing elit, sed do eiusmod
                            <Typography>
                                tempor incidid-unt labore edolore magna aliquapendisse
                            </Typography>
                        </Typography>
                        <Typography sx={{ borderBottom: '2px solid red', display: 'inline-block', paddingTop: '20px' }}>
                            Shop Now
                        </Typography>
                    </Box>
                </Box>


                <Box sx={{ gap: 1, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' }}>
                    <Box className='banner-img-2' sx={{  padding: {xs:'50px 10px',md:'0 10px'}, display: 'flex', alignItems: 'center' }}>
                        <Box >
                            <Typography sx={{ fontSize: { xs: '16px', md: '30px' } }}>Men’s fashion</Typography>
                            <Typography sx={{ color: 'gray', fontSize: { xs: '14px' } }}>
                                358 Itmes
                            </Typography>
                            <Typography sx={{ fontSize: { xs: '12px', md: '20px' }, borderBottom: '2px solid red', display: 'inline-block', paddingTop: '10px' }}>
                                Shop Now
                            </Typography>
                        </Box>
                    </Box>


                    <Box className='banner-img-3' sx={{ padding: {xs:'50px 10px',md:'0 10px'}, display: 'flex', alignItems: 'center' }}>
                        <Box >
                            <Typography sx={{ fontSize: { xs: '16px', md: '30px' } }}>Kid’s fashion</Typography>
                            <Typography sx={{ color: 'gray', fontSize: { xs: '14px' } }}>
                                273 items
                            </Typography>
                            <Typography sx={{ fontSize: { xs: '12px', md: '20px' }, borderBottom: '2px solid red', display: 'inline-block', paddingTop: '10px' }}>
                                Shop Now
                            </Typography>
                        </Box>
                    </Box>


                    <Box className='banner-img-4' sx={{ padding: {xs:'50px 10px',md:'0 10px'}, display: 'flex', alignItems: 'center' }}>
                        <Box >
                            <Typography sx={{ fontSize: { xs: '16px', md: '30px' } }}>Cosmetics</Typography>
                            <Typography sx={{ color: 'gray', fontSize: { xs: '14px' } }}>
                                159 items
                            </Typography>
                            <Typography sx={{ fontSize: { xs: '12px', md: '20px' }, borderBottom: '2px solid red', display: 'inline-block', paddingTop: '10px' }}>
                                Shop Now
                            </Typography>
                        </Box>
                    </Box>


                    <Box className='banner-img-5' sx={{ padding: {xs:'50px 10px',md:'0 10px'}, display: 'flex', alignItems: 'center' }}>
                        <Box >
                            <Typography sx={{ fontSize: { xs: '16px', md: '30px' } }}>Accessories</Typography>
                            <Typography sx={{ color: 'gray', fontSize: { xs: '14px' } }}>
                                792 items
                            </Typography>
                            <Typography sx={{ fontSize: { xs: '12px', md: '20px' }, borderBottom: '2px solid red', display: 'inline-block', paddingTop: '10px' }}>
                                Shop Now
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Banner