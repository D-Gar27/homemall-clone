import './AddedToCart.scss';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const AddedToCart = ({ setAskToCart }) => {
  return (
    <section className="added_cart">
      <div className="success">
        <p>
          <BsFillCheckCircleFill className="success_icon" />
          <span>A new item has been added to your Shopping cart.</span>
        </p>
        <div className="options_btns">
          <Link
            to={'/cart'}
            className="link"
            onClick={() => setAskToCart(false)}
          >
            <button className="cart_btn">VIEW SHOPPING CART</button>
          </Link>
          <button className="continue_btn" onClick={() => setAskToCart(false)}>
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddedToCart;
