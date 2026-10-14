// Produktkarte: zeigt ein Produkt mit Bild, Name, Preis und Warenkorb-Button
function ProductCard({ product, addToCart }) {
  // Bildpfad an die Basisadresse anpassen (lokal "/", in der Live-Demo "/Afroshop/").
  // slice(1) entfernt den führenden "/" aus "/img/...".
  const imageUrl = import.meta.env.BASE_URL + product.image.slice(1);

  return (
    <div className="product-card">
      <img src={imageUrl} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>Preis: {product.price} €</p>
      <button className="add-button" onClick={() => addToCart(product)}>
        In den Warenkorb
      </button>
    </div>
  );
}

export default ProductCard;