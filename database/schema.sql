-- Datenbankstruktur des Afroshops
-- Ausführen: mariadb < database/schema.sql

-- Datenbank anlegen (utf8mb4 = alle Zeichen, auch Umlaute und Emojis)
CREATE DATABASE IF NOT EXISTS afroshop
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE afroshop;

-- Vorhandene Tabelle löschen, damit das Skript mehrfach ausgeführt werden kann
DROP TABLE IF EXISTS products;

-- Produkte des Shops
CREATE TABLE products (
  id       INT UNSIGNED  NOT NULL AUTO_INCREMENT,  -- eindeutige Nummer, automatisch vergeben
  name     VARCHAR(100)  NOT NULL,                 -- Produktname
  category VARCHAR(50)   NOT NULL,                 -- Kategorie, z. B. 'Getränke'
  price    DECIMAL(6, 2) NOT NULL,                 -- Preis in Euro, exakt mit 2 Nachkommastellen
  image    VARCHAR(255)  NOT NULL,                 -- Pfad zum Bild in frontend/public/img
  PRIMARY KEY (id)
);
