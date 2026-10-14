# Afroshop

Online-Shop für afrikanische und asiatische Lebensmittel, Getränke und Kosmetik.

Das Projekt ist 2024 als Teamprojekt im Modul *Software Engineering 2* an der Hochschule Bremerhaven entstanden. Ich habe es eigenständig weiterentwickelt und auf eine moderne Full-Stack-Architektur mit React, Node.js/Express und MariaDB umgestellt.

**Live-Demo:** https://joycetnt.github.io/Afroshop/

Die Live-Demo zeigt das Frontend mit statischen Beispieldaten, da GitHub Pages keine Server ausführt. In der vollständigen Version (siehe [Installation](#installation-und-start)) kommen die Produkte über die Express-API aus der MariaDB-Datenbank. Die Demo wird bei jedem Push automatisch per GitHub Actions gebaut und veröffentlicht.

## Funktionen

- Produktkatalog mit ungefähr 30 Produkten, die aus einer MariaDB-Datenbank geladen werden
- REST-API für die Produkte (`GET /api/products`)
- Warenkorb: Produkte hinzufügen und entfernen, Mengen und Gesamtpreis werden automatisch berechnet
- Lade- und Fehleranzeige, falls das Backend nicht erreichbar ist

## Technologien

| Bereich | Technologie |
|---|---|
| Frontend | React 19, Vite, JavaScript, CSS |
| Backend | Node.js, Express 5 |
| Datenbank | MariaDB (SQL) |
| Werkzeuge | Git, npm, oxlint, GitHub Actions (CI/CD), GitHub Pages |

## Architektur

```
Browser (React, Port 5173)  ──HTTP/JSON──►  Backend (Express, Port 3000)  ──SQL──►  MariaDB
```

Das Frontend fragt die Produkte beim Laden der Seite über die API ab. Das Backend liest sie aus der Datenbank und liefert sie als JSON zurück. Während der Entwicklung leitet Vite alle Anfragen an `/api` an das Backend weiter (Proxy).

## Projektstruktur

```
Afroshop/
├── frontend/        React-Anwendung (Vite)
│   └── src/
│       ├── App.jsx          Hauptkomponente: lädt die Produkte, verwaltet den Warenkorb
│       └── components/      Header, ProductCard, Cart
├── backend/         REST-API (Express)
│   └── src/
│       ├── server.js        Server und Routen
│       └── db.js            Verbindung zur Datenbank
├── database/        SQL-Skripte
│   ├── schema.sql           Datenbank und Tabellen
│   └── sample-data.sql      Beispielprodukte
├── schulversion/    Ursprüngliche Version aus dem Hochschulprojekt (HTML, CSS, JavaScript, Bash/CGI)
└── .github/workflows/deploy-demo.yml   Automatische Veröffentlichung der Live-Demo
```

## Installation und Start

**Voraussetzungen:** Node.js ≥ 22, MariaDB ≥ 10.6

**1. Datenbank anlegen**

```bash
mariadb < database/schema.sql
mariadb < database/sample-data.sql
```

**2. Datenbankbenutzer für das Backend anlegen** (Passwort frei wählen)

```bash
sudo mariadb -e "CREATE USER 'afroshop_app'@'localhost' IDENTIFIED BY 'passwort';
                 GRANT SELECT, INSERT, UPDATE, DELETE ON afroshop.* TO 'afroshop_app'@'localhost';"
```

**3. Backend starten**

```bash
cd backend
cp .env.example .env    # anschließend das Passwort in .env eintragen
npm install
npm run dev             # läuft auf http://localhost:3000
```

**4. Frontend starten** (in einem zweiten Terminal)

```bash
cd frontend
npm install
npm run dev             # läuft auf http://localhost:5173
```

## API

| Methode | Route | Beschreibung |
|---|---|---|
| GET | `/api/products` | Liefert alle Produkte |

Beispielantwort:

```json
[
  {
    "id": 1,
    "name": "DAX Pomade Super Light",
    "category": "Haarpflege & Kosmetik",
    "price": 19.99,
    "image": "/img/DAX_pomade_super_light.png"
  }
]
```

## Weiterentwicklung gegenüber der Schulversion

| Schulversion | Aktuelle Version |
|---|---|
| Statische HTML-Seiten, DOM-Manipulation per Hand | React-Komponenten mit Zustandsverwaltung |
| Produkte fest im JavaScript-Code | Produkte in einer MariaDB-Datenbank |
| Bash-Skripte über CGI | REST-API mit Node.js und Express |
| Daten in CSV-Dateien | Relationale Datenbank mit SQL-Skripten |
| Server-Adressen fest im Code | Konfiguration über `.env`, eigener Datenbankbenutzer mit minimalen Rechten |

## Geplant

- Registrierung und Login mit gehashten Passwörtern (bcrypt)
- Bestellungen speichern
- Verwaltung der Produkte (anlegen, bearbeiten, löschen)
- Automatisierte Tests
- Docker-Setup für einen Start mit einem Befehl
