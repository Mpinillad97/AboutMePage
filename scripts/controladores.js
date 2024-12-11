// Seleccionar los elementos del DOM necesarios
const inputTitle = document.getElementById("nombre");
const inputDescription = document.getElementById("descripcion");
const inputImgUrl = document.getElementById("imagen-url");
const submitButton = document.getElementById("enviar");
const cardHolder = document.getElementById("cardHolder");

// Función que convierte una instancia de Activity en un elemento HTML
function createActivityCard(activity) {
    const { id, title, description, imgUrl } = activity;

    const activityCard = document.createElement('div');
    const activityTitle = document.createElement('h3');
    const activityDescription = document.createElement('p');
    const activityImage = document.createElement('img');

    activityTitle.innerHTML = title;
    activityDescription.innerHTML = description;
    activityImage.src = imgUrl;

    activityCard.classList.add('activity-card');
    activityTitle.classList.add('activity-title');
    activityDescription.classList.add('activity-description');
    activityImage.classList.add('activity-image');

    // Añadir funcionalidad para eliminar la tarjeta al hacer clic en la tarjeta completa
    activityCard.addEventListener('click', function() {
        repository.deleteActivity(id);
        displayActivities();
    });

    activityCard.appendChild(activityTitle);
    activityCard.appendChild(activityDescription);
    activityCard.appendChild(activityImage);

    return activityCard;
}

// Función que convierte todas las instancias de Activity en elementos HTML y los muestra
function displayActivities() {
    cardHolder.innerHTML = '';
    const activities = repository.getAllActivities();
    const activityCards = activities.map(createActivityCard);
    activityCards.forEach(card => cardHolder.appendChild(card));
}

// Función manejadora del evento de enviar el formulario
function handler(event) {
    event.preventDefault();
    const title = inputTitle.value;
    const description = inputDescription.value;
    const imgUrl = inputImgUrl.value;

    if (!title || !description || !imgUrl) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Crear una nueva actividad y actualizar la vista
    repository.createActivity(title, description, imgUrl);
    displayActivities();

    // Limpiar el formulario
    inputTitle.value = '';
    inputDescription.value = '';
    inputImgUrl.value = '';
}
