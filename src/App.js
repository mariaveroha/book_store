import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import News from './Components/News/News';
import Recommended from './Components/Recommended/Recommended';
import TopSellers from './Components/TopSellers/TopSellers';
import { useMediaQuery } from 'react-responsive'
function App() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 751 })
  return (
    <div>
      {
        isTabletOrMobile ?
          <>
            <div className='container'>
              <Header />
              <News />
              <TopSellers />
              <Recommended />
              <Footer />
            </div>
          </>
          :
          <>
            <div className='container'>
              <Header />
              <Banner />
              <TopSellers />
              <Recommended />
              <News />
            </div>
            <Footer />
          </>
      }

    </div >
  );
}

export default App;
