import Section from 'templates/Section';
import useLanguage from 'hooks/useLanguage';
import './Contact.scss';

function Contact() {
  const [lang] = useLanguage();

  const contacts = [
    {
      name: lang.contact.linkedIn,
      value: 'szymon-jablonski-it',
      icon: 'uil uil-linkedin-alt',
    },
    {
      name: lang.contact.email,
      value: 'sjablonski.it@gmail.com',
      icon: 'uil uil-envelope',
    },
  ];

  return (
    <Section id="contact" title={lang.contact.title} subtitle={lang.contact.subtitle}>
      <div className="contact__container container grid">
        <div>
          {contacts.map(({ name, value, icon }) => (
            <div key={name} className="contact__information">
              <i className={`${icon} contact__icon`} />
              <div>
                <h3 className="contact__title">{name}</h3>
                <span className="contact__subtitle">{value}</span>
              </div>
            </div>
          ))}
        </div>
        <div>
          <a href="mailto:sjablonski.it@gmail.com" className="button button--flex">
            {lang.contact.mailButton}
            <i className="uil uil-message button__icon"></i>
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
