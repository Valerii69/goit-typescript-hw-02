/*
  У вас є тип Form, який містить інформацію про форму, включаючи поле errors. 
  Ви хочете створити новий тип Params, який включає всі поля з Form, крім errors.
*/

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так, щоб унеможливити поле 'errors' з типу Form
type Params = Omit<Form, "errors">;

/* або варіант 2:*/
// type Params = Pick<Form, Exclude<keyof Form, "errors">>;

export {};

class Animal {
  public say() {
    console.log("I'm an animal");
  }
}

class Cat extends Animal {
  public say() { // перевизначення методу say() для Cat
    console.log('Meow');
  }
}

class Dog extends Animal {
  public say() { // перевизначення методу say() для Dog
    console.log('Woof');
  }
}

let animal = new Cat();
animal.say(); // Виводить "Meow"

animal = new Dog();
animal.say(); // Виводить "Woof"



