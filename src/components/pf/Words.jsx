// Splits a sentence into words so scroll can light them up one by one.
export default function Words({ text }) {
  return text.split(' ').map((word, i) => (
    <span key={i}>
      <span className="w">{word}</span>{' '}
    </span>
  ));
}
