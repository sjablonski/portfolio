import Section from 'templates/Section';
import useLanguage from 'hooks/useLanguage';
import { Tab, Tabs } from 'components/Tabs';
import './Qualification.scss';

function Qualification() {
  const [lang] = useLanguage();

  return (
    <Section
      id="qualification"
      title={lang.qualification.title}
      subtitle={lang.qualification.subtitle}
    >
      <div className="qualification__container container">
        <Tabs>
          <Tab index="1" label={lang.qualification.education} icon="uil uil-graduation-cap">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {lang.qualification.educations.bscDegree.title}
                </h3>
                <span className="qualification__subtitle">
                  {lang.qualification.educations.bscDegree.subtitle}
                </span>
                <span className="qualification__subtitle">
                  {lang.qualification.educations.bscDegree.description}
                </span>
                <div className="qualification__calendar calendar">
                  <i className="uil uil-calendar-alt"></i>
                  <span className="calendar__date">
                    {lang.qualification.educations.bscDegree.date}
                  </span>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  {lang.qualification.educations.mscDegree.title}
                </h3>
                <span className="qualification__subtitle">
                  {lang.qualification.educations.mscDegree.subtitle}
                </span>
                <span className="qualification__subtitle">
                  {lang.qualification.educations.mscDegree.description}
                </span>
                <div className="qualification__calendar calendar">
                  <i className="uil uil-calendar-alt"></i>
                  <span className="calendar__date">
                    {lang.qualification.educations.mscDegree.date}
                  </span>
                </div>
              </div>
            </div>
          </Tab>
          <Tab index="2" label={lang.qualification.work} icon="uil uil-briefcase-alt">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {lang.qualification.works.smartFactor.title}
                </h3>
                <span className="qualification__subtitle">
                  {lang.qualification.works.smartFactor.subtitle}
                </span>
                <span className="qualification__subtitle">
                  {lang.qualification.works.smartFactor.description}
                </span>
                <div className="qualification__calendar calendar">
                  <i className="uil uil-calendar-alt"></i>
                  <span className="calendar__date">
                    {lang.qualification.works.smartFactor.date}
                  </span>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">{lang.qualification.works.onwelo.title}</h3>
                <span className="qualification__subtitle">
                  {lang.qualification.works.onwelo.subtitle}
                </span>
                <span className="qualification__subtitle">
                  {lang.qualification.works.onwelo.description}
                </span>
                <div className="qualification__calendar calendar">
                  <i className="uil uil-calendar-alt"></i>
                  <span className="calendar__date">{lang.qualification.works.onwelo.date}</span>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </Section>
  );
}

export default Qualification;
