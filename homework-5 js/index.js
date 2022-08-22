/*Теория
1. Метод объекта - встроенная в объект функция позволяющая проводить определенные операции с эдементами объекта.
2. String.
3. Это означает, что объект нельзя на прямую скопировать, при прямом присвоении объекта он не копируется, а дается ссылка на один обЪект.
*/
//Практика

function createNewUser(firstName, lastName){
  firstName = prompt ("Your first name?");
  lastName = prompt ("Your last name?");
    let User ={
        firstName,
        lastName, 
        getLogin: function () {
            let newName = this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
            return console.log(newName);
        }
    }
    return (User.getLogin());
}
createNewUser();
