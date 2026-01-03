import React from 'react';
import { useEffect } from 'react';
import { Menu, X, Calendar, ArrowRight } from 'lucide-react';
import CalendarPopup from './CalendarPopup';
import Footer from './Footer';

interface DatenschutzProps {
  onBack: () => void;
  onShowImpressum?: () => void;
  onShowAGB?: () => void;
}

const Datenschutz: React.FC<DatenschutzProps> = ({ onBack, onShowImpressum, onShowAGB }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className="min-h-screen bg-slate-900">
      {/* Header with navigation */}
      <header className="bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - clickable to go back */}
            <button onClick={onBack} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img 
                src="/Kein Hintergrund.png" 
                alt="SSA Hit Logo" 
                className="h-14 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
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

            {/* CTA Button */}
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

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
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
          Datenschutzerklärung
        </h1>
        
        <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700">
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-gray-300">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-xl font-semibold text-white mb-3">Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Datenerfassung auf dieser Website</h3>
                <h4 className="text-lg font-semibold text-white mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                <p>
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                  Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Wie erfassen wir Ihre Daten?</h4>
                <p>
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                  Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                <p className="mt-2">
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website 
                  durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, 
                  Betriebssystem oder Uhrzeit des Seitenaufrufs).
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Wofür nutzen wir Ihre Daten?</h4>
                <p>
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu 
                  gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                <p>
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und 
                  Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein 
                  Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Hosting</h2>
                <p>
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                <h3 className="text-xl font-semibold text-white mb-3 mt-4">Externes Hosting</h3>
                <p>
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser 
                  Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                <h3 className="text-xl font-semibold text-white mb-3">Datenschutz</h3>
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                  Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den 
                  gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Hinweis zur verantwortlichen Stelle</h3>
                <p>
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="mt-2 space-y-1">
                  <p>Sahit Luma</p>
                   <p>Software Service Agentur Hit</p>
                  <p>Wasserkuppenstraße 42</p>
                  <p>36043, Fulda</p>
                  <p>Telefon: +49 157 88720205</p>
                  <p>E-Mail: info@ssahit.de</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Speicherdauer</h3>
                <p>
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt 
                  wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die 
                  Datenverarbeitung entfällt.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Datenerfassung auf dieser Website</h2>
                <h3 className="text-xl font-semibold text-white mb-3">Kontaktformular</h3>
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
                  dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
                  Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Empfänger von personenbezogenen Daten</h2>
                <p>
                  <p>
  Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei
  ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich.
</p>

<p className="mt-2">
  Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer
  Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten
  an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe
  haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
  Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen
  Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über
  gemeinsame Verarbeitung geschlossen.
</p>

<h3 className="mt-6 font-semibold">
  Einsatz von Auftragsverarbeitern (n8n / technische Infrastruktur)
</h3>

<p className="mt-2">
  Zur technischen Umsetzung von Automatisierungs- und Integrationsprozessen (z. B. Betrieb der
  Automatisierungsplattform n8n) setzen wir externe Dienstleister ein, die personenbezogene Daten
  ausschließlich in unserem Auftrag und auf Grundlage dokumentierter Weisungen verarbeiten.
</p>

<p className="mt-2">
  Hierbei handelt es sich insbesondere um folgende Kategorien von Dienstleistern:
</p>

<p className="mt-2 font-medium">
  Hosting- und Infrastruktur-Dienstleister
</p>

<p className="mt-2">
  Unser eingesetzter Hosting-Dienstleister ist:
</p>

<p className="mt-2">
  <strong>Hostinger International Ltd.</strong><br />
  61 Lordou Vironos Street,<br />
  6023 Larnaca,<br />
  Zypern
</p>

<p className="mt-2">
  bzw.
</p>

<p className="mt-2">
  <strong>Hostinger UK Limited</strong><br />
  Nwms Center, 31 Southampton Row,<br />
  Office 3.11, 3rd Floor,<br />
  London, WC1B 5HJ,<br />
  Vereinigtes Königreich
</p>

<p className="mt-2">
  Die Verarbeitung personenbezogener Daten erfolgt im Rahmen einer Auftragsverarbeitung gemäß Art. 28
  DSGVO. Mit dem Dienstleister besteht ein entsprechender Vertrag zur Auftragsverarbeitung (Data
  Processing Addendum).
</p>

<p className="mt-2">
  Die Verarbeitung erfolgt auf Servern innerhalb der Europäischen Union.
</p>

<p className="mt-2">
  Im Rahmen der eingesetzten Automatisierungs- und Integrationsprozesse erfolgt keine dauerhafte
  Speicherung personenbezogener Daten. Protokoll- und Ausführungsdaten (Execution Logs) werden nicht
  langfristig gespeichert, sondern sind deaktiviert oder zeitlich begrenzt, soweit sie aus technischen Gründen
  kurzfristig erforderlich sind.
</p>

<p className="mt-2">
  Eine Analyse, Auswertung oder Nutzung der verarbeiteten personenbezogenen Daten zu eigenen Zwecken
  findet nicht statt. Die Verarbeitung erfolgt ausschließlich zur technischen Umsetzung der jeweils
  beauftragten Leistungen.
</p>

<p className="mt-2">
  Für alle im Rahmen der Automatisierungsprozesse verarbeiteten personenbezogenen Daten sind
  automatische Löschfristen definiert und aktiv. Die Löschung erfolgt nach Wegfall des Verarbeitungszwecks
  oder nach Ablauf der festgelegten Fristen. Eine darüberhinausgehende Speicherung findet nicht statt.
</p>

<p className="mt-2">
  Weitere Informationen zur Datenverarbeitung durch Hostinger finden Sie unter:
</p>

<p className="mt-1">
  <a
    href="https://www.hostinger.com/legal/privacy-policy"
    target="_blank"
    rel="noopener noreferrer"
  >
    https://www.hostinger.com/legal/privacy-policy
  </a>
</p>

<p className="mt-1">
  <a
    href="https://www.hostinger.com/legal/data-processing-agreement"
    target="_blank"
    rel="noopener noreferrer"
  >
    https://www.hostinger.com/legal/data-processing-agreement
  </a>
</p>

                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Widerruf Ihrer Einwilligung zur Datenverarbeitung</h2>
                <p>
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine 
                  bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten 
                  Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h2>
                <div className="bg-slate-700 p-4 rounded-lg mb-4">
                  <p className="text-sm uppercase font-semibold text-yellow-400 mb-2">Wichtiger Hinweis:</p>
                  <p className="text-sm break-words">
                    WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO 
                    ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN 
                    SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN 
                    WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES 
                    PROFILING.
                  </p>
                </div>
                <p className="break-words">
                  WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, 
                  SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE 
                  BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG 
                  EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN 
                  VERBINDUNG STEHT.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. Beschwerderecht bei der zuständigen Aufsichtsbehörde</h2>
                <p>
                  Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer 
                  Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes 
                  oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger 
                  verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">9. Recht auf Datenübertragbarkeit</h2>
                <p>
                  Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags 
                  automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format 
                  aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen 
                  verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">10. Auskunft, Berichtigung und Löschung</h2>
                <p>
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche 
                  Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den 
                  Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie 
                  zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">11. Recht auf Einschränkung der Verarbeitung</h2>
                <p className="mb-4">
                  Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. 
                  Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in 
                  folgenden Fällen:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>
                    Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir 
                    in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die 
                    Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                  </li>
                  <li>
                    Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie 
                    statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
                  </li>
                  <li>
                    Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, 
                    Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der 
                    Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                  </li>
                  <li>
                    Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen 
                    Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen 
                    überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten 
                    zu verlangen.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">12. SSL- bzw. TLS-Verschlüsselung</h2>
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum 
                  Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-
                  Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von 
                  „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
                <p className="mt-2">
                  Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht 
                  von Dritten mitgelesen werden.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">13. Cookies</h2>
                <p className="mb-4">
                  Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf 
                  Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung 
                  (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
                </p>
                <p className="mb-4">
                  Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte 
                  Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige 
                  von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken 
                  verwendet werden.
                </p>
                <p>
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und 
                  Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen 
                  sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">14. Kontaktaufnahme</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">Kontaktformular</h3>
                <p className="mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage 
                  und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre 
                  Einwilligung weiter.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">Anfrage per E-Mail, Telefon oder Telefax</h3>
                <p>
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus 
                  hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens 
                  bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">15. Externe Dienste</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">Kommunikation via WhatsApp</h3>
                <p className="mb-2">
                  Wir bieten die Möglichkeit, über WhatsApp mit uns zu kommunizieren. WhatsApp ist ein Dienst der Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
                </p>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Verarbeitete Daten:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                    <li>Telefonnummer</li>
                    <li>Name</li>
                    <li>Chatverlauf</li>
                    <li>Übermittelte Medien (z. B. Bilder, Dokumente)</li>
                  </ul>
                </div>
                <p className="mb-4">
                  Die Nutzung von WhatsApp erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. 
                  Weitere Informationen finden Sie in der Datenschutzerklärung von WhatsApp: 
                  <a href="https://www.whatsapp.com/legal/privacy-policy-eea" className="text-blue-400 hover:text-blue-300 ml-1">
                    https://www.whatsapp.com-
                    /legal/privacy-policy-eea
                  </a>
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">Terminbuchung über Calendly</h3>
                <p className="mb-2">
                  Für die Terminbuchung nutzen wir Calendly, einen Dienst der Calendly LLC, 271 17th St NW, Atlanta, GA 30363, USA.
                </p>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Verarbeitete Daten:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                    <li>Name</li>
                    <li>E-Mail-Adresse</li>
                    <li>Datum und Uhrzeit des Termins</li>
                  </ul>
                </div>
                <p className="mb-4">
                  Die Nutzung von Calendly erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. 
                  Mehr Informationen finden Sie hier: 
                  <a href="https://calendly.com/privacy" className="text-blue-400 hover:text-blue-300 ml-1">
                    https://calendly.com/privacy
                  </a>
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">Videokonferenzen über Zoom</h3>
                <p className="mb-2">
                  Für Online-Meetings verwenden wir Zoom, ein Produkt der Zoom Video Communications, Inc., 55 Almaden Blvd, Suite 600, San Jose, CA 95113, USA.
                </p>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Verarbeitete Daten:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                    <li>Name</li>
                    <li>E-Mail-Adresse</li>
                    <li>Gesprächsinhalte</li>
                    <li>Video- und Audiodaten</li>
                  </ul>
                </div>
                <p>
                  Die Nutzung von Zoom erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) oder aufgrund berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO). 
                  Weitere Informationen finden Sie hier: 
                  <a href="https://explore.zoom.us/de/privacy/" className="text-blue-400 hover:text-blue-300 ml-1">
                    https://explore.zoom.us/de/privacy/
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">16. Änderungen dieser Datenschutzerklärung</h2>
                <p>
                  Diese Datenschutzerklärung kann aktualisiert werden, um rechtliche oder technische Änderungen zu berücksichtigen. 
                  Die jeweils aktuelle Version ist auf unserer Website abrufbar.
                </p>
                <p className="mt-4">
                  Quelle: 
                  <a href="https://www.datenschutzerklaerung.de" className="text-blue-400 hover:text-blue-300 ml-1 break-all">
                    https://www.datenschutzerklaerung.de
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer
        onShowImpressum={onShowImpressum}
        onShowDatenschutz={() => {}}
        onShowAGB={onShowAGB}
      />
    </div>
    
    <CalendarPopup 
      isOpen={isCalendarOpen} 
      onClose={() => setIsCalendarOpen(false)} 
    />
    </>
  );
};

export default Datenschutz;