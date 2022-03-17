import './App.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Serivces from './components/Services/Serivces';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
      <Serivces />
      <Footer />
    </div>
  );
}

export default App;
