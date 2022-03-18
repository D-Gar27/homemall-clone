import './Recommend.scss';
import ProductArticle from '../ProductArticle/ProductArticle';

const products = [
  {
    id: 512,
    name: '32-TB 6(5Pcs)Fitted',
    image: 'https://api.homemall.com.mm//storage/prdouct/6226521ba3dd4.jpg',
    brand: '',
    wishlist: null,
    price: { min: '33500', max: '33500' },
    category: 'Bed Room',
  },
  {
    id: 1280,
    name: '21-SF-641HLP 2Seat',
    image: 'https://api.homemall.com.mm//storage/prdouct/622f19443c777.jpg',
    brand: '',
    wishlist: null,
    price: { min: '686000', max: '686000' },
    category: 'Living Room',
  },
  {
    id: 1,
    name: '81-Back Pillow(CS-4343A/4343B/4343C/4343D/4343E)',
    image:
      'https://api.homemall.com.mm//storage/prdouctgallery/622651b5db441.jpg',
    brand: '',
    wishlist: null,
    price: { min: '5000', max: '5000' },
    category: 'Hotel',
  },
  {
    id: 769,
    name: '21-NN-MSS-8801',
    image: 'https://api.homemall.com.mm//storage/prdouct/62265226f0664.jpg',
    brand: '',
    wishlist: null,
    price: { min: '136000', max: '136000' },
    category: 'Office Furniture',
  },
];

const Recommend = () => {
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
