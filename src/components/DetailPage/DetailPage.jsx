import './DetailPage.scss';
import { BsHeart } from 'react-icons/bs';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { VscChevronUp, VscChevronDown } from 'react-icons/vsc';
import Recommend from '../Recommend/Recommend';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice.js';
import AddedToCart from '../AddedToCart/AddedToCart';

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [related, setRelated] = useState([]);
  const [currentImg, setCurrentImg] = useState({ i: 0, img: null });
  const [moveX, setMoveX] = useState(0);
  const [askToCart, setAskToCart] = useState(false);
  const [lastIndex, setLastIndex] = useState(0);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `https://home-mall.herokuapp.com/api/products?id=${id}`
        );
        const data = await res.json();
        setProduct(data[0]);
        setCurrentImg({ i: 0, img: data[0]?.image });
        const cate = await fetch(
          `https://home-mall.herokuapp.com/api/products?category=${data[0].category}`
        );
        const cateData = await cate.json();
        setRelated(cateData.sort(() => Math.random() * 0.5).slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [id]);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (product) {
      const data = {
        name: product?.name,
        price: product?.price?.max,
        img: product?.image,
        amount: quantity,
        id: product?.id,
      };
      setAskToCart(true);
      dispatch(addToCart({ data }));
    }
  };

  useEffect(() => {
    if (currentImg.i > lastIndex && currentImg.i > 1) {
      setMoveX(currentImg.i * -7.25 * 12.375);
      setLastIndex(currentImg.i);
    }
    if (currentImg.i < lastIndex && currentImg.i !== 0) {
      setMoveX(moveX + 7.25 * 12.375);
      setLastIndex(currentImg.i);
    }
  }, [currentImg.i, product.images, lastIndex, moveX]);

  const controlQuantity = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    }
    if (type === 'decrease' && quantity !== 0) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) return;
  return (
    <main className="page">
      <h2 className="title">{product?.category}</h2>
      <section className="detail_page_container container">
        <figure className="product_images">
          <img src={currentImg?.img} alt="" className="current_img" />
          <div className="thumbs_container">
            <div
              className="thumbs"
              style={{ transform: `translateX(${moveX}px)` }}
            >
              {product?.images &&
                product.images.map((img, i) => (
                  <img
                    src={img?.thumb}
                    key={img.id}
                    alt=""
                    className="thumb"
                    onClick={() => setCurrentImg({ i, img: img?.thumb })}
                  />
                ))}
            </div>
          </div>
          <div className="scroll_caro">
            {product?.images &&
              product.images.map((img, i) => (
                <img src={img?.thumb} key={img.id} alt="" className="thumb" />
              ))}
          </div>
        </figure>

        <div className="product_details">
          <div className="product_name">
            <h2>{product.name}</h2>
            <small>Item Code: {product?.code}</small>
          </div>
          <h3 className="price">{product?.price?.max} MMK</h3>
          <h3>Description</h3>
          <h3>Dimensions</h3>
          <h3>Colour</h3>
          <h3>Materials</h3>
          <div className="quantity">
            <h3>Quantity</h3>
            <div className="quantity_input">
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <div className="control_btns">
                <button
                  className="add"
                  onClick={() => controlQuantity('increase')}
                >
                  <VscChevronUp />
                </button>
                <button onClick={() => controlQuantity('decrease')}>
                  <VscChevronDown />
                </button>
              </div>
            </div>
          </div>
          <div className="btns">
            <button className="add_to_bag" onClick={handleAdd}>
              ADD TO BAG <RiShoppingCart2Line className="cart_icon" />
            </button>
            <button className="heart_btn">
              <BsHeart className="heart_icon" />
            </button>
          </div>
          <h3>Warranty</h3>
        </div>
      </section>
      <Recommend related={related} />
      {askToCart && <AddedToCart setAskToCart={setAskToCart} />}
    </main>
  );
};

export default DetailPage;
