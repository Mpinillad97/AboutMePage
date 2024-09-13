class Activity {
    constructor(id, title, description, imgURL) {
        this.title = title;
        this.description = description;
        this.imgURL = imgURL;
        this.id = id;
    }
}

class Repository {
    constructor() {
        this.activities = [];
        this.id = 1; //Esto va a inicializar el ID en 1 para que sea secuencial
    }

    //Un metodo que reciba datos de una actividad, cree una actividad nueva y la guarde en su array
    createActivity(title, description, imgURL) {
        const activityID = this.id 
        const newActivity = new Activity(activityID, title, description, imgURL);
        this.activities.push(newActivity)
        this.id++;
    }

    //Un metodo que le permita retornar todas las actividades
    getAllActivities() {
        return this.activities;
    }

    //Un metodo que le permita filtrar las actividades
    deleteActivity(id) {
        this.activities = this.activities.filter(function(activity) {
            return activity.id !== id;
        });
    }
}

const repository = new Repository();


// Seleccionar el input de título
const inputTitle = document.getElementById("nombre");
// Seleccionar el input de descripción
const inputDescription = document.getElementById("descripcion");
// Seleccionar el input de URL de imagen
const inputImgUrl = document.getElementById("imagen-url");
// Seleccionar el botón de enviar
const submitButton = document.getElementById("enviar");
// Seleccionar el contenedor de tarjetas
const cardHolder = document.getElementById("cardHolder");

//Funcion que convierte una instancia de Activity en un elemento HTML
function createActivityCard(activity) {
    const { id, title, description, imgURL } = activity;

    const activityCard = document.createElement('div');
    const activityTitle = document.createElement('h3');
    const activityDescription = document.createElement('p');
    const activityImage = document.createElement('img');

    activityTitle.innerHTML = title;
    activityDescription.innerHTML = description;
    activityImage.src = imgURL;

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

// Funcion que se encarga de "convertir" todas las instancias de Activity ne elementos HTML
function displayActivities () {
    const cardHolder = document.getElementById("cardHolder");
    cardHolder.innerHTML = '';
    const activities = repository.getAllActivities();
    const ActivityCards = activities.map(createActivityCard);
    ActivityCards.forEach(card => cardHolder.appendChild(card));
}

// handler
function handler (event) {
    event.preventDefault();
    const title = inputTitle.value;
    const description = inputDescription.value;
    const imgURL = inputImgUrl.value;

    if (!title || !description || !imgURL) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    repository.createActivity(title, description, imgURL);

    displayActivities();
}

// Añadido de event listener a boton de enviar
submitButton.addEventListener('click', handler);

