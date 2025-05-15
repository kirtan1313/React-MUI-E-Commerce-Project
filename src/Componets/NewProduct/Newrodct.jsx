import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Pro1 from '../../assets/imags/product-1.jpg';
import Pro2 from '../../assets/imags/product-2.jpg';
import Pro3 from '../../assets/imags/product-3.jpg';
import Pro4 from '../../assets/imags/product-4.jpg';
import Pro5 from '../../assets/imags/product-5.jpg';
import Pro6 from '../../assets/imags/product-6.jpg';
import Pro7 from '../../assets/imags/product-7.jpg';
import Pro8 from '../../assets/imags/product-8.jpg';
import { BiShowAlt } from 'react-icons/bi';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import { LuShoppingCart } from 'react-icons/lu';

function NewProdct() {
  const ProductImg = [
    { img: Pro1, title: 'Buttons tweed blazer', price: 59.0 },
    { img: Pro2, title: 'Flowy striped skirt', price: 49.0 },
    { img: Pro3, title: 'Cotton T-Shirt', price: 59.0 },
    { img: Pro4, title: 'Slim striped pocket shirt', price: 59.0 },
    { img: Pro5, title: 'Fit micro corduroy shirt', price: 59.0 },
    { img: Pro6, title: 'Tropical Kimono', price: 49.0 },
    { img: Pro7, title: 'Contrasting sunglasses', price: 59.0 },
    { img: Pro8, title: 'Water resistant backpack', price: 49.0 },
  ];

  return (
    <Container>
      <Box sx={{ paddingTop: '35px', paddingBottom: '35px' }}>
        <Typography
          sx={{
            fontSize: { xs: '20px', md: '30px' },
            fontWeight: 'bold',
          }}
        >
          New Product
          <Box sx={{ borderBottom: '2px solid red', width: '90px', marginTop: '10px' }}></Box>
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 3,
        }}
      >
        {ProductImg.map((data, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              cursor: 'pointer',
              '&:hover .icon-container': {
                opacity: 1,
                transform: 'translateY(0)',
              },
            }}
          >
            {/* Product Image */}
            <Box
              component="img"
              src={data.img}
              alt={data.title}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                '&:hover':{
                    opacity:'0.6'
                }
              }}
            />

            {/* "New" Badge */}
            <Box
              sx={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                bgcolor: '#aed581',
                color: 'white',
                padding: '5px 10px',
                fontSize: { xs: '10px', md: '12px' },
                borderRadius: '4px',
              }}
            >
              New
            </Box>

            {/* Hover Icons */}
            <Box
              className="icon-container"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
                position: 'absolute',
                bottom: {xs:'35%',sm:'31%',md:'32%',lg:'29%'},
                left: {xs:'23px',sm:'50px',md:'34px',lg:'54px'},
                transform: 'translateY(50%)',
                opacity: 0,
                transition: 'opacity 0.3s ease, transform 0.5s ease',
              }}
            >
              {[<BiShowAlt />, <FaRegHeart />, <LuShoppingCart />].map((Icon, idx) => (
                <Typography
                  key={idx}
                  sx={{
                    bgcolor: 'white',
                    width: { xs: '30px', md: '40px' },
                    height: { xs: '30px', md: '40px' },
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: { xs: '14px', md: '18px' },
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, background-color 0.3s ease',
                    ':hover': {
                      bgcolor: 'red',
                      color: 'white',
                      transform:'rotate(360deg)'
                    },
                  }}
                >
                  {Icon}
                </Typography>
              ))}
            </Box>

            {/* Product Details */}
            <Box sx={{ textAlign: 'center', paddingTop: '10px' }}>
              <Typography
                sx={{
                  fontSize: { xs: '14px', sm: '14px', md: '16px' },
                  fontWeight: 'bold',
                  color: '#333',
                }}
              >
                {data.title}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 0.5,
                  paddingTop: '5px',
                  fontSize: { xs: '10px', md: '12px' },
                  color: '#ff8a65',
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: '14px', md: '16px' },
                  fontWeight: 'bold',
                  color: '#000',
                  paddingTop: '5px',
                }}
              >
                ${data.price.toFixed(2)}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default NewProdct;
