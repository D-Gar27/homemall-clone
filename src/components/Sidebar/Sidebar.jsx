import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link, useSearchParams } from 'react-router-dom';
import CategoryBtn from '../CategoryBtn/CategoryBtn';
import './Sidebar.scss';
import { VscChromeClose } from 'react-icons/vsc';

const brands = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
];

const categoriesList = [
  'Bed Room',
  'Kitchen Room',
  'Hotel',
  'Office Funiture',
  'Home Appliances',
  'Bedding Accessories',
  'Living Room',
];

const Sidebar = ({ openFilter, setOpenFilter }) => {
  const [categories, setCategories] = useState([]);
  let [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const navigate = useNavigate();
  useEffect(() => {
    if (categories.length) {
      navigate(`/?category=${categories.join('_')}`);
    }
    if (!categories.length) {
      navigate(`/`);
    }
  }, [categories, navigate]);
  return (
    <>
      {openFilter && <div className="placeholder"></div>}
      <aside
        className={openFilter === true ? 'sidebar opened_sidebar' : 'sidebar'}
      >
        <p className="filter_text">
          FILTER BY
          <VscChromeClose
            className="close_icon"
            onClick={() => setOpenFilter(false)}
          />
        </p>
        {category ? (
          <button className="clear_btn" onClick={() => navigate('/?page=1')}>
            CLEAR ALL
          </button>
        ) : (
          <button disabled className="clear_btn">
            CLEAR ALL
          </button>
        )}
        <h4>Discounts</h4>
        <div className="categories_container">
          <h4>Categories</h4>
          <ul className="categories">
            {categoriesList.map((cate, i) => (
              <CategoryBtn
                cate={cate}
                key={cate}
                id={i}
                setCategories={setCategories}
                categories={categories}
              />
            ))}
          </ul>
        </div>
        <div className="price_range">
          <h4>Prices</h4>
          <input type="range" name="" id="" />
        </div>
        <h4 className="colors">Colors</h4>
        <div className="brands">
          <h4>Brands</h4>
          <ul className="brands_container">
            {brands.map((brand) => (
              <li key={brand} className="brand">
                <p>BRAND</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="blank"></div>
        {openFilter && (
          <div className="apply_btns">
            <button className="clear_btn2">Clear</button>
            <button className="apply_btn">Apply</button>
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
