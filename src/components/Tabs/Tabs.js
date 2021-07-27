import { useState } from 'react';
import './Tabs.scss';

export function Tab({ children }) {
  return <>{children}</>;
}

export function Tabs({ defaultIndex = '1', children }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleChangeTab = (newIndex) => {
    setActiveIndex(newIndex);
  };

  return (
    <>
      <div className="tabs">
        {children.map(({ props: { index, label, icon } }) => (
          <div
            key={index}
            className={`tabs__button${index === activeIndex ? '--active' : ''} button--flex`}
            onClick={() => handleChangeTab(index)}
          >
            {icon && <i className={`${icon} tabs__icon`} />}
            {label}
          </div>
        ))}
      </div>
      <div className="tabs__sections">
        {children.map(({ props: { index, children } }) => (
          <div key={index} className={`tabs__content${index === activeIndex ? '--active' : ''}`}>
            {children}
          </div>
        ))}
      </div>
    </>
  );
}
