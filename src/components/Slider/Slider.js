import { useRef } from 'react';
import './Slider.scss';

function Slider({ children }) {
  const sliderRef = useRef(null);

  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (ev) => {
    isDown = true;
    startX = ev.pageX;
    scrollLeft = sliderRef.current.scrollLeft;
  };
  const handleMouseLeave = (ev) => {
    isDown = false;
  };
  const handleMouseUp = (ev) => {
    isDown = false;
  };
  const handleMouseMove = (ev) => {
    if (!isDown) return;
    ev.preventDefault();
    sliderRef.current.scrollLeft = scrollLeft - (ev.pageX - startX) * 2;
  };

  const handleLeft = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - sliderRef.current.offsetWidth;
  };

  const handleRight = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + sliderRef.current.offsetWidth;
  };

  return (
    <div>
      <div
        className="slider"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {children}
      </div>
      <div className="slider__arrows">
        <i
          className="uil uil-angle-left slider__arrow slider__arrow--left"
          onClick={handleLeft}
        ></i>
        <i
          className="uil uil-angle-right slider__arrow slider__arrow--right"
          onClick={handleRight}
        ></i>
      </div>
    </div>
  );
}

export default Slider;
