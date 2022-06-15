# Aplicação Backend & Frontend para criação de notas.
<hr>
<hr>

# Questões teóricas

## 1. Quais as partes principais de uma requisição HTTP?
> R: As principais partes de uma requisição HTTP são: </br>
&nbsp; &nbsp; &nbsp; a. Requisição própriamente dita </br>
&nbsp; &nbsp; &nbsp; b. Cabeçalho onde são enviadas informações. </br>
&nbsp; &nbsp; &nbsp; c. E o corpo da requisição que pode existir ou não. </br>

## 2. Qual a diferença entre colocar um script dentro do "head" e no fim do "body"?
> R: A diferença é que no head a página só será renderizada quando o carregamento do script</br>
for concluído, podendo assim contribuir para uma má performance na página.

## 3. Qual a diferença entre display: block e display: inline-block ?
> R: display: block - Faz a renderização do elemento contenha espaços em branco tanto acima do elemento quanto abaixo. </br>
display: inline-block fará os elementos ficarem alinhados em linha (um ao lado do outro), mantendo o espaço acima e abaixo.

## 4. É possível criar um site responsivo SEM media queries? Por que?
>R: É possível, pois podemos realizar cáculos no css para atingirmos o layout desejado, porém um tanto mais verboso e um pouco mais complicado.</br>
As media queries acabam por facilitar a criação de layouts responsivos sem muitos cálculos e com pouco código.

## 5. No Javascript, é obrigatório usar VAR para criar uma variável?
>R: Não.

## 6. Criar funções com "function() {}" e com "() => {}" tem alguma diferença além da sintaxe?
>R: Arrow function são sempre funções anônimas e tratam do this de maneira diferente das funções tradicionais além do retorno ser implicito onde não precisa ser declarado caso exista apenas uma linha de código.
Na arrow function não existe o this.


## 7. Explique a lógica pra fazer uma paginação.
>R: Criar uma função com 3 parâmetros, <b>item, paginaAtual e limideDeItens</b>, declararei uma variável resultado onde será um array e então retornar o resultado.</br>
Então declaro uma variável que percorre os itens e divide pelo limiteDeItens.</br>
Então crio um contador inicial onde pego a página atual vezes o limiteDeItens menos o limiteDe itens.
Declaro um limitador onde é aplicado o seguinte cálculo contador + limite de itens onde irá limitar a repetição do laço.
Então crio uma condição onde página atual for menor ou igual ao total de páginas.
Agora crio o laço de repetição onde pego o resultado e adiciono a um array de itens e incremento o contador.

## 8. Qual a melhor forma de armazenar uma imagem no banco de dados?
>R: Em meu ponto de vista melhor caminho é armazenar em um servidor fora da aplicação e salvar apenas a URL.</br>
Porém existe outra forma que também é uma boa opção que é o BLOB que armazena uma coleção de dados binários.


## 9. No React, quantos useEffect eu posso usar?
>R: Podem ser usados quantos useEffects forem necessários para resolver os problemas que desejar. Porém os casos mais comuns são para consumir uma API. Sem levar em consideração gatilhos na página.

## 10. Quais métodos de requisição preciso para criar um CRUD via API?
>R: Get, Post, Put ou Patch (dependendo da alteração desejeada) e o Delete.