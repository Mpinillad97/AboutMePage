// describe("demo", function () {
//   it("Este test debe pasar siempre", function () {
//     expect(4 + 2).toBe(6);
//   });
// });

const { Activity, Repository } = require("../scripts/modelos")

//Repository deberia ser una clase


describe("Repository", () => {
  const repositorio = new Repository
  it("Repository deberia de ser una clase", () => {
    expect(typeof Repository).toBe("function");
  });

  it("Deberia ser una instancia de la clase Repository", () => {
    expect(repositorio instanceof Repository).toBe(true);
  });

  it("Deberia tener un metodo llamado getActivities", () => {
    expect(repositorio.getActivities).toBeDefined;
  });

  it("El metodo createActivity deberia poder agregar un elemento a la lista", () => {
    repositorio.createActivity("title test", "description", "www.sdfsdf.com")
    expect(repositorio.getAllActivities().length).toBe(1);
  });
})

