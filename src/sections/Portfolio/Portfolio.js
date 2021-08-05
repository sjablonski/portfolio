import Section from 'templates/Section';
import useLanguage from 'hooks/useLanguage';
import polishElectionStatisticsImg from 'assets/img/portfolio/polish-election-statistics.png';
import onBankImg from 'assets/img/portfolio/onbank.png';
import tspImg from 'assets/img/portfolio/tsp.png';
import favNoteReactImg from 'assets/img/portfolio/favnote-react.png';
import favNoteReactReduxImg from 'assets/img/portfolio/favnote-react-redux.png';
import './Portfolio.scss';
import Slider from 'components/Slider';
import { useRef } from 'react';

function Portfolio() {
  const [lang] = useLanguage();
  const modalRef = useRef(null);
  const modalImgRef = useRef(null);

  const portfolio = [
    {
      title: 'Polish Election Statistics',
      description: `Aplikacja w Angular stworzona w trakcie studiów na zaliczenie. Przedstawia statystyki z wyborów prezydenckich w formach takie jak: rozkład miar, graficzna reprezentacja (mapy z podziałem na województwa, wykresy, twarze Chernoffa).`,
      imgSrc: polishElectionStatisticsImg,
      demoHref: 'https://polish-election-statistics.netlify.app/',
      githubHref: 'https://github.com/sjablonski/polish-election-statistics',
    },
    {
      title: 'Telecommunication Service Provider',
      description: `Współautor aplikacji stworzonej w trakcie studiów na zaliczenie. Aplikacja powstała w technologii React i służy do zarządzania systemem dostawcy usług telekomunikacyjnych.`,
      imgSrc: tspImg,
      githubHref: 'https://github.com/sjablonski/tsp-frontend',
    },
    {
      title: 'OnBank',
      description: `Współautor aplikacji. Aplikacja powstała w technologii React i służy do zarządzani kontem w banku.`,
      imgSrc: onBankImg,
      githubHref: 'https://github.com/Worms308/OnBank/tree/master/frontend/onbank',
    },
    {
      title: 'FavNote - React Redux',
      description: `Projekt na podstawie kursu React w praktyce. Aplikacja stworzona w React oraz Reduxa. Umożliwia przeglądanie, dodawanie oraz usuwać ulubionych kont twitter, artykuły oraz notatek.`,
      imgSrc: favNoteReactReduxImg,
      demoHref: 'https://favnote-react-redux-sjablonski.netlify.app/',
      githubHref: 'https://github.com/sjablonski/FavNote-React-Redux',
    },
    {
      title: 'FavNote - React',
      description: `Projekt na podstawie kursu React od podstaw. Prosta aplikacja w React pozwalająca przeglądać, dodawać oraz usuwać ulubione konta twitter, artykuły oraz notatki.`,
      imgSrc: favNoteReactImg,
      demoHref: 'https://favnote-react-sjablonski.netlify.app/',
      githubHref: 'https://github.com/sjablonski/FavNote-React',
    },
  ];

  const handleImageModal = (src) => {
    modalRef.current.style.display = 'block';
    modalImgRef.current.src = src;
  };

  const handleClose = () => {
    modalRef.current.style.display = 'none';
  };

  return (
    <Section id="portfolio" title={lang.portfolio.title} subtitle={lang.portfolio.subtitle}>
      <div className="portfolio__container container">
        <Slider>
          {portfolio.map(({ title, description, imgSrc, demoHref, githubHref }) => (
            <div key={title} className="portfolio__content grid--inline">
              <img
                src={imgSrc}
                alt={title}
                className="portfolio__img"
                onClick={() => handleImageModal(imgSrc)}
              />
              <div className="portfolio__data">
                <h3 className="portfolio__title">{title}</h3>
                <p className="portfolio__description">{description}</p>
                <div className="portfolio__buttons">
                  {demoHref && (
                    <a
                      href={demoHref}
                      target="_blank"
                      rel="noreferrer"
                      className="button button--flex button--small portfolio__button"
                    >
                      Demo <i className="uil uil-arrow-right button__icon"></i>
                    </a>
                  )}
                  <a
                    href={githubHref}
                    target="_blank"
                    rel="noreferrer"
                    className="button button--flex button--small portfolio__button"
                  >
                    GitHub <i className="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div ref={modalRef} className="modal">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <img ref={modalImgRef} className="modal-content" alt="" />
      </div>
    </Section>
  );
}

export default Portfolio;
