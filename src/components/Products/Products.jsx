import Sidebar from '../Sidebar/Sidebar';
import './Products.scss';

const Products = () => {
  return (
    <main className="products_page">
      <h2 className="products_title">PRODUCTS</h2>
      <div className="container products_page_container">
        <Sidebar />
        <div></div>
      </div>
    </main>
  );
};

export default Products;
