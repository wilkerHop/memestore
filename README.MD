# MemeStore

## Mas o que é isso??
É um projeto de uma API Restful que retorna memes aleatórios.

### Colocando pra funcionar
Todas dependências estão no *[package.json](./package.json)*, você só precisa dar um ` npm i && npm start` e pronto! Estamos servindo na porta 3000 **;D**

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
Sendo que `nome` e `link` são obrigatórios e `video` só é necessário quando for inserir um vídeo.

Mande os dados pelo `body` da `request`.

*OBS:* NÃO USE `video` SE FOR INSERIR UMA IMAGEM !!!

### GET em __/meme/random/*:boolean*__
Retorna um objeto aleatório da base nesse naipe:
```json
{
    "_id": "59f7e1e2b286c8141de6d456",
    "nome": "vo cai",
    "link": "https://www.youtube.com/embed/9mQnsFrkrBk",
    "video": true,
    "__v": 0
}
```
Existe a opção de usar um paramêtro que se for `true` vai apenas retornar imagens, ou se for `false` vai apenas retornar vídeos. 

### GET em __/meme/random/tag/*:boolean*__
Retorna uma tag HTML com o link da coleção aleatória gerada.

Para imagens:
```html
<img class="img-responsive" src="http://wilker.site/meme.gif">
```
Para vídeos:
```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/9mQnsFrkrBk" frameborder="0" allowfullscreen></iframe>
```
A opção do paramêtro booleano também é disponível aqui.

# ToDo
* Permitir imagens com a característica `video`. 

# Dependências
* [Express.js](https://www.npmjs.com/package/express "Express in NPM")
* [Body-Parser](https://www.npmjs.com/package/body-parser "Body Parser in NPM")
* [Mongoose](https://www.npmjs.com/package/mongoose "Mongoose in NPM")

###### #pas
