import Section from 'templates/Section';
import useLanguage from 'hooks/useLanguage';
import './Skills.scss';
import Accordion from 'components/Accordion';

function Skills() {
  const [lang] = useLanguage();

  const skills = [
    {
      title: lang.skills.frontend.title,
      subtitle: lang.skills.frontend.subtitle,
      icon: 'uil uil-brackets-curly',
      skillsList: [
        { name: 'HTML', icon: 'uil uil-html5', color: '#e34c26' },
        { name: 'CSS', icon: 'uil uil-css3-simple', color: '#264de4' },
        { name: 'Sass', icon: 'uil uil-css3-simple', color: '#cc6699' },
        { name: 'JavaScript', icon: 'uil uil-java-script', color: '#F0DB4F' },
        { name: 'TypeScript', icon: 'uil uil-java-script', color: '#007acc' },
        { name: 'React', icon: 'uil uil-react', color: '#61DBFB' },
        { name: 'React-Native', icon: 'uil uil-react', color: '#61DBFB' },
        { name: 'Redux', icon: 'uil uil-react', color: '#764abc' },
        { name: 'Angular', icon: 'uil uil-java-script', color: '#B52E31' },
        { name: 'Styled Component', icon: 'uil uil-java-script', color: '#db7093' },
        { name: 'Bootstrap', icon: 'uil uil-css3-simple', color: '#B52E31' },
        { name: 'Antd', icon: 'uil uil-css3-simple', color: '#1890ff' },
        { name: 'Material UI', icon: 'uil uil-css3-simple', color: '#48adf5' },
        { name: 'Eslint', icon: '', color: '#4c29bf' },
      ],
    },
    {
      title: lang.skills.backend.title,
      subtitle: lang.skills.backend.subtitle,
      icon: 'uil uil-brackets-curly',
      skillsList: [
        { name: 'Node.js', icon: 'uil uil-java-script', color: '#3c873a' },
        { name: 'Java', icon: 'uil uil-coffee', color: '#f89820' },
        { name: 'NoSQL', icon: 'uil uil-database', color: '#D9033C' },
        { name: 'Apache Kafka', icon: '', color: '' },
      ],
    },
    {
      title: lang.skills.tools.title,
      subtitle: lang.skills.tools.subtitle,
      icon: 'uil uil-brackets-curly',
      skillsList: [
        { name: 'macOS', icon: 'uil uil-apple', color: '#a2aaad' },
        { name: 'Windows', icon: 'uil uil-windows', color: '#00a4ef' },
        { name: 'Git', icon: 'uil uil-code-branch', color: '#f34f29' },
        { name: 'Docker', icon: 'uil uil-docker', color: '#0db7ed' },
        { name: 'IntelliJ IDEA', icon: '', color: '#0077f6' },
        { name: 'VSC', icon: 'uil uil-visual-studio', color: '#0078d7' },
        { name: 'Adobe XD', icon: 'uil uil-adobe', color: '#490036' },
        { name: 'Photoshop', icon: 'uil uil-adobe', color: '#001d35' },
      ],
    },
  ];

  return (
    <Section id="skills" title={lang.skills.title} subtitle={lang.skills.subtitle}>
      <div className="skills__container container grid">
        {skills.map(({ title, subtitle, icon, skillsList }) => (
          <Accordion key={title} title={title} subtitle={subtitle} icon={icon}>
            <ul className="skills__list">
              {skillsList.map((skill) => (
                <li key={skill.name} className="skills__item" style={{ borderColor: skill.color }}>
                  <i className={`${skill.icon} skills__icon`}></i>
                  {skill.name}
                </li>
              ))}
            </ul>
          </Accordion>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
