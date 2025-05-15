import { createTheme, ThemeProvider } from '@mui/material';
import Banner from './Componets/Banner/Banner'
import Header from './Componets/Header/Header'

import { Route, Routes } from 'react-router';
import Wishlist from './Componets/Wishlist/Wishlist';
import Footer from './Componets/Footer/Footer';
import Home from './Componets/Wraper/Home';
import CartProduct from './Componets/CartProduct/CartProduct';


function App() {

  const theme = createTheme({
    typography: {
      fontFamily: 'monospace',
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path='/CartProduct' element={<CartProduct />} />
        </Routes>
        <Footer />
      </ThemeProvider>


    </>
  )
}

export default App
