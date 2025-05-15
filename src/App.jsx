import { createTheme, ThemeProvider } from '@mui/material';
import Banner from './Componets/Banner/Banner'
import Header from './Componets/Header/Header'
import NewProdct from './Componets/NewProduct/Newrodct';
import Discout from './Componets/Discount/Discout';
import TrendingProduct from './Componets/TrendingProduct/TrendingProduct';
import Shoping from './Componets/Shopping/Shoping';
import PaymentOption from './Componets/PaymentOption/PaymentOption';
import Footer from './Componets/Footer/Footer';


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
        <Banner />
        <NewProdct />
         <Discout />
        <TrendingProduct />
        <Shoping />
        <PaymentOption />
        <Footer />
      </ThemeProvider>
      
    </>
  )
}

export default App
