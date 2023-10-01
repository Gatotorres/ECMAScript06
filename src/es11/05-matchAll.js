//para que matcheen es necesario utilizar una regular expression
//esto significa que hay que profundizar para entender que sucede
//ya que en este curso no se dará informacion especifica del funcionamiento regex


//sirve para validar el contenido
//para filtrar texto o tambien analizar informacion

const regex = /\b(Apple)+\b/g;

const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.";

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}

/*
[
  'Apple',
  'Apple',
  index: 0,
  input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
  groups: undefined
]
[
  'Apple',
  'Apple',
  index: 21,
  input: 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.',
  groups: undefined
]
*/

//como se ve, nos devuelve dos respuestas, cada una tiene un indice
//de donde fué encontrada, el input, y groups, son tambien datos.


//y si le hubiera puesto 2 apple mas, hubiera devuelto 2 arrays extras?

const regex2 = /\b(Apple)+\b/g;

const fruit2 = "Apple, Banana, Kiwi, Apple, Apple, Apple, Orange, etc. etc. etc.";

for (const match of fruit2.matchAll(regex2)) {
    console.log(match);
}

/*
[
  'Apple',
  'Apple',
  index: 0,
  input: 'Apple, Banana, Kiwi, Apple, Apple, Apple, Orange, etc. etc. etc.',
  groups: undefined
]
[
  'Apple',
  'Apple',
  index: 21,
  input: 'Apple, Banana, Kiwi, Apple, Apple, Apple, Orange, etc. etc. etc.',
  groups: undefined
]
[
  'Apple',
  'Apple',
  index: 28,
  input: 'Apple, Banana, Kiwi, Apple, Apple, Apple, Orange, etc. etc. etc.',
  groups: undefined
]
[
  'Apple',
  'Apple',
  index: 35,
  input: 'Apple, Banana, Kiwi, Apple, Apple, Apple, Orange, etc. etc. etc.',
  groups: undefined
]
*/

//si afirmativo. sucede de tal forma.