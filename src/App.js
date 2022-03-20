import './App.scss';
import DetailPage from './components/DetailPage/DetailPage';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Serivces from './components/Services/Serivces';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { Provider } from 'react-redux';
import store from './redux/store.js';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<DetailPage />} />
          </Routes>
        </BrowserRouter>
        <div className="chat">
          <div className="stick"></div>
          <div className="stick long"></div>
        </div>
        <Serivces />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
