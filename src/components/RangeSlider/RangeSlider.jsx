import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import './RangeSlider.scss';

const RangeSlider = () => {
  const [sliderOne, setSliderOne] = useState(0);
  const [sliderTwo, setSliderTwo] = useState(1000000);
  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(100);
  let minGap = 100;
  let sliderMaxValue = sliderTwo;
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const brand = searchParams.get('brand');
  const name = searchParams.get('name');
  useEffect(() => {
    if (parseInt(sliderTwo) - parseInt(sliderOne) <= minGap) {
      setSliderOne(parseInt(sliderTwo) - minGap);
      setPercent1((sliderOne / sliderMaxValue) * 1000000);
    }
    if (parseInt(sliderTwo) - parseInt(sliderOne) <= minGap) {
      setSliderTwo(parseInt(sliderOne) + minGap);
      setPercent2((sliderTwo / sliderMaxValue) * 1000000);
    }
  }, [sliderOne, sliderTwo, minGap, percent1, percent2, sliderMaxValue]);

  return (
    <div className="range_wrapper">
      <div className="values">
        <span className="value">{sliderOne} MMK</span>
        <span className="value">{sliderTwo} MMK</span>
      </div>
      <div className="container">
        <div
          className="slider-track"
          style={{
            background: `linear-gradient(to right, #05254d ${percent1}% , #05254d ${percent1}% , #05254d ${percent2}%, #05254d ${percent2}%)`,
          }}
        ></div>
        <input
          type="range"
          min="0"
          max="1000000"
          id="slider-1"
          value={sliderOne}
          onChange={(e) => {
            navigate(
              `/?price=${`${sliderOne}~${sliderTwo}`}${
                brand ? `&brand=${brand}` : ''
              }${category ? `&category=${category}` : ''}${
                name ? `&name_like=${name}` : ''
              }`
            );
            setSliderOne(e.target.value);
          }}
        />
        <input
          type="range"
          min="0"
          max="1000000"
          value={sliderTwo}
          id="slider-2"
          onChange={(e) => {
            navigate(
              `/?price=${`${sliderOne}~${sliderTwo}`}${
                brand ? `&brand=${brand}` : ''
              }${category ? `&category=${category}` : ''}${
                name ? `&name_like=${name}` : ''
              }`
            );
            setSliderTwo(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
