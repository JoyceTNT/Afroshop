// React-Hooks für Zustand und Nebeneffekte importieren
import { useState, useEffect } from 'react';
// Komponenten importieren
import Header from './components/Header.jsx';
import ProductCard from './components/ProductCard.jsx';
import Cart from './components/Cart.jsx';
// Externe CSS-Datei einbinden
import './App.css';

// Hauptkomponente definieren
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  // Produkte einmalig beim ersten Anzeigen der Seite vom Backend laden
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/api/products');
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