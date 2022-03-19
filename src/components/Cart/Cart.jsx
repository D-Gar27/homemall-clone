import './Cart.scss';
import { BsChevronDown, BsArrowRight } from 'react-icons/bs';
import { RiCoupon3Line } from 'react-icons/ri';
import spike from '../../images/spike.png';
import ItemInCart from '../ItemInCart/ItemInCart';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Cart = () => {
  const { items, itemsTotal } = useSelector((state) => state.cart);
  const [coupon, setCoupon] = useState('');
  const [selecting, setSelecting] = useState(false);
  const waitToClose = () => {
    setTimeout(() => setSelecting(false), 100);
  };
  return (
    <main className="page">
      <h2 className="title">CART</h2>
      <section className="cart_container container">
        <aside className="items_in_cart">
          <h2 className="your_cart_text">YOUR SHOPPING CART</h2>
          {items && items.length ? (
            <div className="items_in_cart_container">
              {items.map((item) => (
                <ItemInCart key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="empty_cart">
              <h2>EMPTY CART</h2>
              <button className="continue_shop">
                CONTINUE SHOPPING <BsArrowRight className="arrow" />
              </button>
            </div>
          )}
        </aside>
        <aside className="summary">
          <h2>ORDER SUMMARY</h2>
          <section className="total">
            <div>
              <p className="total_items">{items.length} items</p>
              <p className="total_amount">{itemsTotal ? itemsTotal : 0}</p>
            </div>
            <div>
              <p className="discount">Coupon discount</p>
              <p className="discount_amount">0</p>
            </div>
          </section>
          <section className="coupon">
            <div className="select">
              <label className="select_btn" htmlFor="select">
                <RiCoupon3Line className="coupon_icon" />
                <span>Select</span>
                <BsChevronDown className={selecting ? 'up down' : 'down'} />
              </label>
              <input
                type="text"
                id="select"
                onFocus={() => setSelecting(true)}
                onBlur={waitToClose}
              />
              {selecting && (
                <div className="coupons">
                  <p onClick={() => setCoupon('FEB8')}>Coupon One</p>
                  <p onClick={() => setCoupon('LOVE')}>Coupon Two</p>
                  <p onClick={() => setCoupon('HATE')}>Coupon Three</p>
                  <p onClick={() => setCoupon('LIKE')}>Coupon Four</p>
                </div>
              )}
            </div>
            <div className="apply_coupon">
              <input
                type="text"
                placeholder="CODE"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button>APPLY</button>
            </div>
          </section>
          <button className="checkout_btn">PROCEED TO CHECKOUT</button>
          <div className="total_bottom">
            <p className="sub_total">SUB TOTAL</p>
            <p className="total_amount">{itemsTotal ? itemsTotal : 0}</p>
          </div>
          <img src={spike} alt="" className="spike" />
        </aside>
      </section>
    </main>
  );
};

export default Cart;
