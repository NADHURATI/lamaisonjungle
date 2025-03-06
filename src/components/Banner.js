import '../styles/Banner.css';  // importe le style Banner.css

import logo from '../assets/logo.png';  
// Importe l'image "logo.png" située dans le dossier "assets" 
// et l'assigne à la variable "logo" pour pouvoir l'utiliser dans le code React.

// Je crée mon composant Banner <Banner />
function Banner() {

    let titre = 'La maison jungle';  
// Déclare une variable "titre" et lui attribue la chaîne de caractères 'La maison jungle' 
// Cette variable peut être utilisée pour afficher le titre de l'application.

    return(
        /* l'attribut "className" permet d'attribuer une classe à mon élément <div>
           En HTML, on utilise l'attribut "class".
           En REACT, on utilise l'attribut "className".
        */
        <div className="lmj-banner">
            <img src={logo} alt= "loge de ma maison jungle" className='lmj-logo'/>
            <h1 className="lmj-title"> {titre.toUpperCase()}</h1>
        </div>
)
}

// Ici, j'exporte mon composants Banner <Banner/>
export default Banner;