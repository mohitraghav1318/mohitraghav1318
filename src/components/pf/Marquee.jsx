// Decorative looping tag strip. The list is doubled so a -50% shift loops seamlessly.
export default function Marquee({ tags, style }) {
  return (
    <div className="mq" aria-hidden="true" style={style}>
      <div className="mq-track">
        {[...tags, ...tags].map((tag, i) => (
          <div className="mq-i" key={i}>
            <span>{tag}</span>
            <i />
          </div>
        ))}
      </div>
    </div>
  );
}
