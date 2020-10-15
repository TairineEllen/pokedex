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