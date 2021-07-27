function Section({ id, title, subtitle, children }) {
  return (
    <section className="section" id={id}>
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>

      {children}
    </section>
  );
}

export default Section;
