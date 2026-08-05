export default function Location() {
  return (
    <section className="location" id="standort">
      <div className="wrap">
        <div className="map-frame reveal">
          <iframe
            src="https://www.google.com/maps?q=Wiesenstra%C3%9Fe%201%2C%2038448%20Wolfsburg&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Standort Eiscafé Licata, Wiesenstraße 1, 38448 Wolfsburg"
          />
        </div>
        <div className="hours-card reveal">
          <p className="eyebrow">Besuch uns</p>
          <h3>Öffnungszeiten</h3>
          <table className="hours">
            <tbody>
              <tr><td>Montag</td><td>14:00 – 19:00 Uhr</td></tr>
              <tr><td>Dienstag – Sonntag</td><td>09:30 – 19:30 Uhr</td></tr>
            </tbody>
          </table>
          <div className="address-block">
            <h3>Adresse</h3>
            <p>Eiscafé Licata</p>
            <p>Wiesenstraße 1</p>
            <p>38448 Wolfsburg</p>
          </div>
          <p className="payment-note">Hinweis: Kartenzahlung ist bei uns derzeit erst ab einem Einkaufswert von 10&nbsp;€ möglich.</p>
        </div>
      </div>
    </section>
  );
}
