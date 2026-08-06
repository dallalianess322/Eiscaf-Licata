export default function Impression() {
  return (
    <section className="impression">
      <div className="wrap impression-grid">
        <div className="impression-text reveal">
          <p className="eyebrow">Frisch gescoopt</p>
          <h2>So schmeckt der Sommer.</h2>
          <p>Jede Kugel wird von Hand geformt und direkt am Tresen für dich aufgetürmt – so schmeckt Wolfsburgs Sommer, egal ob du klassisch oder saisonal magst.</p>
        </div>
        <div className="impression-photo reveal">
          <div className="photo-clip">
            <img src="/images/eis-becher.jpg" alt="Eine frisch gescoopte Kugel Eis auf einer Waffel bei Eiscafé Licata" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
