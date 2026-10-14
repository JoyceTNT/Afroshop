// Kopfbereich: Shop-Titel und Anzahl der Artikel im Warenkorb
function Header({ totalItems }) {
  return (
    <div className="header">
      <h1>Afroshop Produkte</h1>
      <h2>Warenkorb: {totalItems} Artikel</h2>
    </div>
  );
}

export default Header;
