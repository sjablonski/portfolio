import './Card.scss';

function Card({ title, description, date, icon }) {
  return (
    <div className="card__content">
      <i className={`${icon} card__icon`} />
      <h3 className="card__title">{title}</h3>
      <div className="card__calendar calendar">
        <i className="uil uil-calendar-alt"></i>
        <span className="calendar__date">{date}</span>
      </div>
      <span className="card__subtitle">{description}</span>
    </div>
  );
}

export default Card;
