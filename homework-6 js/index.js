/*
Теория

1. Это специальный способ записи спец символов в строках и некоторых элементов записи такие, как кавычки которые несут функциональное значение в JS, через обратную черту \.
2. Через литерал - ключевое слово Function, также можно через оператор присваивания =.
3. Это означает подъем переменной из локальной в глобальную область видимости, перед выполнением функции.
*/
//Практика

function createNewUser(firstName, lastName, birthday){
    firstName = prompt ("Your first name?");
    lastName = prompt ("Your last name?");
    birthday = prompt("When is your birthday, use form: date.month.year?");
      let User ={
          birthday,
          firstName,
          lastName, 
          getLogin: function () {
              let newName = this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
              return console.log(newName);
          },
         getAge: function () {
            let  birthdayYear = this.birthday.slice(6,10);
            return console.log(birthdayYear);
          },
        getPassword: function () {
            let Password = User.firstName.charAt(0).toUpperCase() + User.lastName.toLowerCase() + User.birthday.slice(6,10);
            return console.log(Password);
        },
      }
      return (User.getAge(), User.getPassword());
  }
  createNewUser();
  