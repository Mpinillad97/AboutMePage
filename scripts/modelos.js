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

module.exports = { Activity, Repository}