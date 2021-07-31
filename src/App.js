import { useState, useEffect, useRef } from 'react';
import About from 'sections/About';
import Skills from 'sections/Skills';
import Qualification from 'sections/Qualification';
import Accomplishments from 'sections/Accomplishments';
import Portfolio from 'sections/Portfolio';
import Contact from 'sections/Contact';
import Home from 'sections/Home';
import useLanguage from 'hooks/useLanguage';
import { socialLinks } from 'sections/Home/Home';
import './App.scss';

function NavItem(text, icon, href) {
  return (
    <li key={text} className="nav__item">
      <a className="nav__link" href={href}>
        <i className={`${icon} nav__icon`} />
        <span>{text}</span>
      </a>
    </li>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const scrollUpRef = useRef(null);
  const [lang] = useLanguage();

  const navItems = [
    {
      name: lang.nav.home,
      icon: 'uil uil-estate',
      href: '#home',
    },
    {
      name: lang.nav.about,
      icon: 'uil uil-user',
      href: '#about',
    },
    {
      name: lang.nav.skills,
      icon: 'uil uil-file-alt',
      href: '#skills',
    },
    {
      name: lang.nav.accomplishments,
      icon: 'uil uil-trophy',
      href: '#accomplishments',
    },
    {
      name: lang.nav.portfolio,
      icon: 'uil uil-scenery',
      href: '#portfolio',
    },
    {
      name: lang.nav.contact,
      icon: 'uil uil-message',
      href: '#contact',
    },
  ];

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  function scrollHeader() {
    const nav = headerRef.current;
    if (this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
  }

  function scrollUp() {
    const scrollUp = scrollUpRef.current;
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    window.addEventListener('scroll', scrollUp);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
      window.removeEventListener('scroll', scrollUp);
    };
  }, []);

  return (
    <>
      <header ref={headerRef} className="header" id="header">
        <nav className="nav container">
          <a href="#home" className="nav__logo">
            Szymon
          </a>
          <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
            <ul className="nav__list grid">
              {navItems.map(({ name, icon, href }) => NavItem(name, icon, href))}
            </ul>
          </div>
          <div className="nav__btns">
            <i className="uil uil-moon change-theme" id="theme-button"></i>
            {!isMenuOpen ? (
              <i
                className="uil uil-apps nav__toggle"
                id="theme-button"
                onClick={handleToggleMenu}
              ></i>
            ) : (
              <i className="uil uil-times nav__close" onClick={handleToggleMenu}></i>
            )}
          </div>
        </nav>
      </header>

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Accomplishments />
        <Portfolio />
        <Contact />
      </main>

      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">Szymon</h1>
              <span className="footer__subtitle">Frontend Developer</span>
            </div>

            <ul className="footer__links">
              <li>
                <a href="#skills" className="footer__link">
                  {lang.nav.skills}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="footer__link">
                  {lang.nav.portfolio}
                </a>
              </li>
              <li>
                <a href="#contact" className="footer__link">
                  {lang.nav.contact}
                </a>
              </li>
            </ul>

            <div className="footer__socials">
              {socialLinks.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer__social"
                >
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>
          <p className="footer__copy">{lang.footer.copy}, Layout: Bedimcode</p>
        </div>
      </footer>

      <a href="#home" className="scrollup" ref={scrollUpRef}>
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
    </>
  );
}

export default App;
