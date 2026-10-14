// Warenkorb: listet die Artikel mit Menge und Preis und zeigt den Gesamtpreis
function Cart({ cart, removeFromCart, total }) {
  return (
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
          <h3>Gesamtpreis: {total.toFixed(2)} €</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
