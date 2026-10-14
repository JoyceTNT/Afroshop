// React-Hooks für Zustand und Nebeneffekte importieren
import { useState, useEffect } from 'react';
// Komponenten importieren
import Header from './components/Header.jsx';
import ProductCard from './components/ProductCard.jsx';
import Cart from './components/Cart.jsx';
// Externe CSS-Datei einbinden
import './App.css';

// Live-Demo (GitHub Pages) oder vollständige Version mit Backend?
const IS_DEMO = import.meta.env.VITE_DEMO === 'true';
// Datenquelle: in der Demo eine statische JSON-Datei, sonst die API des Backends
const PRODUCTS_URL = IS_DEMO
  ? `${import.meta.env.BASE_URL}demo/products.json`
  : '/api/products';

// Hauptkomponente definieren
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  // Produkte einmalig beim ersten Anzeigen der Seite laden
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch(PRODUCTS_URL);
        if (!response.ok) {
          throw new Error(`HTTP-Fehler ${response.status}`);
        }
        setProducts(await response.json());
      } catch (err) {
        console.error('Fehler beim Laden der Produkte:', err);
        setError('Die Produkte konnten nicht geladen werden.');
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  // Artikel hinzufügen oder Menge erhöhen
  const addToCart = (product) => {
    // Prüfen, ob das Produkt bereits im Warenkorb existiert
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      // Wenn ja: Liste kopieren und Menge des spezifischen Artikels um 1 erhöhen
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // Wenn nein: Neues Produkt mit der Menge 1 hinzufügen
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Artikel reduzieren oder ganz entfernen
  const removeFromCart = (productId) => {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem.quantity === 1) {
      // Wenn nur noch 1 Stück vorhanden ist: Artikel komplett aus dem Array filtern
      setCart(cart.filter(item => item.id !== productId));
    } else {
      // Andernfalls: Menge um 1 verringern
      setCart(cart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      ));
    }
  };

  // Gesamtzahl der Artikel im Warenkorb berechnen
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Gesamtpreis berechnen (Menge mal Preis)
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="app-container">
      <Header totalItems={getTotalItems()} />

      {IS_DEMO && (
        <p className="demo-hint">
          Live-Demo mit Beispieldaten. In der vollständigen Version kommen die Produkte
          über eine Express-API aus einer MariaDB-Datenbank.
        </p>
      )}

      <div className="product-grid">
        {loading && <p>Produkte werden geladen …</p>}
        {error && <p className="error-message">{error}</p>}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <Cart cart={cart} removeFromCart={removeFromCart} total={calculateTotal()} />
    </div>
  );
}

export default App;