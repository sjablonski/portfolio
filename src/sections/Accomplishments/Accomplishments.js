import Section from 'templates/Section';
import useLanguage from 'hooks/useLanguage';
import Card from 'components/Card';
import './Accomplishments.scss';

function Accomplishments() {
  const [lang] = useLanguage();

  const accomplishments = [
    {
      title: lang.accomplishments.hackathonIdea2018.title,
      description: lang.accomplishments.hackathonIdea2018.description,
      date: lang.accomplishments.hackathonIdea2018.date,
      icon: 'uil uil-trophy',
    },
    {
      title: lang.accomplishments.courseReact.title,
      description: lang.accomplishments.courseReact.description,
      date: lang.accomplishments.courseReact.date,
      icon: 'uil uil-react',
    },
    {
      title: lang.accomplishments.courseReactRedux.title,
      description: lang.accomplishments.courseReactRedux.description,
      date: lang.accomplishments.courseReactRedux.date,
      icon: 'uil uil-react',
    },
  ];

  return (
    <Section
      id="accomplishments"
      title={lang.accomplishments.title}
      subtitle={lang.accomplishments.subtitle}
    >
      <div className="accomplishments__container container grid">
        {accomplishments.map(({ title, description, date, icon }) => (
          <Card key={title} icon={icon} title={title} description={description} date={date} />
        ))}
      </div>
    </Section>
  );
}

export default Accomplishments;
