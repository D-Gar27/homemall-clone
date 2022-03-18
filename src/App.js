import './App.scss';
import DetailPage from './components/DetailPage/DetailPage';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Serivces from './components/Services/Serivces';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
      <Serivces />
      <Footer />
    </div>
  );
}

export default App;
