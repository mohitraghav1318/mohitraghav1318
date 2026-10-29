import Line from './Line';

// Shared header for inner pages: kicker, big masked title with a vermilion dot, lede.
export default function PageHead({ kicker, title, lede }) {
  return (
    <section className="phead">
      <div className="shell">
        <div className="kick lbl intro-k">
          <i />
          <span>{kicker}</span>
        </div>
        <h1 className="intro-h pgh">
          <Line>
            {title}
            <span className="dot">.</span>
          </Line>
        </h1>
        <p className="lede">
          {lede.before}
          <b>{lede.strong}</b>
        </p>
      </div>
    </section>
  );
}
