# MemeStore

## Mas o que é isso??
É um projeto de uma API Restful que retorna memes aleatórios.

### Colocando pra funcionar
Todas dependências estão no *package.json*, você só precisa dar um:
```sh
$ npm i
```
e pronto! Estamos servindo na porta 3000 **;D**

## Rotas
O **/** não retorna nada importante. Vamos focar no **/meme**

### GET em __/meme__
Retorna todas as coleções de memes no banco.

### POST em __/meme/post__
Insere uma nova coleção no banco nesse esquema:
```js
nome = String;
link = String;
video = Boolean;
```
Sendo que *nome* e *link* são obrigatórios e *video* só é necessário quando for inserir um vídeo.

### GET em __/meme/random__

### GET em __/meme/random/*:boolean*__

### GET em __/meme/random/tag__

### GET em __/meme/random/tag/*:boolean*__