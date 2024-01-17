import './App.css';
import Carousel from './Components/Carousel/Carousel';
import LogoSearchBar from './Components/LogoSearchBar/LogoSearchBar';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import TopBanner from './Components/TopBanner/TopBanner';
import barazMallData from './data/barazMallData';
import flashSaleData from './data/flashSaleData';

function App() {
  return (
   <main>
      <Navbar/>
      <LogoSearchBar />
      <Carousel />
      <TopBanner />
      <Products title="FLASHSALE" products={flashSaleData}/>
      <Products title="BARAZ MALL" products={barazMallData}/>
      {/* <FlashSale />
      <BarazMall /> */}
      
   </main>
  );
}

export default App;
