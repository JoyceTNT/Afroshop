// Einstiegspunkt des Backends: startet den Express-Server
import express from 'express';
import pool from './db.js';

const app = express();
const PORT = process.env.PORT;

// GET /api/products: alle Produkte aus der Datenbank als JSON liefern
app.get('/api/products', async (req, res) => {
  try {
    const products = await pool.query(
      'SELECT id, name, category, price, image FROM products ORDER BY id'
    );
    res.json(products);
  } catch (error) {
    console.error('Fehler beim Laden der Produkte:', error.message);
    res.status(500).json({ error: 'Produkte konnten nicht geladen werden' });
  }
});

// Server starten und auf Anfragen warten
app.listen(PORT, () => {
  console.log(`Backend läuft auf http://localhost:${PORT}`);
});
