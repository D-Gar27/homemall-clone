import { BsHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './ProductArticle.scss';

const ProductArticle = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="link">
      <article className="product_article" key={product?.id}>
        <img src={product?.image} alt="" className="product_img" />
        <div className="info">
          <p className="product_name">{product?.name}</p>
          <p className="product_price">{product?.price?.max} MMK</p>
        </div>
        <button className="heart_icon">
          <BsHeart />
        </button>
      </article>
    </Link>
  );
};

export default ProductArticle;
