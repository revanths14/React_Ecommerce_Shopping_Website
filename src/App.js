//import react router dom
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
//import pages

import Home from './pages/Home ';
import ProductDetails from './pages/ProductDetails';

// import component
import Slidebar from './Components/Sidebar';
import Header from './Components/Header';
import Footer from './Components/Footer';



function App() {
  return (
    <div className='overflow-hidden' >
      <Router>
        <Header/>
          <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product/:id' element={<ProductDetails/>}/>
          </Routes>
          <Slidebar/>
          <Footer/>
      </Router>
      

    </div>
  );
}

export default App;
