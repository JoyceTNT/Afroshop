// React und Hooks importieren
import React, { useState } from 'react';
// Externe CSS-Datei einbinden
import './App.css';

// Produktdaten definieren
const products = [
  { id: 1, name: 'DAX pomade super light', price: 19.99, image: '/img/DAX_pomade_super_light.png' },
  { id: 2, name: 'Dimes sour apple', price: 4.99, image: '/img/dimes_sour_apple.jpg' },
  { id: 3, name: 'Dimes mango', price: 4.99, image: '/img/dimes_mango.jpg' },
  { id: 4, name: 'Fitne herbal tee', price: 14.99, image: '/img/Fitne_herbal_tee.png' },
  { id: 5, name: 'ORS Olive Oil', price: 10.99, image: '/img/ORS_olive_oil.jpg' },
  { id: 6, name: 'Hühnerbrühe Pulver Knorr 900g', price: 2.49, image: '/img/Hühnerbrühe_Pulver_Knorr_900g.jpg' },
];

// Produktkarte mit CSS-Klassen statt Inline-Styling erstellen
function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>Preis: {product.price} €</p>
      <button className="add-button" onClick={() => addToCart(product)}>
        In den Warenkorb
      </button>
    </div>
  );
}

// Hauptkomponente definieren
function App() {
  const [cart, setCart] = useState([]);

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
      <div className="header">
        <h1>Afroshop Produkte</h1>
        <h2>Warenkorb: {getTotalItems()} Artikel</h2>
      </div>
      
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      
      <div className="cart-section">
        <h2>Dein Warenkorb</h2>
        
        {cart.length === 0 ? (
          <p>Der Warenkorb ist leer.</p>
        ) : (
          <div>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <span>{item.quantity}x {item.name} - {(item.price * item.quantity).toFixed(2)} €</span>
                  <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                    Entfernen
                  </button>
                </li>
              ))}
            </ul>
            <h3>Gesamtpreis: {calculateTotal().toFixed(2)} €</h3>
          </div>
        )}
      </div>
      
    </div>
  );
}

export default App;