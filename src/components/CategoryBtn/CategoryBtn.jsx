import './CategoryBtn.scss';
import { BsChevronRight } from 'react-icons/bs';
import { useState } from 'react';

const CategoryBtn = ({ cate }) => {
  const [clicked, setClicked] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <li className={clicked ? 'category clicked' : 'category'}>
      <div className="cate" onClick={() => setClicked(!clicked)}>
        {checked && <span>All</span>}
        {cate} <BsChevronRight className={clicked ? 'right upward' : 'right'} />
      </div>
      <button className="check" onClick={() => setChecked(!checked)}>
        {/* <input type="checkbox" name={cate} id={cate} /> */}
        All
      </button>
    </li>
  );
};

export default CategoryBtn;
