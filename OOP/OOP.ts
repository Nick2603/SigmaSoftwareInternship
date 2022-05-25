// OOP

// Simple example of Class

class Rectangle {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calcArea() {
    return this.width * this.height;
  }

  calcPerimeter() {
    return (this.width + this.height) * 2;
  }
}

const rect = new Rectangle(10, 20);
const rect2 = new Rectangle(8, 14);
rect.calcArea();
rect.calcPerimeter();
rect2.calcArea();
rect2.calcPerimeter();

// Encapsulation

class Rectangle2 {
  private _width;
  private _height;

  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    if (value <= 0) {
      this._width = 1;
    } else {
      this._width = value;
    }
  }

  get height() {
    return this._height;
  }

  set height(value) {
    if (value <= 0) {
      this._height = 1;
    } else {
      this._height = value;
    }
  }

  calcArea() {
    return this._width * this._height;
  }

  calcPerimeter() {
    return (this._width + this._height) * 2;
  }
}

// Inheritance

class Person {
  private _firstName;
  private _lastName;

  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  set fullName(value) {
    [this._firstName, this._lastName] = value.split(" ");
  }

  greeting() {
    console.log(`Привет, я человек и меня зовут ${this._firstName}`); // Polymorphism
  }
}

class Employee extends Person {
  private _passportNumber;
  private _SSN;

  constructor(firstName, lastName, passportNumber, SSN) {
    super(firstName, lastName);
    this._passportNumber = passportNumber;
    this._SSN = SSN;
  }

  greeting() {
    console.log(`Привет, я работник и меня зовут ${this.firstName}`); // Polymorphism
  }
}

class Developer extends Employee {
  private _programmingLanguage;

  constructor(firstName, lastName, passportNumber, SSN, programmingLanguage) {
    super(firstName, lastName, passportNumber, SSN);
    this._programmingLanguage = programmingLanguage;
  }

  greeting() {
    console.log(`Привет, я разработчик и меня зовут ${this.firstName}`); // Polymorphism
  }
}

// Composition

class Engine {
  work() {
    console.log("Двигатель работает");
  }
}

class Car {
  engine: Engine;

  constructor() {
    this.engine = new Engine();
  }

  // Delegation
  drive() {
    this.engine.work();
  }
}

// Aggregation

class Wheel {}

class Car2 {
  wheel: Wheel;

  constructor(wheel) {
    this.wheel = wheel;
  }
}

// Singleton pattern

class DataBase {
  url: number;
  private static instance: DataBase;

  constructor() {
    if (DataBase.instance) {
      return DataBase.instance;
    } else {
      this.url = Math.random();
      DataBase.instance = this;
    }
  }
}

const db1 = new DataBase();
const db2 = new DataBase();
const db3 = new DataBase();

// URL будет у всех одинаковый так как новый экземпляр базы данных создаваться не будет
db1.url;
db2.url;
db3.url;

// Dependency injection

class User {
  username: string;
  age: number;
}

interface UserRepo {
  getUsers: () => User[];
}

class UserMongoDBRepo implements UserRepo {
  getUsers(): User[] {
    return [{ username: "юзер из монго", age: 42 }];
  }
}

class UserPostgresRepo implements UserRepo {
  getUsers(): User[] {
    return [{ username: "юзер из постгрес", age: 37 }];
  }
}

class UserService {
  userRepo: UserRepo;

  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo;
  }

  filterUser() {
    const users = this.userRepo.getUsers();
  }
}

const userService = new UserService(new UserMongoDBRepo());
userService.filterUser();

const userService2 = new UserService(new UserPostgresRepo());
userService2.filterUser();
