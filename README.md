# README - Dark und White Modus Interaktiver Kurs

## Übersicht

Dieser interaktive Kurs zum Thema "Dark und White Modus" wurde für Schülerinnen und Schüler entwickelt. Der Kurs vermittelt die Grundlagen der Implementierung von Dark/Light Mode in Webseiten mit HTML, CSS und JavaScript und behandelt wichtige Aspekte wie Barrierefreiheit, Benutzerfreundlichkeit und moderne Webentwicklungstechniken.

## Inhalt des Kurses

Der Kurs besteht aus folgenden Komponenten:

1. **Hauptseite (index.html)**
   - Theoretische Grundlagen zum Thema Dark/Light Mode
   - Technische Implementierungsbeispiele
   - Interaktive Übungsbereiche

2. **Interaktive Übungen (im Ordner "exercises")**
   - Farbwähler (farbwaehler.html): Tool zum Experimentieren mit Farbschemata
   - Kontrastrechner (kontrastrechner.html): Tool zur Überprüfung der Barrierefreiheit
   - Systemeinstellungen-Detektor (systemeinstellungen.html): Demonstration der Erkennung von Systemeinstellungen

3. **Dokumentation (im Ordner "docs")**
   - Lehrerhandbuch (lehrerhandbuch.md): Anleitung für Lehrkräfte
   - Schülerarbeitsblatt (schuelerarbeitsblatt.md): Aufgaben und Übungen für Schüler

## Technische Anforderungen

- Moderner Webbrowser (Chrome, Firefox, Edge oder Safari)
- Texteditor für HTML, CSS und JavaScript (falls Änderungen vorgenommen werden sollen)
- Keine Internetverbindung erforderlich (alle Ressourcen sind lokal)

## Installation und Verwendung

1. Entpacken Sie die ZIP-Datei in ein beliebiges Verzeichnis
2. Öffnen Sie die Datei `index.html` in einem Webbrowser
3. Navigieren Sie durch den Kurs und die interaktiven Übungen
4. Für Lehrkräfte: Lesen Sie das Lehrerhandbuch im Ordner "docs"
5. Für Schüler: Verwenden Sie das Schülerarbeitsblatt im Ordner "docs"

## Verzeichnisstruktur

```
dark_light_mode_course/
│
├── index.html              # Hauptseite des Kurses
├── css/
│   └── styles.css          # Haupt-Stylesheet mit Light/Dark Mode-Unterstützung
├── js/
│   └── script.js           # JavaScript-Funktionalität für den Kurs
├── exercises/
│   ├── farbwaehler.html    # Interaktives Tool zum Experimentieren mit Farbschemata
│   ├── kontrastrechner.html # Tool zur Überprüfung der Barrierefreiheit
│   └── systemeinstellungen.html # Demonstration der Systemeinstellungserkennung
├── docs/
│   ├── lehrerhandbuch.md   # Anleitung für Lehrkräfte
│   └── schuelerarbeitsblatt.md # Aufgaben und Übungen für Schüler
└── img/
    └── ...                 # Bilder und Grafiken (falls vorhanden)
```

## Funktionen

- Umschaltung zwischen Light und Dark Mode
- Speicherung der Benutzereinstellung im localStorage
- Automatische Erkennung der Systemeinstellung (prefers-color-scheme)
- Interaktive Übungen zur Vertiefung des Gelernten
- Barrierefreiheitsüberprüfung mit WCAG-Richtlinien

## Anpassung

Der Kurs kann leicht an spezifische Bedürfnisse angepasst werden:

- Ändern Sie die Farbschemata in der Datei `css/styles.css`
- Fügen Sie weitere Übungen im Ordner "exercises" hinzu
- Passen Sie die Inhalte der Hauptseite in `index.html` an

## Lizenz

Dieser Kurs steht unter der MIT-Lizenz und darf frei für Bildungszwecke verwendet werden.

## Kontakt

Bei Fragen oder Anregungen wenden Sie sich bitte an den Entwickler Philipp Riegert.
