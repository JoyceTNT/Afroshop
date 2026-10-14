// Produktkarte: zeigt ein Produkt mit Bild, Name, Preis und Warenkorb-Button
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

export default ProductCard;