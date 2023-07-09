import './App.css';
import LiveStockList from './components/LiveStockList';
import Header from './components/Header';

import Body from './components/Body';
import FeaturedCompanies from './components/FeaturedCompanies';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <LiveStockList />

      <FeaturedCompanies />

      <Body />

      <div className='md:hidden sm:w-full'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
