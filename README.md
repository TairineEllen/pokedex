<img src="https://i.ibb.co/5Gr2mFr/undraw-a-better-world-9xfd.png" alt="mulher em pé em frente a uma janela" border="0" width = "200" />

# Pokédex

Antes de aprender sobre protocolos HTTP, JSONs e bancos de dados, construí um pequeno programinha totalmente em JavaScript para ser acessado e visualizado diretamente no terminal.

O programa foi construído seguindo as instruções da semana 05 do curso de back-end da {reprograma}. A descrição do projeto encontra-se [neste](https://github.com/reprograma/on7-porto-s5-projeto-guiado-I "neste") link.

O projeto se trata de construir uma Pokédex, uma espécie de banco de dados responsável por guardar informações sobre pokémons.

###### Módulos e métodos utilizados
- Readline
- push
- find
- sort

---

Ao rodar o programinha, obtemos uma tabela contendo os pokémons existentes na base e um menu com três opções:
1. Registrar
2. Treinar
3. Sair

Caso o usuário não digite uma dessas opções, o programa retorna um erro e pede para o usuário digitar uma opção válida.

### Registrar pokémons

Ao escolher a primeira opção, o programa vai:

- Receber via terminal as entradas de um pokémon encontrado a ser adicionado;
- Perguntar o nivel do pokémon e receber um inteiro;
- Perguntar o nome do pokémon e receber uma string;
- Perguntar o tipo do pokémon e receber um array de strings;
- Apresentar no console a tabela contendo os pokémons existentes e o pokémon recém adicionado.

### Treinar pokémons

Ao escolher a segunda opção, o programa vai:

- Perguntar o ID do pokémon a ser treinado;
- Se não for encontrado, mostrar uma mensagem de erro: "Pokémon não encontrado", e perguntar de novo;
- Se for encontrado, perguntar a quantidade de níveis que será adicionado ao pokémon;
- Apresentar no console a tabela contendo os pokémons existentes e o pokémon recém treinado, ordenados do maior nível para o menor.

---

### Observação

O nível máximo de um pokémon é 100. Ou seja, se um pokémon tem nível 99 e você quer adicionar mais 20 níveis de treinamento, então esse pokémon terá um nível 100, e os outros 19 níveis serão ignorados.

---
---
---

*This project is about building a Pokedex, a kind of database responsible for keeping information about pokémons. When running the program, we obtain a table containing the pokémons existing in the base and a menu with three options:*

*1. Register*
*2. Train*
*3. Exit*

*If the user does not enter one of these options, the program returns an error and asks the user to enter a valid option.*

### Register Pokémon

*When choosing the first option, the program will:*

*- Receive the inputs of a pokemon found to be added via the terminal;*
*- Ask the level of the pokemon and receive an integer;*
*- Ask the name of the pokemon and receive a string;*
*- Ask the type of pokemon and receive an array of strings;*
*- Display the table containing the existing Pokemon and the newly added Pokemon on the console.*

### Train Pokémon

*When choosing the second option, the program will:*

*- Ask for the Pokemon ID to be trained;*
*- If not found, display an error message: "Pokemon not found", and ask again;*
*- If found, ask how many levels will be added to the Pokemon;*
*- Display on the console the table containing the existing Pokemon and the newly trained Pokemon, ranked from highest to the lowest level.*

### Note

*The maximum level of a Pokémon is 100. That is, if a Pokémon has a level of 99 and you want to add 20 more training levels, then that Pokémon will have a level of 100, and the other 19 levels will be ignored.*