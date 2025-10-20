const galerieImage = document.getElementById("allImages");

// Récupérer les informations des images

let titre = '<img src=x onerror="window.location.replace(\'https://google.com\')"/>';
let imgSource = "../images/food.jpg";

let monImage = getImage(titre, imgSource);


// Les ajouter dans innerHTML
galerieImage.innerHTML = monImage;

function getImage(titre, urlImage){

    // Appel la fonction sanitizeHTML pour que l'input retourné soit du texte et non un code HTML
    titre = sanitizeHtml(titre);
    urlImage = sanitizeHtml(urlImage);

    return ` <div class="col p-3">
                <div class="image-card text-white">
                    <img src="${urlImage}" class="rounded w-100"/>
                    <p class="titre-image">${titre}</p>

                    <div class="action-image-buttons" data-show="admin">
                        <button type="button" class="btn btn-outline-light"><i class="bi bi-pencil-square"></i></button>
                        <button type="button" class="btn btn-outline-light"><i class="bi bi-trash"></i></button>
                    </div>

                </div>
            </div>`;
}