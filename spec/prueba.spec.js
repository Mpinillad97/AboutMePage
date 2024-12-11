// Archivo de prueba para la clase Repository
const { Activity, Repository } = require("../scripts/modelos")

// Descripción de la suite de pruebas para Repository
describe("Repository", () => {
  // Creación de una instancia de Repository para pruebas
  const repositorio = new Repository();
  
  // Prueba para verificar que Repository es una clase
  it("Repository deberia de ser una clase", () => {
    expect(typeof Repository).toBe("function");
  });

  // Prueba para verificar que repositorio es una instancia de Repository
  it("Deberia ser una instancia de la clase Repository", () => {
    expect(repositorio instanceof Repository).toBe(true);
  });

  // Prueba para verificar que existe un método llamado getActivities
  it("Deberia tener un metodo llamado getActivities", () => {
    expect(typeof repositorio.getActivities).toBe("function");
  });

  // Prueba para verificar que createActivity agrega un elemento a la lista
  it("El metodo createActivity deberia poder agregar un elemento a la lista", () => {
    // Crear una actividad de prueba
    repositorio.createActivity("title test", "description", "www.sdfsdf.com");
    // Verificar que la lista de actividades tiene un elemento
    expect(repositorio.getAllActivities().length).toBe(1);
  });
});


