import React from 'react';
import { useEffect } from 'react';
import { Menu, X, Calendar, ArrowRight } from 'lucide-react';
import CalendarPopup from './CalendarPopup';
import Footer from './Footer';

interface AGBProps {
  onBack: () => void;
  onShowImpressum?: () => void;
  onShowDatenschutz?: () => void;
}

const AGB: React.FC<AGBProps> = ({ onBack, onShowImpressum, onShowDatenschutz }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-slate-900">
        <header className="bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <button onClick={onBack} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <img src="/Kein Hintergrund.png" alt="SSA Hit Logo" className="h-14 w-auto" />
              </button>

              <nav className="hidden md:flex items-center space-x-8">
                <button onClick={onBack} className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
                  Services
                </button>
                <button onClick={onBack} className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
                  Referenzen
                </button>
                <button onClick={onBack} className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
                  Über uns
                </button>
              </nav>

              <div className="hidden md:flex items-center space-x-4">
                <button
                  onClick={() => setIsCalendarOpen(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Termin vereinbaren</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-slate-700">
                <div className="flex flex-col space-y-4">
                  <button
                    onClick={onBack}
                    className="text-gray-300 hover:text-blue-400 transition-colors font-medium w-full text-left"
                  >
                    Services
                  </button>
                  <button
                    onClick={onBack}
                    className="text-gray-300 hover:text-blue-400 transition-colors font-medium w-full text-left"
                  >
                    Referenzen
                  </button>
                  <button
                    onClick={onBack}
                    className="text-gray-300 hover:text-blue-400 transition-colors font-medium w-full text-left"
                  >
                    Über uns
                  </button>
                  <button
                    onClick={() => setIsCalendarOpen(true)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold flex items-center justify-center space-x-2 w-full"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Termin vereinbaren</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Allgemeine Geschäftsbedingungen</h1>

          <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 text-gray-300">

                {/* Besser formatierter Text */}
                <div className="space-y-6">
                  <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-white">§ 1 – Geltungsbereich und allgemeine Bestimmungen</h2>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Leistungen, die der Auftragnehmer gegenüber dem Auftraggeber erbringt.</li>
                      <li>Mit der Unterschrift des Angebots bestätigt der Auftraggeber die Gültigkeit dieser AGB und erkennt sie vollständig an.</li>
                      <li>Die auf dem Angebot ausgewiesene Vergütungssumme ist verbindlich und wird gemäß den dort genannten Zahlungsbedingungen fällig.</li>
                      <li>Abweichende Vereinbarungen bedürfen der Schriftform.</li>
                    </ol>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-white">§ 2 – Leistungsgegenstand</h2>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>Der Auftragnehmer erbringt die im Angebot definierten Leistungen.</li>
                      <li>
                        Der Leistungsumfang kann u. a. folgende Leistungen umfassen:
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>technische Einrichtung und Konfiguration</li>
                          <li>Entwicklung oder Anpassung digitaler Systeme</li>
                          <li>Automatisierungen und Integrationen</li>
                          <li>Übergabe aller vereinbarten Zugangsdaten</li>
                        </ul>
                      </li>
                      <li>Leistungen außerhalb des im Angebot vereinbarten Umfangs gelten als Zusatzleistungen und werden nur nach Absprache separat vergütet.</li>
                      <li>Alle anfallenden Telefonkosten, API-Kosten oder sonstige nutzungsabhängige Gebühren werden nicht vom Auftragnehmer übernommen und sind vom Auftraggeber selbst zu tragen.</li>
                      <li>Für einen Zeitraum von 12 Monaten ab Vertragsbeginn wird die monatliche Hosting-Gebühr nicht erhöht. Bei einem Ausfall des Hostings von insgesamt mehr als drei Tagen innerhalb eines Kalendermonats werden die Hosting-Gebühren für diesen Monat vollständig erstattet.</li>
                      <li>Sollte der eingesetzte KI-Telefonieanbieter innerhalb von 12 Monaten nach der Einrichtung seinen Betrieb einstellen, nicht mehr verfügbar sein oder aus sonstigen Gründen den Dienst dauerhaft nicht mehr erbringen können, erfolgt der Umzug auf einen vergleichbaren alternativen Anbieter für den Auftraggeber kostenfrei.</li>
                    </ol>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-white">§ 3 – Leistungsausführung, Zusatzleistungen &amp; Übergabe</h2>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>Die Leistungen werden nach anerkannten Standards und mit der erforderlichen Sorgfalt durchgeführt.</li>
                      <li>Nach der Abnahme sind sämtliche weiteren Anpassungen, Änderungen, Wartungen oder Supportleistungen nicht im Preis enthalten und werden bei Bedarf separat nach Aufwand berechnet.</li>
                      <li>Zusatzarbeiten dürfen vom Auftragnehmer erst nach ausdrücklicher Bestätigung durch den Auftraggeber erbracht werden.</li>
                      <li>Nach Übergabe und Abnahme ist der Auftrag abgeschlossen.</li>
                    </ol>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-white">§ 4 – Mitwirkungspflichten des Auftraggebers</h2>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>Der Auftraggeber stellt alle für das Projekt erforderlichen Informationen, Daten, Zugänge und Mitwirkungsleistungen bereit.</li>
                      <li>Verzögerungen aufgrund unzureichender Mitwirkung verschieben Fristen angemessen.</li>
                      <li>Der Auftraggeber trägt die Verantwortung für seine eigene technische Infrastruktur.</li>
                    </ol>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-white">§ 5 – Abnahme</h2>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>Nach Fertigstellung erfolgt eine gemeinsame Funktionsprüfung.</li>
                      <li>Mit der Abnahme bestätigt der Auftraggeber, dass die Leistung ordnungsgemäß erbracht wurde.</li>
                      <li>Mit der Abnahme gilt der Auftrag als vollständig erfüllt und abgeschlossen.</li>
                      <li>Nach Abnahme gewünschte Änderungen gelten als zusätzliche Leistungen.</li>
                    </ol>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-white">§ 6 – Nutzungsrechte</h2>
                    <p>
                      Der Auftraggeber erhält ein einfaches, nicht ausschließliches, nicht übertragbares und nicht unterlizenzierbares Nutzungsrecht an der
                      bereitgestellten KI-Telefonassistenz sowie den dazugehörigen Funktionen.
                    </p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>
                        Die technische Systemarchitektur, einschließlich aller Automationen, Workflows (z. B. n8n), API-Verbindungen, KI-Konfigurationen,
                        Skripte und Backend-Strukturen, verbleibt vollständig im Eigentum des Auftragnehmers. Ein Anspruch auf Herausgabe, Einsicht oder Kopie
                        dieser Bestandteile besteht nicht.
                      </li>
                      <li>
                        Das Nutzungsrecht gilt ausschließlich im Rahmen der vertraglich vereinbarten Nutzung und nur für die Dauer des Vertragsverhältnisses.
                        Mit Beendigung oder Kündigung des Vertrags endet das Nutzungsrecht automatisch. Zugänge und Berechtigungen können daraufhin deaktiviert
                        werden.
                      </li>
                      <li>
                        Jegliche Weitergabe, Vervielfältigung, technische Nachbildung oder eigenständige Nutzung des Systems außerhalb der im Vertrag
                        vereinbarten Umgebung ist untersagt. Verstöße führen zur sofortigen Beendigung des Nutzungsrechts.
                      </li>
                      <li>
                        Der Auftragnehmer ist berechtigt, interne Systembestandteile jederzeit zu aktualisieren, anzupassen oder technisch weiterzuentwickeln,
                        sofern dadurch die vereinbarte Nutzung nicht wesentlich beeinträchtigt wird.
                      </li>
                    </ol>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-white">§ 7 – Haftung</h2>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>Der Auftragnehmer haftet ausschließlich für Schäden, die durch grobe Fahrlässigkeit oder Vorsatz verursacht wurden.</li>
                      <li>Eine Haftung für mittelbare Schäden, Folgeschäden, entgangenen Gewinn oder Systemausfälle ist ausgeschlossen.</li>
                      <li>Für externe Systeme, Drittanbieter oder Fremdsoftware wird keine Haftung übernommen.</li>
                    </ol>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-white">§ 8 – Erfolgsausschluss</h2>
                    <p>
                      Der Auftragnehmer schuldet ausschließlich die technische Bereitstellung, Einrichtung, Konfiguration und Funktionsfähigkeit der im Angebot
                      beschriebenen Systeme. Es werden keinerlei Garantien oder Zusicherungen hinsichtlich bestimmter wirtschaftlicher Erfolge oder sonstiger
                      Leistungskennzahlen übernommen.
                    </p>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-white">§ 9 – Referenznutzung</h2>
                    <p>
                      Der Auftragnehmer ist berechtigt, den Namen und das Logo des Auftraggebers als Referenz zu verwenden, sofern dieser dem nicht schriftlich
                      widerspricht.
                    </p>
                  </section>

                  <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-white">§ 10 – Schlussbestimmungen</h2>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>Änderungen oder Ergänzungen dieser AGB bedürfen der Schriftform.</li>
                      <li>Sollten einzelne Bestimmungen unwirksam sein, bleibt die Gültigkeit der übrigen Regelungen unberührt.</li>
                      <li>Es gilt das Recht der Bundesrepublik Deutschland.</li>
                      <li>Gerichtsstand ist der Sitz des Auftragnehmers, sofern der Auftraggeber Kaufmann ist.</li>
                    </ol>
                  </section>
                </div>
                {/* Ende formatierter Text */}

              </div>
            </div>
          </div>
        </div>

        <Footer onShowImpressum={onShowImpressum} onShowDatenschutz={onShowDatenschutz} />
      </div>

      <CalendarPopup isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
    </>
  );
};

export default AGB;
