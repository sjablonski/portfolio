import { useEffect, useRef } from 'react';
import useLanguage from 'hooks/useLanguage';
import Typed from 'typed.js';
import homeImage from 'assets/img/home.png';
import './Home.scss';

function Blob() {
  return (
    <svg className="home__blob" viewBox="0 0 200 200">
      <mask id="mask0" mask-type="alpha">
        <path
          d="M45.7,-79.1C58.4,-71.8,67.4,-58,74.8,-43.7C82.1,-29.4,87.8,-14.7,87.9,0.1C88.1,14.9,82.7,29.8,75.5,44.2C68.2,58.6,59.1,72.6,46.2,81.8C33.3,91,16.7,95.4,0.9,93.8C-14.8,92.2,-29.6,84.5,-42.7,75.5C-55.8,66.4,-67.1,55.9,-75.5,43C-84,30.2,-89.4,15.1,-89.2,0.1C-89,-14.9,-83.1,-29.7,-75.4,-43.7C-67.7,-57.7,-58.1,-70.9,-45.2,-78.1C-32.3,-85.3,-16.2,-86.5,0.2,-86.7C16.5,-87,33,-86.4,45.7,-79.1Z"
          transform="translate(100 100)"
        />
      </mask>
      <g mask="url(#mask0)">
        <path
          d="M45.7,-79.1C58.4,-71.8,67.4,-58,74.8,-43.7C82.1,-29.4,87.8,-14.7,87.9,0.1C88.1,14.9,82.7,29.8,75.5,44.2C68.2,58.6,59.1,72.6,46.2,81.8C33.3,91,16.7,95.4,0.9,93.8C-14.8,92.2,-29.6,84.5,-42.7,75.5C-55.8,66.4,-67.1,55.9,-75.5,43C-84,30.2,-89.4,15.1,-89.2,0.1C-89,-14.9,-83.1,-29.7,-75.4,-43.7C-67.7,-57.7,-58.1,-70.9,-45.2,-78.1C-32.3,-85.3,-16.2,-86.5,0.2,-86.7C16.5,-87,33,-86.4,45.7,-79.1Z"
          transform="translate(100 100)"
        />
        <image className="home__blob-img" x="0" y="0" href={homeImage} />
      </g>
    </svg>
  );
}

export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/szymon-jablonski-it',
    icon: 'uil uil-linkedin-alt',
  },
  {
    name: 'Github',
    href: 'https://github.com/sjablonski',
    icon: 'uil uil-github-alt',
  },
];

function Home() {
  const titleRef = useRef(null);
  const [lang] = useLanguage();

  useEffect(() => {
    const typed = new Typed(titleRef.current, {
      strings: [`${lang.home.title}`],
      typeSpeed: 100,
      showCursor: false,
    });
    return () => {
      typed.destroy();
    };
  }, [lang.home.title]);

  const citationIndex = Math.floor(Math.random() * lang.home.description.length);

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            {socialLinks.map(({ name, href, icon }) => (
              <a
                key={name}
                className="home__social-icon"
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <i className={icon} />
              </a>
            ))}
          </div>
          <div className="home__img">
            <Blob />
          </div>
          <div className="home__data">
            <h1 className="home__title" ref={titleRef}>
              {''}
            </h1>
            <h3 className="home__subtitle">{lang.home.subtitle}</h3>
            <p className="home__description">{lang.home.description[citationIndex]}</p>
            <a href="#contact" className="button button--flex">
              {lang.home.contactButton} <i className="uil uil-message button__icon"></i>
            </a>
            <div className="home__scroll">
              <a href="#about" className="home__scroll-button button--flex">
                <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                <span className="home__scroll-name">{lang.home.scrollButton}</span>
                <i className="uil uil-arrow-down home__scroll-arrow"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
