console.log("Hello, world!");



//BLOQUE EN CASCADA----------------------------------------------------------
//array para hacer push de los fetch
const arrayPokes = [];
const start = Date.now();

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(response => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  })
  .then(data => {
    console.log('Pokémon:', data.name)
    console.log('ID:', data.id)
    console.log('Tiempo de respuesta:', Date.now() - start, 'ms')
      fetch('https://pokeapi.co/api/v2/pokemon/2')
        .then(response => {
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          return response.json();
        })
        .then(data => {
          console.log('Pokémon:', data.name)
          console.log('ID:', data.id)

          fetch('https://pokeapi.co/api/v2/pokemon/3')
          .then(response => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
          })
          .then(data => {
            console.log('Pokémon:', data.name)
            console.log('ID:', data.id)

              fetch('https://pokeapi.co/api/v2/pokemon/4')
              .then(response => {
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                return response.json();
              })
              .then(data => {
                console.log('Pokémon:', data.name)
                console.log('ID:', data.id)

                  fetch('https://pokeapi.co/api/v2/pokemon/5')
                  .then(response => {
                    if (!response.ok) throw new Error(`HTTP ${response.status}`);
                    return response.json();
                  })
                  .then(data => {
                    console.log('Pokémon:', data.name)
                    console.log('ID:', data.id)
                    console.log('tiempo de respuesta:', Date.now() - start, 'ms')
                  })
              })
          })
      })
  })
  .catch(err => console.error('Error:', err))
  .finally(() => console.log('Petición finalizada'));
  


  
// async function loadSequential() {
//   const start = Date.now();
//   try {
//     const p1 = await fetch('https://pokeapi.co/api/v2/pokemon/1').then(r=>r.json()); console.log(p1.name);
//     // ... hasta p12
//     const p12 = await fetch('https://pokeapi.co/api/v2/pokemon/12').then(r=>r.json()); console.log(p12.name);
//   } catch(err) {
//     console.error(err);
//   } finally {
//     console.log(`Secuencial en ${(Date.now()-start)/1000}s`);
//   }
// }
// loadSequential();
 
  

async function loadParallel() {
  const start = Date.now();
  try {
    const promises = [];
    for (let i = 1; i <= 12; i++) {
      promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(r=>r.json()));
    }
    const pokemons = await Promise.all(promises);
    pokemons.forEach(p => console.log(p.name));
  } catch(err) {
    console.error(err);
  } finally {
    console.log(`Paralelo en ${(Date.now()-start)/1000}s`);
  }
}
loadParallel();