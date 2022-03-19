import './Navbar.scss';
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiShoppingCart2Line,
  RiLoginCircleLine,
} from 'react-icons/ri';
import { FiTwitter } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { useRef, useState } from 'react';
import logo from '../../images/shlogo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const { itemsAmount } = useSelector((state) => state.cart);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef();
  return (
    <header className="header">
      <nav className="navbar container">
        <img src={logo} className="logo" alt="sweety home logo" />
        <div
          className={
            isSearch
              ? 'search_bar_container opened_searchbar'
              : 'search_bar_container'
          }
        >
          <button className="back_arrow" onClick={() => setIsSearch(false)}>
            <BsArrowLeft />
          </button>
          <form
            className="search_bar"
            onSubmit={(e) => {
              e.preventDefault();
              navigate(`/?name=${searchRef.current.value}`);
            }}
          >
            <AiOutlineSearch className="search_icon" />
            <input
              type="text"
              placeholder="Search by product name..."
              ref={searchRef}
            />
          </form>
        </div>
        <ul className="nav_menu">
          <button
            className="outer_search_icon"
            onClick={() => setIsSearch(true)}
          >
            <AiOutlineSearch className="search_icon" />
          </button>
          <div className="social_media">
            <li className="facebook">
              <RiFacebookCircleLine />
            </li>
            <li>
              <FiTwitter />
            </li>
            <li>
              <RiInstagramLine />
            </li>
          </div>
          <Link to={'/cart'}>
            <li className="cart">
              {itemsAmount > 0 && (
                <span className="items_quantity">{itemsAmount}</span>
              )}
              <RiShoppingCart2Line />
            </li>
          </Link>
          <li>
            <RiLoginCircleLine />
          </li>
          <button className="hamburger" onClick={() => setIsOpened(!isOpened)}>
            <div
              className={isOpened ? 'stick animate_stick top' : 'stick top'}
            ></div>
            <div
              className={
                isOpened ? 'stick animate_stick middle' : 'stick middle'
              }
            ></div>
            <div
              className={
                isOpened ? 'stick animate_stick bottom' : 'stick bottom'
              }
            ></div>
          </button>
        </ul>
      </nav>
      <nav className={isOpened ? 'sub_navbar opened_sub' : 'sub_navbar'}>
        <p>HOME</p>
        <p
          className={
            pathname === '/'
              ? 'products'
              : pathname.includes('/products')
              ? 'products'
              : ''
          }
        >
          <Link to={'/'} className="link">
            PRODUCTS
          </Link>
        </p>
        <p>SERVICES</p>
        <p>NEWS & EVENTS</p>
        <p>BLOG</p>
        <p>ABOUT US</p>
        <p>CONTACT</p>
        <div className="social_media">
          <p className="facebook">
            <RiFacebookCircleLine className="icon" /> Facebook
          </p>
          <p>
            <FiTwitter className="icon" /> Twitter
          </p>
          <p>
            <RiInstagramLine className="icon" /> Instagram
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
