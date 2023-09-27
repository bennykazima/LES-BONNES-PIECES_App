const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

for (let i=0; i < pieces.length; i++){
    const article = pieces[i];

    // Creation des balises
    const imageElement = document.createElement("img");
    imageElement.src = article.image;

    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;

    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix}£ (${article.prix < 35 ? "£" : "£££"})`; //operateur Ternaire

    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "(aucune categorie)";

    const descriptionElemement = document.createElement("p");
    descriptionElemement.innerText = article.description ?? "pas de description";

    const stockElement = document.createElement("p");
    stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de Stock";

    // Creation de l'element du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    // creation d'une balise dedié à une piece automobile
    const pieceElement = document.createElement("article");

    // On rattache les balises crée à pieceElement(balise article)
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);

    // On rattache la balise article à la section Fiches
    sectionFiches.appendChild(pieceElement);
}