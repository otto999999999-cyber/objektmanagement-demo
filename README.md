# Objektmanagement – Demo / Testumgebung (mit KI-Assistent)

Eigenständige **Demo des Objektmanagement-Portals** für Präsentationen.
Läuft komplett im Browser – **kein Server, kein Login** (automatisch als Administrator angemeldet).
Alle Inhalte sind **frei erfundene Testdaten** (keine realen Objekte, Personen oder Firmen).

Enthält einen **KI-Assistenten**, der den (Demo-)Bestand zusammenfasst, Aufgaben priorisiert
und Schreiben an Dienstleister/Eigentümer entwirft.

---

## 1. Auf GitHub Pages veröffentlichen (Schritt für Schritt)

1. Bei **github.com** anmelden → oben rechts **+ → New repository**.
   - Name z. B. `objektmanagement-demo`
   - Sichtbarkeit **Public**
   - **Create repository**
2. Im leeren Repo: **Add file → Upload files**.
   - `index.html` und `README.md` hineinziehen → **Commit changes**.
3. **Settings → Pages** (linke Leiste).
   - **Source:** „Deploy from a branch“
   - **Branch:** `main` und Ordner `/ (root)` → **Save**.
4. Nach 1–2 Minuten ist die Seite erreichbar unter:
   **`https://<dein-benutzername>.github.io/objektmanagement-demo/`**
   (Link erscheint oben im Bereich „Pages“.)

Fertig – diese URL kannst du in der Präsentation öffnen.

---

## 2. KI-Assistent aktivieren

Die KI läuft direkt im Browser und benötigt einen **eigenen Anthropic-API-Key**:

1. In der App unten rechts **„KI-Assistent“** öffnen.
2. **Einstellungen** aufklappen → **Anthropic API-Key** eintragen
   (Key erstellen unter **platform.claude.com** → *Settings → API keys*).
   Der Statusbalken oben im Panel wechselt dann von *„Noch nicht aktiviert“* auf **„KI aktiv“**.
3. Optional das **Modell** aus der Liste wählen. Standard: `claude-haiku-4-5-20251001`
   (schnell/günstig). Alternativen: `claude-sonnet-5`, `claude-opus-5`.

Der Key bleibt im Browser gespeichert – **einmal eintragen genügt**, auch nach dem Neuladen.
Über **„Key aus diesem Browser löschen“** lässt er sich jederzeit wieder entfernen.

Beispiel-Funktionen (Schnellaktionen im Panel):
- **Eigentümer-Zusammenfassung** des Portfoliozustands
- **Aufgaben priorisieren** über alle Objekte
- **E-Mail an Dienstleister** zum dringendsten Mangel entwerfen
- **Offene Ablesungen** nach Objekt gruppiert, mit hinterlegtem Zählerstandort
- Freie Fragen zum Objektbestand

> **Wichtig:** Der API-Key wird **ausschließlich im Browser** gespeichert (localStorage) und
> **niemals ins Repository** geschrieben. Trage ihn nicht in den Code/README ein und committe ihn nicht.
> Die Nutzung verursacht Kosten über deinen Anthropic-Account. Für die KI-Antworten ist eine
> Internetverbindung nötig (der Browser ruft `api.anthropic.com` direkt auf).

---

## 3. Zähler & Ablesung

Modul für die jährliche Ablesung der Allgemein- und Unterzähler zur Betriebskostenabrechnung.

**Je Objekt** (Reiter *Zähler & Ablesung*):

- **Zählerstammsatz**: Zählernummer, Medium, Haupt-/Unterzähler, Zählwerkstellen, **Wandlerfaktor**,
  Eichfrist, Messstellenbetreiber, Kennzeichen *fernauslesbar*
- **Standort im Gebäude** strukturiert nach Aufgang → Etage → Raum → Zählerplatz. Das ist die Angabe,
  die das Suchen beendet – GPS ist im Keller ohne Empfang und daher nur optionale Zusatzinformation
  für den Gebäudezugang.
- **Ablesen** mit Status *abgelesen / nicht gefunden / kein Zugang / defekt / ausgebaut*.
  Nicht auffindbare Zähler verschwinden damit nicht mehr, sondern werden zählbar.
- **Plausibilitätsprüfung** direkt bei der Eingabe: Rücklauf, mehr Stellen als das Zählwerk hat,
  sowie auffällig hoher oder niedriger Verbrauch gegenüber der Vorperiode. Fängt genau die
  Zahlendreher ab, die sonst in der Abrechnung landen.
- **Historie** je Zähler mit Verbrauch je Periode (Wandlerfaktor eingerechnet)
- **Eichfrist-Warnung** – Orientierung: elektronische Stromzähler 8 Jahre, Ferraris-Zähler 16,
  Kaltwasserzähler 6 Jahre, Warmwasser- und Wärmezähler 5 Jahre

**Erfassungsbogen** (Reiter *Zähler & Ablesung* → *Erfassungsbogen*) – der Papierweg für die
**Ersterfassung**, den Teil, den keine Software abnimmt:

- Druckbogen je Objekt mit Kopffeldern (Aufnehmer, Datum, Uhrzeit, Schlüssel/Zugang)
- Bereits bekannte Zähler vorgedruckt zum Prüfen und Ablesen, mit Vorjahreswert, Zählwerk,
  Wandlerfaktor, Eichfrist und Ankreuzfeld *gefunden ja/nein*
- Freie Zeilen für neu gefundene Zähler
- Hinweise zur Aufnahme im Fußbereich (Standort, Wandlerfaktor, Zählwerk, Eichmarke, Fotos)

**QR-Etiketten für den Zählerplatz** (Reiter *Zähler & Ablesung* → *QR-Etiketten*):

- Druckbogen mit einem Etikett je Zähler: QR-Code, Bezeichnung, Zählernummer, Objekt, Standort
  und die Kennung im Klartext als Notfallweg zum Abtippen
- Der Code enthält die Adresse der App mit der Zähler-Kennung (`…/#z=<id>`). Handy-Kamera drauf,
  antippen – die App öffnet **direkt die Ablesemaske dieses Zählers**, mit Standort und Vorjahreswert.
  Kein Suchen in einer Liste, keine Verwechslung zwischen mehreren Zählern im selben Schrank.
- Die Codes werden **im Browser erzeugt** (eingebettete QR-Bibliothek, MIT-Lizenz) – kein externer
  Dienst, keine Internetverbindung nötig, keine Daten verlassen den Rechner.
- Anbringen: neben den Zähler, **nicht auf** Zählwerk, Typenschild oder Plombe. Etiketten laminieren
  oder überkleben – Keller sind feucht.

**Objektübergreifend** (Menü → *Zählerablesung*):

- Periodenauswahl und Filter *Offen / Problemfälle / Erledigt / Eichfristen / Alle*
- **CSV-Export** für die Betriebskostenabrechnung, mit Vorperiode, aktuellem Stand und
  berechnetem Verbrauch (Semikolon als Trennzeichen, für Excel vorbereitet)

**Offline-Betrieb** – Zähler stehen im Keller, und dort ist kein Empfang:

- Die App wird beim ersten Aufruf **im Gerät abgelegt** (Service Worker, `sw.js`) und startet danach
  auch ohne Verbindung. Das gilt auch für den Einstieg über einen QR-Code.
- Ablesungen, die ohne Netz erfasst werden, landen in einer **Warteschlange im Gerät** und werden
  **automatisch übertragen**, sobald wieder Verbindung besteht – oder auf Knopfdruck.
- Oben in der Kopfzeile zeigt eine Anzeige *Offline* bzw. *n wartet*; ein Klick darauf öffnet die
  Liste der wartenden Ablesungen mit den Schaltflächen **Jetzt übertragen** und **Verwerfen**.
- Wartende Einträge sind im Objekt und in der Ableseliste mit *wartet auf Übertragung* markiert –
  man sieht also jederzeit, was noch nicht in der Zentrale angekommen ist.
- Die Warteschlange übersteht das Schließen der App und einen Neustart des Geräts.

Über **Menü → Benutzer & Bereiche** lässt sich der Bereich **Zähler** gezielt für einen
Ablesedienstleister freischalten – dann liest dieser direkt in die Plattform ein, statt auf Papier,
und sieht dabei nichts außer den Zählern (Abschnitt 15).

---

## 4. Fristenkalender und gesetzliche Pflichten

**Menü → Fristenkalender.** Bisher lag jede Fälligkeit in ihrer eigenen Liste: Wartung in der
Wartungsübersicht, TÜV beim Aufzug, Eichfristen beim Zähler, Fristen bei Tickets und
Wiedervorlagen in der Meldungs-Überwachung. Der Kalender führt sie in **einer Zeitschiene**
zusammen, nach Monaten gruppiert und mit derselben Einstufung überall: überfällig, bald fällig,
planmäßig.

Enthalten sind: Wartungen und gesetzliche Prüfungen, Aufzugswartung und wiederkehrende Prüfung,
Eichfristen, offene Ablesungen je Objekt mit dem Stichtag der Abrechnungsperiode, Ticketfristen und
Wiedervorlagen aus versandten Schreiben — dazu die **gesetzlichen Stichtage** des Bestands.
Filter nach Objekt, Tabs für *Überfällig / 30 Tage / 90 Tage / Gesetzliche Stichtage / Alles*.

**Gesetzliche Pflichten als Arbeitshilfe** (Knopf *Gesetzliche Pflichten*, oder *Grundlage & Folge*
an einer Frist). Zu jeder Pflicht steht:

- die **Rechtsgrundlage**,
- **wen oder was sie betrifft**,
- die **Folge einer Versäumnis** — also das, was die Frist erst wichtig macht: Kürzungsrecht des
  Mieters, Bußgeldrahmen, Ausschluss der Nachforderung,
- das **Vorgehen** in vier Schritten,
- ein **fertiges Schreiben** an den Dienstleister, das sich per Knopfdruck in die
  Meldungs-Überwachung übernimmt.

Hinterlegt sind unter anderem: Nachrüstung auf fernablesbare Erfassungsgeräte und die monatliche
Verbrauchsinformation (HeizkostenV), CO₂-Kostenaufteilung, Heizungsprüfung nach § 60b GEG,
Legionellenprüfung, wiederkehrende Aufzugsprüfung, Eichfristen, Frist der
Betriebskostenabrechnung nach § 556 Abs. 3 BGB, E-Rechnung, Mietpreisbremse,
Rauchwarnmelder und die Prüfung der ortsfesten elektrischen Anlagen.

**Export**:

- **Kalenderdatei (.ics)** mit allen Fristen als Ganztagstermine, Erinnerung 14 Tage vorher,
  Rechtsgrundlage und Folge im Termintext — einmal in Outlook importiert, stehen die Fristen dort,
  wo ohnehin gearbeitet wird.
- **CSV** mit Restzeit, Kategorie, Objekt, Rechtsgrundlage und Folge.

> Die Rechtsangaben sind eine Arbeitshilfe, Stand September 2026, und keine Rechtsberatung.
> Fristen und Folgen im Einzelfall bitte prüfen lassen.

---

## 5. Fotos und Dokumente an jedem Vorgang

An **Zählern, Anlagen und Prüfpflichten, Aufzügen und Sanierungen** sitzt jetzt ein Knopf
*Fotos & Dokumente*. Dahinter liegt dieselbe Ablage wie bei den Objektdokumenten — die Anhänge
erscheinen also auch unter *Dokumente* in der passenden Kategorie und im Objekt-Tagebuch, sind
aber zusätzlich direkt dem Vorgang zugeordnet.

- **Foto aufnehmen** greift am Handy auf die Kamera zu; Bilder werden vor dem Ablegen verkleinert.
- **Datei wählen** für Prüfberichte, Eichscheine, Angebote, Bescheinigungen.
- Die Anzahl der Anhänge steht am Vorgang und wird in der Objektakte mitgeführt.

Damit hängt das Foto des Zählerschranks am Zähler, der Prüfbericht an der Prüfung und das Angebot
an der Sanierung — statt in einem Ordner „Sonstiges“, in dem später niemand sucht.

---

## 6. Objektakte als PDF

**Objekt → Objektakte.** Ein Dokument je Liegenschaft, das den gesamten Stand zusammenfasst:
Stammdaten, Begehungen mit den offenen Punkten der letzten Begehung, Technik und Wartung mit
Historie, Aufzüge, **Zähler mit Standort, Eichfrist, aktuellem Stand und Verbrauch gegenüber der
Vorperiode**, offene Tickets, Sanierungen und eine **Übersicht der abgelegten Dokumente und Fotos**.
Geeignet für die Eigentümerabstimmung, die Objektübergabe und den Fall, dass jemand kurzfristig
den Bestand erklären muss.

---

## 7. Mängelmeldung für Mieter per QR-Aushang

Aufkleber oder Aushang im Eingangsbereich, Handykamera drauf, fertig – **ohne App, ohne Konto,
ohne Anmeldung**. Der QR-Code führt in ein Meldeformular für genau dieses Objekt.

**Für den Mieter** (Menü → *Tickets* → *QR-Aushang für Mieter* zeigt den Code, oder direkt
`…/#m=<Objekt-Kennung>`):

- Ort im Haus aus einer Liste (Treppenhaus, Aufzug, Keller, Hof, eigene Wohnung …), dazu
  optional die genauere Lage
- Beschreibung, Dringlichkeit und bis zu drei Fotos direkt aus der Kamera
- Name, Wohnung und Kontakt sind freiwillig – der Hinweis sagt aber offen, dass ohne Kontaktdaten
  keine Rückfrage möglich ist
- Am Ende eine Bestätigung mit Vorgangsnummer, nicht nur ein „Danke“
- In dieser Ansicht sind Menü, Suche und KI-Assistent ausgeblendet: der Mieter sieht nur das Formular

**Für die Verwaltung**: Aus der Meldung wird unmittelbar ein **Ticket** mit Objektzuordnung,
Einheit, Priorität, Fotos und dem Vermerk *Eingang über QR-Aushang*. In der Ticketliste ist die
Herkunft als **Mieter-Meldung (QR)** gekennzeichnet – damit bleibt unterscheidbar, was aus dem Haus
kommt und was intern erfasst wurde.

**Der Aushang** (gleicher Knopf) ist ein Druckbogen je Objekt: großer QR-Code, drei Sätze Anleitung,
die Adresse zum Abtippen als Notfallweg und Felder für Notdienst- und Hausmeisternummern, die aus
den Stammdaten des Objekts vorbefüllt werden.

---

## 8. Gewährleistung an Sanierungen

Je Sanierung werden **Abnahmedatum** und **Gewährleistungsfrist** geführt – das Datum, auf das es
im Streitfall ankommt. Beim Abschluss einer Maßnahme wird das Abnahmedatum vorbelegt.

- Die Karte zeigt *Gewährleistung läuft* bzw. *läuft aus* mit Enddatum und Restzeit
- Ablaufende Fristen erscheinen im **Fristenkalender**
- **Der eigentliche Nutzen**: Wird ein Ticket für eine Einheit mit laufender Gewährleistung
  angelegt, warnt die Anwendung noch im Formular – mit Abnahmedatum, Frist und ausführender Firma.
  Auf Knopfdruck entsteht daraus eine **Mängelanzeige unter Gewährleistung** an die Baufirma,
  fristwahrend formuliert und ohne Anerkennung eigener Kosten.

Das verhindert den Fall, der Geld kostet: eine Wohnung wird auf eigene Rechnung nachgebessert,
während die Baufirma noch in der Haftung steht.

---

## 9. CO₂-Kostenaufteilung (CO2KostAufG)

**Menü → CO₂-Kostenaufteilung.** Rechner für das Stufenmodell bei Wohngebäuden:

- Brennstoffmenge (Erdgas, Heizöl) oder die CO₂-Menge direkt aus der Rechnung – bei Fernwärme der
  übliche Weg, dort weist der Versorger die Werte aus
- Wohn-/Nutzfläche und Heizungsart werden aus den **Stammdaten** des Objekts übernommen, wenn dort
  gepflegt
- Ergebnis: spezifischer Ausstoß in kg CO₂ je m² und Jahr, die getroffene **Stufe**, der
  Vermieteranteil in Prozent **und in Euro**, dazu der umlagefähige Mieteranteil
- Für Nichtwohngebäude die hälftige Aufteilung
- Am Ende ein fertiger Textblock mit den **Pflichtangaben für die Heizkostenabrechnung** zum
  Kopieren, plus ein Schreiben, mit dem die Angaben beim Lieferanten angefordert werden

Hintergrund: Nimmt der Vermieter die Aufteilung nicht vor, darf der Mieter den Heizkostenanteil um
3 % kürzen. Stufentabelle, Emissionsfaktoren und CO₂-Preis sind Arbeitshilfe, Stand September 2026,
und vor der Abrechnung gegenzuprüfen.

---

## 10. Eigentümerbericht auf Knopfdruck

Knopf *Eigentümerbericht* auf der Startseite (gesamter Bestand) oder im Objekt. Das PDF enthält:

- **Das Wichtigste in Kürze** – drei Sätze in Klartext, nicht nur Zahlen
- Kennzahlenkacheln: Mängel, offene Tickets, überfällige Fristen, Termine der nächsten 90 Tage,
  laufende Sanierungen, Ablesestand
- **Zustand je Objekt** aus der letzten Begehung mit Datum
- **Offene Punkte nach Dringlichkeit**, mangelhaft vor eingeschränkt
- **Fristen**: überfällig und die nächsten 90 Tage
- **Sanierungen und Kosten** mit Budget, Ist und laufender Gewährleistung
- **Zähler und Ablesung** mit Hinweis auf abgelaufene Eichfristen
- optional bis zu sechs **Aufnahmen aus der letzten Begehung**

Empfänger und Berichtszeitraum lassen sich vorab eintragen – der Bericht ist damit ohne Nacharbeit
versandfertig.

---

## 11. Objekte auf der Karte

**Startseite → Karte** oder Menü → *Karte*. Der Bestand als Karte mit einer Ampel je Haus, gespeist
aus offenen Mängeln und Fristen: rot bei Mangel oder überfälliger Frist, gelb bei Fälligkeit in den
nächsten 30 Tagen, grün wenn nichts offen ist. Die Zahl im Stecknadelkopf nennt die Summe aus
Mängeln und überfälligen Fristen; ein Klick öffnet Objekt oder Zählerliste.

Objekte ohne Koordinaten stehen unter der Karte mit dem Knopf **Standort erfassen** – vor Ort per
GPS, im Büro von Hand. Die Kartenbibliothek wird erst beim Öffnen geladen; ohne Internetverbindung
bleibt die Liste und die Anwendung läuft weiter. Kartenbilder: OpenStreetMap-Mitwirkende.

---

## 12. Vorher / Nachher

Reiter *Begehungen* → **Vorher/Nachher** (sobald zwei Begehungen vorliegen). Zwei Aufnahmen
derselben Stelle liegen übereinander, der Regler dazwischen wischt zwischen den Jahren – mit Datum,
Zustandsbewertung und Feststellung beider Begehungen.

Voraussetzung ist ein Foto zum **gleichen Bereich in zwei Begehungen**. Wer die auffälligen Stellen
bei jeder Begehung aus derselben Position fotografiert, beendet damit die Diskussion, ob etwas
„vorher schon so war". In der Demo sind dafür zwei Bereiche mit **synthetischen Beispielbildern**
belegt; sie sind im Bild als Beispielbild gekennzeichnet.

---

## 13. Posteingang

**Menü → Posteingang.** Eine eingehende Nachricht wird eingefügt (oder aus vier Beispielen gewählt:
Mieterbeschwerde, Wartungsbericht, Anwaltsschreiben, Behördentermin). Die Anwendung erkennt

- das **Objekt** über Bezeichnung, Straße, PLZ oder Objektnummer, dazu die **Einheit**,
- die **Art des Vorgangs** – Mangelmeldung, Wartung/Prüfbericht, Rechtliches, Behörde, Angebot,
- die **Dringlichkeit** aus dem Wortlaut und eine **Frist** (aus „binnen 14 Tagen" oder nach Art),
- den **Absender im Adressbuch** über die Maildomäne,
- den **Bezug im Bestand**: offene Tickets, überfällige Fristen, erfasste Zähler des Objekts.

Daraus wird auf Knopfdruck ein **Ticket** oder ein Vorgang in der **Meldungs-Überwachung** – jeweils
mit Rückfrage, nichts entsteht von allein. Der **Antwortentwurf** ist nach Art des Vorgangs
formuliert und lässt sich kopieren oder im E-Mail-Programm öffnen.

Das alles läuft **regelbasiert und ohne KI-Schlüssel**. Ist ein Schlüssel hinterlegt (Abschnitt 2),
kommt der Knopf *Von der KI einschätzen lassen* hinzu: drei Abschnitte zu Forderung, Vorgehen und
Frist/Risiko, mit dem Hinweis auf fehlende Angaben statt erfundener.

---

## 14. Stammdaten aus SAP einlesen

**Menü → Stammdaten einlesen (SAP).** Objekte und Einheiten kommen aus dem Bestandssystem statt aus
Handarbeit:

1. CSV-Export wählen oder einfügen (Semikolon, Komma oder Tabulator; Vorlage zum Herunterladen,
   Beispieldaten zum Ausprobieren).
2. **Spalten zuordnen** – die Zuordnung ist vorbelegt, weil übliche Spaltennamen erkannt werden
   (Objektnr, Bezeichnung, WE, PLZ/Ort, Baujahr, Wohnfläche, Heizung, Hausmeister …).
3. **Vorschau**: was neu ist, was sich ändert (mit alt → neu je Feld) und was unverändert bleibt.
   Erst dann wird übernommen.

Abgeglichen wird über die **Objektnummer**, ersatzweise über die Bezeichnung. Bestehende Objekte
werden ergänzt, nicht ersetzt: leere Felder im Export lassen vorhandene Werte unberührt, und
Objekte, die im Export fehlen, bleiben unangetastet. Ein zweiter Import gleicht ab, statt zu
verdoppeln.

---

## 15. Bereiche und Rollen

Die Anwendung schaltet Bereiche je Konto frei: **Objekte, Zähler, Reinigung, Aufzüge, Sanierung,
Tickets, Admin**. Der Bereich **Zähler** ist der für einen **Ablesedienstleister**: er sieht die
Zählerliste, liest ab, druckt Erfassungsbogen und QR-Etiketten – und sonst nichts. Keine
Begehungen, keine Dokumente, keine Tickets, keine Kosten. Damit hält die Software, was ein
eingeschränkter Zugang für externe Dienstleister versprechen soll.

Unter **Menü → Ansicht testen als …** lässt sich die Sicht wechseln – Administrator,
Objektverwalter, Hausmeister, Ablesedienstleister, Reinigungsfirma. Eine Leiste am unteren Rand
zeigt die aktive Vorschau und führt zurück. Das ist die Vorführfunktion; im Serverbetrieb ergibt
sich die Sicht aus der Anmeldung und ist nicht umschaltbar.

Die Bereiche je Benutzer werden unter **Menü → Benutzer & Bereiche** gesetzt.

---

## 16. Objekt-Tagebuch

Reiter *Tagebuch* je Objekt: der Verlauf eines Hauses über **alle Bereiche hinweg** in einer
Zeitschiene, nach Jahren gruppiert und neueste Einträge zuerst.

Es laufen ein: Objektbegehungen (mit Zustandsbilanz), durchgeführte Wartungen aus der Historie,
Zählerablesungen, angelegte und versandte Tickets, Sanierungsbeginn und -abschluss, versandte
Schreiben aus der Meldungs-Überwachung sowie abgelegte Dokumente. Über die Filterleiste lässt sich
auf eine Art einschränken; viele Einträge führen per Knopf direkt zum Vorgang.

Damit beantwortet die App die Frage, die sonst Suchen in sechs Listen bedeutet: *Was ist an diesem
Objekt in den letzten Jahren eigentlich passiert?*

Die **globale Suche** (Lupe in der Kopfzeile) deckt jetzt ebenfalls alle Bereiche ab: Objekte,
Zähler (auch nach Zählernummer und Standort), Anlagen und Prüfpflichten, Aufzüge, Sanierungen,
Tickets, Mängel und das Adressbuch.

---

## 17. „Firma anschreiben" — überall dort, wo eine Firma zuständig ist

Aus jedem Vorgang lässt sich direkt eine E-Mail an die zuständige Firma erzeugen. Der Text wird
aus den Daten des Vorgangs vorbefüllt, der **Empfänger automatisch aus dem Adressbuch** aufgelöst,
und der Vorgang landet auf Wunsch in der Meldungs-Überwachung.

| Bereich | Anlass |
|---|---|
| Mängelübersicht | Mängel aus einer Begehung melden |
| Tickets | Mangel an die zuständige Firma |
| Aufzüge | Störungsmeldung an die Wartungsfirma |
| **Technik & Wartung** | Terminanfrage für Wartung oder gesetzliche Prüfung, inkl. Fälligkeitslage |
| **Zähler** | Zählerwechsel bei abgelaufener Eichfrist, Störung, fehlender Zugang |
| **Zählerablesung** | Ableseauftrag mit allen offenen Zählern und ihren Standorten |
| **Wohnungssanierungen** | Angebot anfordern oder Sachstand abfragen |
| **Hausdienstleister** | Rückmeldung oder Beanstandung zur Leistung |
| **Adressbuch** | direkte E-Mail an einen Kontakt |
| **Fristenkalender** | Terminanfrage zur überfälligen Frist, Aufzugstermin |
| **Gesetzliche Pflichten** | vorbereitetes Schreiben je Pflicht, mit Rechtsgrundlage im Text |
| **Sanierungen** | Mängelanzeige unter laufender Gewährleistung an die Baufirma |
| **CO₂-Rechner** | Anforderung der CO₂-Angaben beim Brennstofflieferanten |
| **Posteingang** | Antwortentwurf auf eine eingehende Nachricht, nach Art des Vorgangs |

Der Empfänger wird über den Firmennamen im Adressbuch gesucht — beim Ableseauftrag zusätzlich
darüber, wer in der Vorperiode tatsächlich abgelesen hat. Ist nichts hinterlegt, bleibt das Feld
leer und ein Hinweis nennt die Stelle, an der die Adresse ergänzt werden sollte.

---

## 18. Hinweise

- **Reine Demo:** Eingaben/Änderungen sind **nicht dauerhaft** – nach dem Neuladen der Seite
  stehen wieder die ursprünglichen Testdaten bereit. Ausnahme: offline erfasste Ablesungen bleiben
  bewusst in der Warteschlange im Gerät, damit sich der Offline-Ablauf zeigen lässt. Über
  **Verwerfen** in der Verbindungsanzeige lässt sich die Warteschlange leeren.
- **Datenschutz:** Alle Namen, Straßen, Orte und Firmen sind fiktiv; es besteht kein Bezug zu
  realen Personen oder Unternehmen.
- **Rechte-Demo:** Unter **Menü → Benutzer & Bereiche** sind vier Beispielkonten hinterlegt
  (`admin@demo.de`, `hausmeister@demo.de`, `reinigung@demo.de`, `ablesedienst@demo.de`), um die
  bereichsweise Freischaltung von Mitarbeitern und Dienstleistern zu zeigen. Die Sicht eines Kontos
  lässt sich über **Ansicht testen als …** direkt vorführen (Abschnitt 15).

---

## 19. Vom Demo zum echten Portal

Diese Demo nutzt eine eingebettete Testdatenschicht anstelle eines Servers. Für den
produktiven Mehrbenutzerbetrieb (Login + zentrale Datenbank in Frankfurt, bereichsbasierte
Rechte) gibt es die Server-Variante samt Einrichtungsanleitung – dann werden die Testdaten
durch echte Objektdaten in einer geschützten Datenbank ersetzt.

---

*Demodaten – nicht für den dienstlichen Gebrauch.*
