import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DiscountImg from '../../assets/imags/discount.jpg';

function Discout() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [mins, setMinus] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = 'August 18 2025';

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinus(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Container>
                <Box
                    sx={{
                        // padding: { xs: '20px', md: '50px 0' },
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        // gap: { xs: '20px', md: '30px' },
                    }}
                >
                    <Box>
                        <img
                            src={DiscountImg}
                            alt="Discount"
                            style={{
                                width: '100%',
                                height: 'auto',
                                // borderRadius: '10px',
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            bgcolor: '#F4F4F4',
                            padding: { xs: '10px',sm:'50px', md: '20px' },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                gap: { xs: '10px', md: '20px' },
                                paddingY: { xs: '10px', md: '20px' },
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    bgcolor: 'white',
                                    width: { xs: '150px', md: '200px' },
                                    height: { xs: '150px', md: '200px' },
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: { xs: '12px',sm:'20px', md: '16px' },
                                        fontWeight: 500,
                                        color: '#555',
                                    }}
                                >
                                    Discount
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '20px',sm:'24px', md: '29px' },
                                        color: 'red',
                                        fontWeight: 700,
                                    }}
                                >
                                    Summer 2019
                                </Typography>
                                <Typography
                                    sx={{
                                        display: 'flex',
                                        gap: 1,
                                        fontSize: { xs: '14px', md: '20px' },
                                        fontWeight: 500,
                                        color: '#333',
                                    }}
                                >
                                    Sale
                                    <Box sx={{ color: 'red', fontWeight: 700 }}>50%</Box>
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: { xs: '10px', md: '20px' },
                                paddingY: { xs: '10px', md: '20px' },
                            }}
                        >
                            {[
                                { label: 'Day', value: days },
                                { label: 'Hour', value: hours },
                                { label: 'Min', value: mins },
                                { label: 'Sec', value: seconds },
                            ].map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        gap: '5px',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            fontSize: { xs: '20px',sm:'45px', md: '30px' },
                                            fontWeight: 700,
                                        }}
                                    >
                                        {item.value}
                                    </Box>
                                    <Box
                                        sx={{
                                            fontSize: { xs: '12px',sm:'18px ', md: '16px' },
                                        }}
                                    >
                                        {item.label}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default Discout;
