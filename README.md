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
   (Key erstellen unter **console.anthropic.com** → *API Keys*).
3. Optional das **Modell** anpassen. Standard: `claude-haiku-4-5-20251001`
   (schnell/günstig). Alternativen: `claude-sonnet-5`, `claude-opus-5`.

Beispiel-Funktionen (Schnellaktionen im Panel):
- **Eigentümer-Zusammenfassung** des Portfoliozustands
- **Aufgaben priorisieren** über alle Objekte
- **E-Mail an Dienstleister** zum dringendsten Mangel entwerfen
- Freie Fragen zum Objektbestand

> **Wichtig:** Der API-Key wird **ausschließlich im Browser** gespeichert (localStorage) und
> **niemals ins Repository** geschrieben. Trage ihn nicht in den Code/README ein und committe ihn nicht.
> Die Nutzung verursacht Kosten über deinen Anthropic-Account. Für die KI-Antworten ist eine
> Internetverbindung nötig (der Browser ruft `api.anthropic.com` direkt auf).

---

## 3. Hinweise

- **Reine Demo:** Eingaben/Änderungen sind **nicht dauerhaft** – nach dem Neuladen der Seite
  stehen wieder die ursprünglichen Testdaten bereit.
- **Datenschutz:** Alle Namen, Straßen, Orte und Firmen sind fiktiv; es besteht kein Bezug zu
  realen Personen oder Unternehmen.
- **Rechte-Demo:** Unter **Menü → Benutzer & Bereiche** sind drei Beispielkonten hinterlegt
  (`admin@demo.de`, `hausmeister@demo.de`, `reinigung@demo.de`), um die bereichsweise
  Freischaltung von Mitarbeitern/Dienstleistern zu zeigen.

---

## 4. Vom Demo zum echten Portal

Diese Demo nutzt eine eingebettete Testdatenschicht anstelle eines Servers. Für den
produktiven Mehrbenutzerbetrieb (Login + zentrale Datenbank in Frankfurt, bereichsbasierte
Rechte) gibt es die Server-Variante samt Einrichtungsanleitung – dann werden die Testdaten
durch echte Objektdaten in einer geschützten Datenbank ersetzt.

---

*Demodaten – nicht für den dienstlichen Gebrauch.*
