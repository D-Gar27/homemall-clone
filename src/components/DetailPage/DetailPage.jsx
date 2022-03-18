import './DetailPage.scss';
import { BsHeart } from 'react-icons/bs';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { VscChevronUp, VscChevronDown } from 'react-icons/vsc';
import Recommend from '../Recommend/Recommend';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [currentImg, setCurrentImg] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`http://localhost:3001/products?id=${id}`);
        const data = await res.json();
        setProduct(data[0]);
        setCurrentImg(data[0]?.image);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [id]);
  if (!product) return;
  const controlQuantity = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    }
    if (type === 'decrease' && quantity !== 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <main className="products_page">
      <h2 className="products_title">{product?.category}</h2>
      <section className="detail_page_container container">
        <figure className="product_images">
          <img src={currentImg} alt="" className="current_img" />
          <div className="thumbs">
            {product?.images &&
              product.images.map((img) => (
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
            <button className="add_to_bag">
              ADD TO BAG <RiShoppingCart2Line className="cart_icon" />
            </button>
            <button className="heart_btn">
              <BsHeart className="heart_icon" />
            </button>
          </div>
          <h3>Warranty</h3>
        </div>
      </section>
      <Recommend />
    </main>
  );
};

export default DetailPage;
