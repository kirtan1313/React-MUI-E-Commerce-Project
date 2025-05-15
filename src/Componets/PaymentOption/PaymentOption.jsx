import { Box, Container } from '@mui/material'
import React from 'react'
import Dilivery from '../../assets/imags/free-shipping.png'
import Support from '../../assets/imags/24-hours-support.png'
import Payment from '../../assets/imags/money-back.png'
import Secuare from '../../assets/imags/credit-card.png'

function PaymentOption() {

    const paymentMethod = [
        {
            img: Dilivery,
            title: 'Free Shipping',
            dec: 'For all oder over $99'
        },
        {
            img: Support,
            title: 'Money Back Guarantee',
            dec: 'If good have Problems'
        },
        {
            img: Payment,
            title: 'Online Support 24/7',
            dec: 'Dedicated support'
        },
        {
            img: Secuare,
            title: 'Payment Secure',
            dec: '100% secure payment'
        },
    ]

    return (
        <>
            <Container>
                <Box sx={{ display: 'grid', gridTemplateColumns:{xs:'repeat(1,1fr)',md:'repeat(4,1fr)'}, gap: {xs:'22px',md:'10px'},paddingTop:'60px',paddingBottom:'60px' }}>
                    {
                        paymentMethod.map((data, index) => {
                            return (
                                <Box key={index} sx={{display:'flex',alignItems:'center'}}>
                                    <Box>
                                        <img src={data.img} alt="img" />
                                    </Box>
                                    <Box sx={{paddingLeft:'20px'}}>
                                        <Box sx={{fontSize:'17px'}}>{data.title}</Box>
                                        <Box sx={{color:'gray',paddingTop:'5px'}}>{data.dec}</Box>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Container >
        </>
    )
}

export default PaymentOption
