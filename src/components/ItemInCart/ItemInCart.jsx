import { useState } from 'react';
import { VscChevronUp, VscChevronDown } from 'react-icons/vsc';
import './ItemInCart.scss';
import { BsHeart, BsTrash } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addAmount, reduceAmount, removeFromCart } from '../../redux/cartSlice';

const ItemInCart = ({ item }) => {
  const [quantity, setQuantity] = useState(item.amount);
  const controlQuantity = (type) => {
    if (type === 'increase') {
      dispath(addAmount({ item }));
      setQuantity(quantity + 1);
    }
    if (type === 'decrease' && quantity !== 1) {
      dispath(reduceAmount({ item }));
      setQuantity(quantity - 1);
    }
  };
  const dispath = useDispatch();

  const removeHandler = () => {
    dispath(
      removeFromCart({
        id: item?.id,
        amount: item?.quantity,
        price: item?.price.max,
      })
    );
  };

  return (
    <article className="item_in_cart">
      <img src={item.img} alt="" />

      <div className="item_info">
        <h3>{item.name}</h3>
        <p>{item.price} MMK</p>
        <p>24 x 32 cm</p>
        <div className="square"></div>
      </div>
      <div className="quantity">
        <div className="quantity_input">
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <div className="control_btns">
            <button className="add" onClick={() => controlQuantity('increase')}>
              <VscChevronUp className="chevron" />
            </button>
            <button onClick={() => controlQuantity('decrease')}>
              <VscChevronDown className="chevron" />
            </button>
          </div>
        </div>
        <p className="items_price">{quantity * item.price} MMK</p>
      </div>
      <div className="action_btns">
        <button>
          <BsTrash className="icon trash" onClick={removeHandler} />
        </button>
        <button>
          <BsHeart className="icon" />
        </button>
      </div>
    </article>
  );
};

export default ItemInCart;
