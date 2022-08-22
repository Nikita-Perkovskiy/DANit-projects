/*theory
1. Это возможнлсть языка js создавать новые объекты на основе других объектов, не копируя. Создавая новый объект мы ссылаемся на прототип и получаем доступ ко всем его данным и методам.
2. Он необходим для вызова функции родительского объекта.
*/
// practic

class Employee {
  constructor(name, age, salary) {
    this._name = name;
    this._age = age;
    this._salary = salary;
  }
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
  get salary() {
    return this._salary;
  }
  set setSalary(salary) {
    this._salary;
  }
  set setName(name) {
    this._name;
  }
  set setAge(age) {
    this._age;
  }
}

class Programmer extends Employee {
  constructor(name, age, salary, lang = []) {
    super(name, age, salary);
    this._lang = lang;
  }
  get salary() {
    return this._salary * 3;
  }
  set setSalary(salary) {
    this._salary * 3;
  }
}

const Petia = new Programmer("Petia", "26", "1000", ["js, php"]);
console.log(Petia);
console.log(Petia.salary);

const Maxim = new Programmer("Maxim", "34", "4500", ["js, php, c++"]);
console.log(Maxim);
console.log(Maxim.salary);
