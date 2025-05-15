import React from 'react';
import { Box, Container, List, ListItem, Typography } from '@mui/material';
import { FaStar } from 'react-icons/fa';
import Tren1 from '../../assets/imags/ht-1.jpg';
import Tren2 from '../../assets/imags/ht-2.jpg';
import Tren3 from '../../assets/imags/ht-3.jpg';
import Tren4 from '../../assets/imags/f-1.jpg';
import Tren5 from '../../assets/imags/f-2.jpg';
import Tren6 from '../../assets/imags/f-3.jpg';
import Tren7 from '../../assets/imags/bs-1.jpg';
import Tren8 from '../../assets/imags/bs-2.jpg';
import Tren9 from '../../assets/imags/bs-3.jpg';

const TrendingProduct = () => {
    const sections = [
        {
            title: 'Hot Trend',
            products: [
                { img: Tren1, title: 'Chain bucket bag', price: 59.0 },
                { img: Tren2, title: 'Pendant earrings', price: 59.0 },
                { img: Tren3, title: 'Cotton T-Shirt', price: 59.0 },
            ],
        },
        {
            title: 'Featured',
            products: [
                { img: Tren4, title: 'Cotton T-Shirt', price: 59.0 },
                { img: Tren5, title: 'Zip-pockets pebbled tote briefcase', price: 59.0 },
                { img: Tren6, title: 'Round leather bag', price: 59.0 },
            ],
        },
        {
            title: 'Best Seller',
            products: [
                { img: Tren7, title: 'Bow wrap skirt', price: 59.0 },
                { img: Tren8, title: 'Metallic earrings', price: 59.0 },
                { img: Tren9, title: 'Flap cross-body bag', price: 59.0 },
            ],
        },
    ];

    return (
        <Container>
            <Box sx={{ display: 'grid', gridTemplateColumns:{xs:'repeat(1, 1fr)',sm:'repeat(3, 1fr)'}, gap: '40px', paddingTop: '30px' }}>
                {sections.map((section, index) => (
                    <Box key={index}>
                        {/* Section Title */}
                        <Typography
                            sx={{
                                fontSize: '24px',
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                marginBottom: '10px',
                            }}
                        >
                            {section.title}
                            <Box sx={{ borderBottom: '2px solid red', width: '90px', marginTop: '5px' }}></Box>
                        </Typography>

                        {/* Product List */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                marginTop: '20px',
                            }}
                        >
                            {section.products.map((product, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        cursor:'pointer'
                                    }}
                                >
                                    {/* Product Image */}
                                    <Box sx={{ width: '80px', height: '80px', overflow: 'hidden', borderRadius: '8px' }}>
                                        <img
                                            src={product.img}
                                            alt={product.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </Box>

                                    {/* Product Details */}
                                    <List sx={{ padding: 0 }}>
                                        <ListItem sx={{ fontSize: '16px', fontWeight: '500', padding: 0 }}>
                                            {product.title}
                                        </ListItem>
                                        <ListItem
                                            sx={{
                                                fontSize: '12px',
                                                color: '#ff8a65',
                                                display: 'flex',
                                                gap: '2px',
                                                padding: 0,
                                                paddingTop:'10px',
                                            }}
                                        >
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </ListItem>
                                        <ListItem sx={{ fontSize: '16px', fontWeight: 'bold', padding:'10px 0 0 0' }}>
                                            ${product.price.toFixed(2)}
                                        </ListItem>
                                    </List>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default TrendingProduct;
