const REVIEWS = [
  {
    quote: 'Freundliches Team, große Auswahl und eine Portion, die genau richtig ist – hier kommen wir gerne mit der ganzen Familie wieder vorbei.',
    author: '— Familie aus Wolfsburg',
  },
  {
    quote: 'Handgemachtes Eis in gemütlicher Atmosphäre, fair im Preis und immer mit einem Lächeln serviert.',
    author: '— Stammgast',
  },
  {
    quote: 'Von Pistazie bis zur Sorte der Woche – hier findet wirklich jeder seine Lieblingskugel.',
    author: '— Nachbarschaftsgast',
  },
];

export default function Reviews() {
  return (
    <section className="reviews" id="bewertungen">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">Was Gäste sagen</p>
          <h2>Süße Worte von unseren Gästen</h2>
        </div>
        <div className="review-grid">
          {REVIEWS.map((review) => (
            <div className="review-card" key={review.author}>
              <div className="review-stars">★★★★★</div>
              <p className="quote">„{review.quote}"</p>
              <div className="review-author">{review.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
