(async () => {
    const Planet = require("./models/Planet");
  
    const newPlanet = await Planet.create({
      name: "Saturno",
      position: 8,
    });
    console.log(newPlanet);
  })();