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
              <img
                src="/Kein Hintergrund.png"
                alt="SSA Hit Logo"
                className="h-14 w-auto"
              />
            </button>

            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={onBack}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={onBack}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
              >
                Referenzen
              </button>
              <button
                onClick={onBack}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
              >
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

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
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
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Allgemeine Geschäftsbedingungen
        </h1>

        <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700">
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-gray-300">
              <div>
                
                <p>
               
Allgemeine Geschäftsbedingungen

§ 1 – Geltungsbereich und allgemeine Bestimmungen

1.1 Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Leistungen, die der Auftragnehmer gegenüber dem Auftraggeber erbringt.
1.2 Mit der Unterschrift des Angebots bestätigt der Auftraggeber die Gültigkeit dieser AGB und erkennt sie vollständig an.
1.3 Die auf dem Angebot ausgewiesene Vergütungssumme ist verbindlich und wird gemäß den dort genannten Zahlungsbedingungen fällig.
1.4 Abweichende Vereinbarungen bedürfen der Schriftform.

§ 2 – Leistungsgegenstand

2.1 Der Auftragnehmer erbringt die im Angebot definierten Leistungen.
2.2 Der Leistungsumfang kann u. a. folgende Leistungen umfassen:
– technische Einrichtung und Konfiguration
– Entwicklung oder Anpassung digitaler Systeme
– Automatisierungen und Integrationen
– Übergabe aller vereinbarten Zugangsdaten
2.3 Leistungen außerhalb des im Angebot vereinbarten Umfangs gelten als Zusatzleistungen und werden nur nach Absprache separat vergütet.

2.4 Alle anfallenden Telefonkosten, API-Kosten oder sonstige nutzungsabhängige Gebühren werden nicht vom Auftragnehmer übernommen und sind vom Auftraggeber selbst zu tragen.

2.5 Für einen Zeitraum von 12 Monaten ab Vertragsbeginn wird die monatliche Hosting-Gebühr nicht erhöht. Bei einem Ausfall des Hostings von insgesamt mehr als drei Tagen innerhalb eines Kalendermonats werden die Hosting-Gebühren für diesen Monat vollständig erstattet.

2.6 Sollte der eingesetzte KI-Telefonieanbieter innerhalb von 12 Monaten nach der Einrichtung seinen Betrieb einstellen, nicht mehr verfügbar sein oder aus sonstigen Gründen den Dienst dauerhaft nicht mehr erbringen können, erfolgt der Umzug auf einen vergleichbaren alternativen Anbieter für den Auftraggeber kostenfrei.

§ 3 – Leistungsausführung, Zusatzleistungen & Übergabe

3.1 Die Leistungen werden nach anerkannten Standards und mit der erforderlichen Sorgfalt durchgeführt.
3.2 Nach der Abnahme sind sämtliche weiteren Anpassungen, Änderungen, Wartungen oder Supportleistungen nicht im Preis enthalten und werden bei Bedarf separat nach Aufwand berechnet.
3.3 Zusatzarbeiten dürfen vom Auftragnehmer erst nach ausdrücklicher Bestätigung durch den Auftraggeber erbracht werden.
3.4 Nach Übergabe und Abnahme ist der Auftrag abgeschlossen.

§ 4 – Mitwirkungspflichten des Auftraggebers

4.1 Der Auftraggeber stellt alle für das Projekt erforderlichen Informationen, Daten, Zugänge und Mitwirkungsleistungen bereit.
4.2 Verzögerungen aufgrund unzureichender Mitwirkung verschieben Fristen angemessen.
4.3 Der Auftraggeber trägt die Verantwortung für seine eigene technische Infrastruktur.

§ 5 – Abnahme

5.1 Nach Fertigstellung erfolgt eine gemeinsame Funktionsprüfung.
5.2 Mit der Abnahme bestätigt der Auftraggeber, dass die Leistung ordnungsgemäß erbracht wurde.
5.3 Mit der Abnahme gilt der Auftrag als vollständig erfüllt und abgeschlossen.
5.4 Nach Abnahme gewünschte Änderungen gelten als zusätzliche Leistungen.

§ 6 - Nutzungsrechte
Der Auftraggeber erhält ein einfaches, nicht ausschließliches, nicht übertragbares und nicht unterlizenzierbares Nutzungsrecht an der bereitgestellten KI-Telefonassistenz sowie den dazugehörigen Funktionen.

6.1
Die technische Systemarchitektur, einschließlich aller Automationen, Workflows (z. B. n8n), API-Verbindungen, KI-Konfigurationen, Skripte und Backend-Strukturen, verbleibt vollständig im Eigentum des Auftragnehmers. Ein Anspruch auf Herausgabe, Einsicht oder Kopie dieser Bestandteile besteht nicht.

6.2
Das Nutzungsrecht gilt ausschließlich im Rahmen der vertraglich vereinbarten Nutzung und nur für die Dauer des Vertragsverhältnisses. Mit Beendigung oder Kündigung des Vertrags endet das Nutzungsrecht automatisch. Zugänge und Berechtigungen können daraufhin deaktiviert werden.

6.3
Jegliche Weitergabe, Vervielfältigung, technische Nachbildung oder eigenständige Nutzung des Systems außerhalb der im Vertrag vereinbarten Umgebung ist untersagt. Verstöße führen zur sofortigen Beendigung des Nutzungsrechts.

6.4
Der Auftragnehmer ist berechtigt, interne Systembestandteile jederzeit zu aktualisieren, anzupassen oder technisch weiterzuentwickeln, sofern dadurch die vereinbarte Nutzung nicht wesentlich beeinträchtigt wird.

§ 7 – Haftung

7.1 Der Auftragnehmer haftet ausschließlich für Schäden, die durch grobe Fahrlässigkeit oder Vorsatz verursacht wurden.
7.2 Eine Haftung für mittelbare Schäden, Folgeschäden, entgangenen Gewinn oder Systemausfälle ist ausgeschlossen.
7.3 Für externe Systeme, Drittanbieter oder Fremdsoftware wird keine Haftung übernommen.

§ 8 – Erfolgsausschluss

Der Auftragnehmer schuldet ausschließlich die technische Bereitstellung, Einrichtung, Konfiguration und Funktionsfähigkeit der im Angebot beschriebenen Systeme.
Es werden keinerlei Garantien oder Zusicherungen hinsichtlich bestimmter wirtschaftlicher Erfolge oder sonstiger Leistungskennzahlen übernommen.

§ 9– Referenznutzung

Der Auftragnehmer ist berechtigt, den Namen und das Logo des Auftraggebers als Referenz zu verwenden, sofern dieser dem nicht schriftlich widerspricht.

§ 10 – Schlussbestimmungen

10.1 Änderungen oder Ergänzungen dieser AGB bedürfen der Schriftform.

10.2 Sollten einzelne Bestimmungen unwirksam sein, bleibt die Gültigkeit der übrigen Regelungen unberührt.
10.3 Es gilt das Recht der Bundesrepublik Deutschland.
10.4 Gerichtsstand ist der Sitz des Auftragnehmers, sofern der Auftraggeber Kaufmann ist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer
        onShowImpressum={onShowImpressum}
        onShowDatenschutz={onShowDatenschutz}
      />
    </div>

    <CalendarPopup
      isOpen={isCalendarOpen}
      onClose={() => setIsCalendarOpen(false)}
    />
    </>
  );
};

export default AGB;
