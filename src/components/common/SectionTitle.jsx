function SectionTitle({ eyebrow, title, subtitle, align = 'left' }) {
  const classes = ['section-title', `section-title--${align}`].join(' ');

  return (
    <header className={classes}>
      {eyebrow ? <p className="section-title__eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title__heading">{title}</h2>
      {subtitle ? <p className="section-title__subtitle">{subtitle}</p> : null}
    </header>
  );
}

export default SectionTitle;
