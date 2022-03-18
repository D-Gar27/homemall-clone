import './CategoryBtn.scss';
import { BsChevronRight } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const CategoryBtn = ({ cate, id, setCategories, categories }) => {
  const [clicked, setClicked] = useState(false);
  const [checked, setChecked] = useState(false);
  let [searchParams] = useSearchParams();
  const category = searchParams.get('category');
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
          let tempCate = [];
          tempCate = categories;
          if (!tempCate.includes(id)) {
            setCategories([...categories, id]);
          } else {
            tempCate = categories.filter((cate) => cate !== id);
            setCategories(tempCate);
          }
          setChecked(!checked);
        }}
      >
        {/* <input type="checkbox" name={cate} id={cate} /> */}
        All
      </button>
    </li>
  );
};

export default CategoryBtn;
