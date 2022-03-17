import CategoryBtn from '../CategoryBtn/CategoryBtn';
import './Sidebar.scss';

const brands = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
];

const categories = [
  'Bed Room',
  'Kitchen Room',
  'Hotel',
  'Office Funiture',
  'Home Appliances',
  'Bedding Accessories',
  'Living Room',
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <p className="filter_text">FILTER BY</p>
      <button className="clear_btn">CLEAR ALL</button>
      <h4>Discounts</h4>
      <div className="categories_container">
        <h4>Categories</h4>
        <ul className="categories">
          {categories.map((cate) => (
            <CategoryBtn cate={cate} key={cate} />
          ))}
        </ul>
      </div>
      <div>
        <h4>Prices</h4>
        <input type="range" name="" id="" />
      </div>
      <h4>Colors</h4>
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
    </aside>
  );
};

export default Sidebar;
