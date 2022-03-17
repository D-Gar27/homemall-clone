import './Services.scss';
import deliver from '../../images/deliver.png';
import payment from '../../images/payment.png';
import return_payment from '../../images/return.png';
import survey from '../../images/survey.png';

const Serivces = () => {
  return (
    <section className="services container">
      <div className="service">
        <img src={deliver} alt="" />
        <div className="text">
          <h3>Free Delivery</h3>
          <p>On all orders over 100,000 ks</p>
        </div>
      </div>
      <div className="service">
        <img src={return_payment} alt="" />
        <div className="text">
          <h3>3 days returns</h3>
          <p>Money back Guarantee</p>
        </div>
      </div>
      <div className="service">
        <img src={payment} alt="" />
        <div className="text">
          <h3>Easy Payment</h3>
          <p>100% protected by online payment</p>
        </div>
      </div>
      <div className="service">
        <img src={survey} alt="" />
        <div className="text">
          <h3>Answer Survey</h3>
          <p>Get Discount</p>
        </div>
      </div>
    </section>
  );
};

export default Serivces;
