// Definición de la clase Activity
class Activity {
    constructor(id, title, description, imgUrl) {
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
        this.id = id;
    }
}

// Definición de la clase Repository
class Repository {
    constructor() {
        this.activities = [];
        this.id = 1; // Inicializa el ID en 1 para que sea secuencial
    }

    // Método para crear una nueva actividad y agregarla al array
    createActivity(title, description, imgUrl) {
        const activityID = this.id;
        const newActivity = new Activity(activityID, title, description, imgUrl);
        this.activities.push(newActivity);
        this.id++;
    }

    // Método para retornar todas las actividades
    getAllActivities() {
        return this.activities;
    }

    // Método para eliminar una actividad por su ID
    deleteActivity(id) {
        this.activities = this.activities.filter(function(activity) {
            return activity.id !== id;
        });
    }
}

module.exports = { Activity, Repository };
