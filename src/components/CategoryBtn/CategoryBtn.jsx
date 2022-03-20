import './CategoryBtn.scss';
import { BsChevronRight, BsSquare, BsCheckLg } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router';

const CategoryBtn = ({ cate, id }) => {
  const [clicked, setClicked] = useState(false);
  const [checked, setChecked] = useState(false);
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get('category');
  const brand = searchParams.get('brand');
  const name = searchParams.get('name');
  const price = searchParams.get('price');
  useEffect(() => {
    if (category) return;
    setChecked(false);
    setClicked(false);
  }, [category]);

  return (
    <li className={clicked ? 'category clicked' : 'category'}>
      <div className="cate" onClick={() => setClicked(!clicked)}>
        {checked && <span>All</span>}
        {cate} <BsChevronRight className={clicked ? 'right upward' : 'right'} />
      </div>
      <button
        className="check"
        onClick={() => {
          setChecked(!checked);
          if (checked) {
            navigate(
              `?_page=1${brand ? `&brand=${brand}` : ''}${
                name ? `&name=${name}` : ''
              }${price ? `&price=${price}` : ''}`
            );
          } else {
            navigate(
              `?_page=1${brand ? `&brand=${brand}` : ''}&category=${id}${
                name ? `&name=${name}` : ''
              }${price ? `&price=${price}` : ''}`
            );
          }
        }}
      >
        <div className="checkbox">
          <BsSquare className="square_icon" />
          {checked && <BsCheckLg className="check_icon" />}
        </div>
        All
      </button>
    </li>
  );
};

export default CategoryBtn;
