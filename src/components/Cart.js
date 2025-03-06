import '../styles/Cart.css' 
// Importe le fichier CSS pour appliquer les styles au composant

function Cart() { 
    // Définition du composant fonctionnel Cart

    let monsteraPrix = 8; 
    // Déclare une variable pour stocker le prix de la plante Monstera

    let lierrePrix = 10; 
    // Déclare une variable pour stocker le prix du Lierre

    let bouquetFleurPrix = 15; 
    // Déclare une variable pour stocker le prix d'un bouquet de fleurs

    const mapFleur = new Map();  // crée une instance de Map()
    
    mapFleur.set("a", 4);

    console.log("Map Fleur: ", typeof mapFleur);
    console.log(mapFleur.get("abeille"));

    console.log(mapFleur);

    const tableauFleurs = ["Rose", "lavande", "Jasmins", "Tournesol"];

    let fleur = tableauFleurs.map( (fleur) => fleur.toUpperCase());
    console.log(fleur);

    // Liste des articles
    return ( 
        <div className="lmj-cart"> 
            {/* Conteneur principal du panier avec la classe CSS "lmj-cart" */}
            
            <h1>Mon panier</h1> 
            {/* Titre du panier */}
            
            <ul> 
                {/* Liste non ordonnée des articles */}
                
                <li>Monstera : {monsteraPrix} €</li> 
                {/* Affiche le nom et le prix de la Monstera */}
                
                <li>lierre : {lierrePrix} €</li> 
                {/* Affiche le nom et le prix du Lierre */}
                
                <li>Bouquet de fleur : {bouquetFleurPrix} €</li> 
                {/* Affiche le nom et le prix du bouquet de fleurs */}
            </ul>

            Total : { monsteraPrix + lierrePrix + bouquetFleurPrix } € 
            {/* Calcule et affiche le total des prix des articles */}
        </div>
    );
}

export default Cart; 
// Exporte le composant Cart pour pouvoir l'utiliser ailleurs dans l'application
