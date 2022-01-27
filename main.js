fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
  .then((responce) => responce.json())
  .then((obj) => console.log(obj.results));
