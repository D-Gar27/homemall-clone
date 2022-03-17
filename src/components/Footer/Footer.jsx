import './Footer.scss';
import logo from '../../images/shlogowhite.png';
import { FiPhoneCall } from 'react-icons/fi';
import cards from '../../images/cards.png';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="container footer_container">
        <article className="sh_content">
          <img src={logo} alt="sweety home logo" className="logo" />
          <p className="slogan">
            We strive to agin the trust and satisfaction of our customer on our
            brand name “Sweety Home” by providing them the best quality and the
            best services.
          </p>
          <div className="contact">
            <FiPhoneCall className="phone_icon" />
            <div className="phone_number">
              <a href="tel:+9543108763">+95 4310 8763</a>
              <small>Round-the-clock</small>
            </div>
          </div>
          <div className="payment">
            <h4>WE ACCEPTED</h4>
            <img src={cards} alt="cards" />
          </div>
        </article>
        <ul className="footer_menu">
          <h3>TERMS & POLICIES</h3>
          <li>Return Policy</li>
          <li>Delivery Policy</li>
          <li>Warranty</li>
          <li>After-Sale Service</li>
        </ul>
        <ul className="footer_menu">
          <h3>OUR PRODUCTS</h3>
          <li>Bestsellers</li>
          <li>New In</li>
          <li>Chairs</li>
          <li>Sofas</li>
          <li>Mattress</li>
        </ul>
        <ul className="footer_menu">
          <h3>OTHERS</h3>
          <li>News & Events</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </section>
      <section className="bottom">
        <div className="container">
          <p>© SweetyHome 2020. All rights reserved.</p>
          <p>
            Made with love by <a href="https://venuslab.co/">VenusLab</a>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
