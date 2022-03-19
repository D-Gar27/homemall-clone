import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import ProductArticle from '../ProductArticle/ProductArticle';
import Sidebar from '../Sidebar/Sidebar';
import './Products.scss';
import { BiFilterAlt } from 'react-icons/bi';

const categories = [
  'Bed Room',
  'Kitchen Room',
  'Hotel',
  'Office Funiture',
  'Home Appliances',
  'Bedding Accessories',
  'Living Room',
];

const Products = () => {
  const [products, setProducts] = useState([]);
  let [searchParams] = useSearchParams();
  const [openFilter, setOpenFilter] = useState(false);
  const category = searchParams.get('category');
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `http://localhost:3001/products?_limit=15&_page=1`
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [category]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`http://localhost:3001/products`);
        const data = await res.json();
        if (category?.length) {
          const filtered = data.filter((product) =>
            product.category.includes(
              categories[category[category?.length - 1]]
            )
          );
          setProducts(filtered);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [category]);
  return (
    <main className="page">
      <h2 className="title">PRODUCTS</h2>
      <div className="container products_page_container">
        <Sidebar openFilter={openFilter} setOpenFilter={setOpenFilter} />
        <section className="products_container">
          <button className="filter_btn" onClick={() => setOpenFilter(true)}>
            <BiFilterAlt className="filter_icon" />
            FILTER BY
          </button>
          <div className="products">
            {products && products?.length ? (
              products.map((product) => {
                return <ProductArticle product={product} key={product.id} />;
              })
            ) : (
              <section className="no_products">
                <h2>NO PRODUCTS TO SHOW</h2>
                <button className="clear_btn">CLEAR FILERS</button>
              </section>
            )}
          </div>
        </section>
        <Pagination />
      </div>
    </main>
  );
};

export default Products;
