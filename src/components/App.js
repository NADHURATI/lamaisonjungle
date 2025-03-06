import logo from '../logo.svg'; // on importe un logo utilisé dans le composant <App /> 
import '../styles/App.css'; // le CSS associé au composant <App />
import Banner from './Banner';  // Importe le composant "Banner" depuis le fichier "Banner.js" situé dans le même dossier. 
import Cart from './Cart';  // Importe le composant "Cart" depuis le fichier "Cart.js" situé dans le même dossier. 
import ShoppingList from './ShoppingList';

// Une fonction qui déclare un composant <App />
// C'est le composant principale de notre application (app)
function App() {
  return (
    <div><Banner/>
    <Cart/>
    <ShoppingList/><planteListe/></div> 
  );
}

export default App;  // Exporte le composant "App" comme export par défaut.  
