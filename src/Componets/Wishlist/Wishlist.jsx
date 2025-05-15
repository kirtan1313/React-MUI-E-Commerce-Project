import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions } from '@mui/material';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([
        {
            id: 1,
            name: 'Product 1',
            image: 'https://via.placeholder.com/150',
            price: '$20',
        },
        {
            id: 2,
            name: 'Product 2',
            image: 'https://via.placeholder.com/150',
            price: '$30',
        },
        {
            id: 3,
            name: 'Product 3',
            image: 'https://via.placeholder.com/150',
            price: '$40',
        },
    ]);

    const removeFromWishlist = (id) => {
        setWishlist(wishlist.filter((item) => item.id !== id));
    };

    return (
        <Box
            sx={{
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'center',
            }}
        >
            <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
                My Wishlist
            </Typography>

            {wishlist.length > 0 ? (
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                        gap: '20px',
                        width: '100%',
                        maxWidth: '1200px',
                    }}
                >
                    {wishlist.map((item) => (
                        <Card key={item.id} sx={{ maxWidth: 300, boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="150"
                                image={item.image}
                                alt={item.name}
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                    {item.name}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {item.price}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => removeFromWishlist(item.id)}
                                >
                                    Remove
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </Box>
            ) : (
                <Typography variant="h6" color="text.secondary">
                    Your wishlist is empty.
                </Typography>
            )}
        </Box>
    );
};

export default Wishlist;
