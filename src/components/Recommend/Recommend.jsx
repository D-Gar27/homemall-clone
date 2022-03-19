import './Recommend.scss';
import ProductArticle from '../ProductArticle/ProductArticle';

const Recommend = ({ related: products }) => {
  return (
    <section className="recommend container">
      <h2>YOU MIGHT ALSO LIKE</h2>
      <div className="recommended_items">
        {products &&
          products.map((product) => (
            <ProductArticle product={product} key={product.id} />
          ))}
      </div>
    </section>
  );
};

export default Recommend;
