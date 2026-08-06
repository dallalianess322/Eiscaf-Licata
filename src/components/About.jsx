export default function About() {
  return (
    <section className="about" id="ueberuns">
      <div className="wrap">
        <div className="about-art reveal">
          <div className="photo-clip">
            <img src="/images/inhaber.jpg" alt="Der Inhaber von Eiscafé Licata mit einer Kugel Eis vor dem Café in Wolfsburg" loading="lazy" />
          </div>
        </div>
        <div className="about-copy reveal">
          <p className="eyebrow">Unsere Geschichte</p>
          <h2>Familiäres Handwerk, italienische Rezepte</h2>
          <p>Bei Eiscafé Licata triffst du auf italienische Eismacher-Tradition, die in Wolfsburg zuhause ist. Unser Team rührt jede Sorte von Hand an, achtet auf ausgewogene Süße und wechselt die Auswahl mit den Jahreszeiten – damit es bei uns immer etwas Neues zu entdecken gibt.</p>
          <p>Neben unserem Eis erwarten dich Milchshakes, frisch gepresste Säfte, Kaffeespezialitäten und Waffeln – serviert in gemütlicher, liebevoll eingerichteter Atmosphäre.</p>
          <div className="about-facts">
            <div className="fact"><strong>100%</strong><span>von Hand gerührt</span></div>
            <div className="fact"><strong>Saisonal</strong><span>wechselnde Sorten</span></div>
            <div className="fact"><strong>Familiär</strong><span>geführtes Eiscafé</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
