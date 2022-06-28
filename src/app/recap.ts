const username: string = 'JorgeRios';
const suma = (a: number, b: number) => {
  return a + b;
}
suma(1,3);

class Person {

  constructor(public age: number, public lastName: string) {}
}

const jorge = new Person(15, 'Rios');
