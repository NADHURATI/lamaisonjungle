// Le Composant ShoppingList
import '../styles/ShoppingList.css';
import { planteListe } from '../data/planteListe';

function ShoppingList() {
    // Crée une liste de course sous forme de tableau
    let listCourse = ["arum","pivoine", "dahila", "campanule"];

    // Je crée un tableau qui regoupe toutes les catégories des plantes.
    const categories = planteListe.reduce( (cat, plante) => 
        cat.includes(plante.category) ? cat : cat.concat(plante.category),
        []
    );

    console.log("categories plantes: ", categories);
    
    /*const category = planteListe.reduce ( ( cat, plante) =>
        cat.includes(plante.category)
);*/
    return (
    <div>
        <ul>
            <h2>Liste de course</h2>
            {
                listCourse.map((plante, index) => (
                    <li key={`${index}`}> {index} - {plante}</li>
                ))
            }
        </ul>
        
        <h3>Nouvelle liste</h3>
        {/*Je veux afficher la catégorie de la plante.
           Et pour cela je veux utiliser quelle méthodes?
         */}

        <h5> Les catégories des plantes :</h5>

         <ul>
            {
            categories.map((maCatégorie) => (
                <li key={maCatégorie}>{maCatégorie}</li>
            ))}

         </ul>

         <h4> Les plantes :</h4>

        <ul className="lmj-plant-list">

            {planteListe.map((plant, index) => (
                <li key={plant.id-index} className="lmj-plant-item">{index} - {plant.name} </li>

            ))}
        
        </ul>

        
    </div>
    );
}


export default ShoppingList;
