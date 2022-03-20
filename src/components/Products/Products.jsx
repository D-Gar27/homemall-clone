import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import Pagination from '../Pagination/Pagination';
import ProductArticle from '../ProductArticle/ProductArticle';
import Sidebar from '../Sidebar/Sidebar';
import './Products.scss';
import { useNavigate } from 'react-router';
import { BiFilterAlt } from 'react-icons/bi';
import Pagination from '../Pagination/Pagination';

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
  const [pageCount, setPageCount] = useState(1);
  let [searchParams] = useSearchParams();
  const [openFilter, setOpenFilter] = useState(false);
  const category = searchParams.get('category');
  const name = searchParams.get('name');
  const brand = searchParams.get('brand');
  const page = searchParams.get('page');
  const price = searchParams.get('price');
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `http://localhost:3001/products?_limit=15&_page=${page}`
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [category, name, brand, page]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `http://localhost:3001/products?${brand ? `&brand=${brand}` : ''}${
            category ? `&category=${categories[category[0]]}` : ''
          }${name ? `&name_like=${name}` : ''}${
            price
              ? `&price_gte=${price.split('~')[0]}&price_lte=${
                  price.split('~')[1]
                }`
              : ''
          }`
        );
        const data = await res.json();
        setPageCount(data);
        setProducts(data.slice(0, 15));
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [name, category, brand, price]);
  const navigate = useNavigate();
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
                <button className="clear_btn" onClick={() => navigate('/')}>
                  CLEAR FILERS
                </button>
              </section>
            )}
          </div>
        </section>
      </div>
      <Pagination length={Math.ceil(pageCount.length)} />
    </main>
  );
};

export default Products;
