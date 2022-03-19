import { BsHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './ProductArticle.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductArticle = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="link">
      <article className="product_article" key={product?.id}>
        {product?.image ? (
          <LazyLoadImage className="product_img" src={product?.image} />
        ) : (
          <figure className="blur">
            <img src={''} alt="" className="product_img" />
          </figure>
        )}
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
