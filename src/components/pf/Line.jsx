// One masked line of a heading: the inner span slides up out of the overflow mask.
export default function Line({ children }) {
  return (
    <span className="ln">
      <span className="in">{children}</span>
    </span>
  );
}
