(async () => {
    const Planet = require("./models/Planet");
/*  Modo para inserção de dados(Planetas)
    const newPlanet = await Planet.create({
      name: "Saturno",
      position: 8,
    });
    console.log(newPlanet);
*/

const seePlanets = await Planet.findAll({
  where: {
    name: "Terra",
  },
});
console.log(seePlanets);
  })();