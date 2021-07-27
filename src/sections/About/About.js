import Section from 'templates/Section';
import aboutImage from 'assets/img/about.png';
import useLanguage from 'hooks/useLanguage';
import cv from 'assets/pdf/CV_Szymon_Jabłoński.pdf';
import './About.scss';

function About() {
  const [lang] = useLanguage();

  return (
    <Section id="about" title={lang.about.title} subtitle={lang.about.subtitle}>
      <div className="about__container container grid">
        <img src={aboutImage} alt="About" className="about__img" />
        <div className="about__data">
          <p className="about__description">{lang.about.description}</p>
          <div className="about__buttons">
            <a download href={cv} className="button button--flex">
              Download CV <i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
