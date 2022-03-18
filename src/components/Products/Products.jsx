import { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Products.scss';
import { BsHeart } from 'react-icons/bs';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          'http://localhost:3001/products?_page=2&_limit=15'
        );
        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <main className="products_page">
      <h2 className="products_title">PRODUCTS</h2>
      <div className="container products_page_container">
        <Sidebar />
        <section className="products_container">
          {products &&
            products.map((product) => {
              return (
                <article className="product_article" key={product?.id}>
                  <img src={product?.image} alt="" className="product_img" />
                  <div className="info">
                    <p className="product_name">{product?.name}</p>
                    <p className="product_price">{product?.price?.max} MMK</p>
                  </div>
                  <button className="heart_icon">
                    <BsHeart />
                  </button>
                </article>
              );
            })}
        </section>
      </div>
    </main>
  );
};

export default Products;
