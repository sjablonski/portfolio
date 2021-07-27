import { useState } from 'react';
import './Accordion.scss';

function Accordion({ title, subtitle, icon, children }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={`accordion__wrapper ${isOpen ? 'accordion__open' : 'accordion__close'}`}>
      <div className="accordion__header" onClick={handleToggle}>
        <i className={`${icon} accordion__icon`} />
        <div>
          <h1 className="accordion__titles">{title}</h1>
          <span className="accordion__subtitle">{subtitle}</span>
        </div>
        <i className="uil uil-angle-down accordion__arrow"></i>
      </div>
      <div className="accordion__content">{children}</div>
    </div>
  );
}

export default Accordion;
