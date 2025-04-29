console.log("hola ajax");

function uno() {
  return "uno";
}

function dos() {
  setTimeout(() => {
    console.log("ahora si ¡dos!");
    return "dos";
  }, 2000);
}

function tres() {
  return "tres";
}

console.log(uno(), dos(), tres());

// BLOQUE 2: Promesa vacía de ejemplo

// Crear una promesa vacía (no resuelve ni rechaza)
const promesa = new Promise(() => {}); 
console.log('promesa', promesa); // Muestra en consola el estado de la promesa (pendiente)


// BLOQUE 3: Fetch básico - obtener un Pokémon específico

// Llamada a la API para obtener datos de Scyther
const promesa2 = fetch('https://pokeapi.co/api/v2/pokemon/scyther');
console.log('promesa2', promesa2); // Muestra el objeto Promesa

// Cuando la promesa se cumple:
promesa2.then((respuesta) => {
  console.log('respuesta', respuesta); // Muestra el objeto de respuesta de la API
  console.log('status', respuesta.status); // Muestra el código de estado (debería ser 200)

  // La respuesta se procesa como JSON (esto también devuelve otra promesa)
  const datos = respuesta.json();
  console.log('datos', datos); // Muestra la promesa del JSON

  // Cuando el JSON está listo:
  datos.then((pokemon) => {
    console.log('pokemon', pokemon); // Muestra el objeto completo del Pokémon Scyther
  });
});


// BLOQUE 4: Fetch con Pokémon aleatorio en la primera carta

// Generar un número aleatorio del 1 al 100
let random = Math.floor(Math.random() * 100) + 1;
// Hacer la petición a la API con ese número
let promesapokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + random);
let textTipo = "";

// Cuando la respuesta llega:
promesapokemon.then((respuesta) => {
  const pokemon = respuesta.json(); // Transformar en JSON
  pokemon.then((pokemon) => {
    console.log("pokemon", pokemon); // Mostrar el Pokémon obtenido

    // Actualizar el contenido de la carta 1
    document.querySelector(".title1").textContent = pokemon.name + " #" + pokemon.id;
    document.querySelector(".img1").src = pokemon.sprites.front_default;

    // Mostrar los tipos del Pokémon
    pokemon.types.forEach((tipo) => {
      textTipo = textTipo + " " + tipo.type.name;
    });
    document.querySelector(".text1").textContent = textTipo;
  });
});

// Añadir funcionalidad al hacer clic en la carta
document.querySelector("#card-pokemon").addEventListener("click", () => {
  let random = Math.floor(Math.random() * 1000) + 1; // Nuevo Pokémon aleatorio
  let textTipo = "";

  fetch("https://pokeapi.co/api/v2/pokemon/" + random)
    .then((respuesta) => respuesta.json())
    .then((pokemon) => {
      console.log("pokemon", pokemon);

      document.querySelector(".title1").textContent = pokemon.name + " #" + pokemon.id;
      document.querySelector(".img1").src = pokemon.sprites.front_default;

      pokemon.types.forEach((tipo) => {
        textTipo = textTipo + " " + tipo.type.name;
      });
      document.querySelector(".text1").textContent = textTipo;
    });
});



// BLOQUE 5: Segunda carta - Pokémon aleatorio

let random2 = Math.floor(Math.random() * 100) + 1;
let promesapokemon2 = fetch("https://pokeapi.co/api/v2/pokemon/" + random2);
let textTipo2 = "";

promesapokemon2.then((respuesta) => {
  const pokemon2 = respuesta.json();
  pokemon2.then((pokemon2) => {
    console.log("pokemon2", pokemon2);

    document.querySelector(".title2").textContent = pokemon2.name + " #" + pokemon2.id;
    document.querySelector(".img2").src = pokemon2.sprites.front_default;

    pokemon2.types.forEach((tipo) => {
      textTipo2 = textTipo2 + " " + tipo.type.name;
    });
    document.querySelector(".text2").textContent = textTipo2;
  });
});

document.querySelector("#card2-pokemon").addEventListener("click", () => {
  let random2 = Math.floor(Math.random() * 1000) + 1;
  let textTipo2 = "";

  fetch("https://pokeapi.co/api/v2/pokemon/" + random2)
    .then((respuesta) => respuesta.json())
    .then((pokemon2) => {
      console.log("pokemon2", pokemon2);

      document.querySelector(".title2").textContent = pokemon2.name + " #" + pokemon2.id;
      document.querySelector(".img2").src = pokemon2.sprites.front_default;

      pokemon2.types.forEach((tipo) => {
        textTipo2 = textTipo2 + " " + tipo.type.name;
      });
      document.querySelector(".text2").textContent = textTipo2;
    });
});



// BLOQUE 6: Tercera carta - Pokémon aleatorio

let random3 = Math.floor(Math.random() * 100) + 1;
let promesapokemon3 = fetch("https://pokeapi.co/api/v2/pokemon/" + random3);
let textTipo3 = "";

promesapokemon3.then((respuesta) => {
  const pokemon3 = respuesta.json();
  pokemon3.then((pokemon3) => {
    console.log("pokemon3", pokemon3);

    document.querySelector(".title3").textContent = pokemon3.name + " #" + pokemon3.id;
    document.querySelector(".img3").src = pokemon3.sprites.front_default;

    pokemon3.types.forEach((tipo) => {
      textTipo3 = textTipo3 + " " + tipo.type.name;
    });
    document.querySelector(".text3").textContent = textTipo3;
  });
});

document.querySelector("#card3-pokemon").addEventListener("click", () => {
  let random3 = Math.floor(Math.random() * 1000) + 1;
  let textTipo3 = "";

  fetch("https://pokeapi.co/api/v2/pokemon/" + random3)
    .then((respuesta) => respuesta.json())
    .then((pokemon3) => {
      console.log("pokemon3", pokemon3);

      document.querySelector(".title3").textContent = pokemon3.name + " #" + pokemon3.id;
      document.querySelector(".img3").src = pokemon3.sprites.front_default;

      pokemon3.types.forEach((tipo) => {
        textTipo3 = textTipo3 + " " + tipo.type.name;
      });
      document.querySelector(".text3").textContent = textTipo3;
    });
});
