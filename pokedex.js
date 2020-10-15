const db = require('./database')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.table(db.pokemons)

rl.question('O que você gostaria de fazer? \n 1. Registrar pokémon \n 2. Treinar pokémon \n 3. Sair da pokédex', function(option) {
    
});
