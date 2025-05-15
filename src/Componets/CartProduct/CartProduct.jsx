import React, { useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

function CartProduct() {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product 1', price: 100, quantity: 1 },
        { id: 2, name: 'Product 2', price: 200, quantity: 2 },
    ]);

    const handleRemove = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handleQuantityChange = (id, increment) => {
        setCartItems(cartItems.map(item => (
            item.id === id
                ? { ...item, quantity: Math.max(1, item.quantity + increment) }
                : item
        )));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <Box sx={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <Typography variant="h4" sx={{ marginBottom: '20px' }}>
                Your Cart
            </Typography>

            {cartItems.length === 0 ? (
                <Typography variant="h6">Your cart is empty.</Typography>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <Box
                            key={item.id}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '10px',
                                borderBottom: '1px solid #ccc',
                                marginBottom: '10px',
                            }}
                        >
                            <Box>
                                <Typography variant="h6">{item.name}</Typography>
                                <Typography variant="body2">Price: ${item.price}</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Button
                                    variant="outlined"
                                    onClick={() => handleQuantityChange(item.id, -1)}
                                >
                                    -
                                </Button>
                                <Typography>{item.quantity}</Typography>
                                <Button
                                    variant="outlined"
                                    onClick={() => handleQuantityChange(item.id, 1)}
                                >
                                    +
                                </Button>
                            </Box>

                            <IconButton onClick={() => handleRemove(item.id)}>
                                <Delete color="error" />
                            </IconButton>
                        </Box>
                    ))}

                    <Box sx={{ marginTop: '20px', textAlign: 'right' }}>
                        <Typography variant="h6">Total: ${calculateTotal()}</Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ marginTop: '10px' }}
                        >
                            Proceed to Checkout
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );
}

export default CartProduct;
