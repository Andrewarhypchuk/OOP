
// Приклад №1
class Worker{
    constructor(name,surname,rate,days){
   this.name = name;
   this.surname = surname;
   this.rate = rate;
   this.days = days;
   this.getSalary = function(){
       let salary = this.rate*this.days;
       console.log(`The ${this.name}'s salary is ${salary}$!`)
   }
    }
}
let worker1 = new Worker("andrew","arh",500,10);
worker1.getSalary();
//Приклад №2
  class MyString {
      constructor(){
          this.reverse = function(string){
            let number = string;
            console.log(number);
            let reverseNumber = number.split("").reverse().join("");
            console.log(reverseNumber)
          }
          this.ucFirst = function(string) {  
              console.log(string[0].toUpperCase()+string.slice(1));
            
          }
          this.ucWord = function(string) {  
            let words =  string.split(" ");
            let newWords = [];
          for(let i = 0;i<words.length;i++){
       let upWord = words[i][0].toUpperCase()+words[i].slice(1);
       newWords.push(upWord);

          }
          console.log(newWords.join(","))
        }
      }
  }
  let stringOne = new MyString;
  stringOne.reverse("IVAN");
  stringOne.ucFirst('sss');
  stringOne.ucWord("nana cana dana");

//Приклад №3
class CoffeeMachine{
    constructor(){
    this.typeOfMachine = "кавова машина"    
    this.on = function(){
        console.log('Кавоварка увімкнулася і працює ')
    }
    this.off = function(){
        console.log('Кавоварка вимкнулася і не працює ')
        }
    }
}
class CoffeeMachine1 extends CoffeeMachine{
    constructor(){
        super(CoffeeMachine)
this.type = "Капельна"
this.variables = "20 видів кави" 
this.info =  function(){
 console.log(`Ця ${this.typeOfMachine} за різновидом є ${this.type} і готує ${this.variables}`);
}
    }
};

class CoffeeMachine2 extends CoffeeMachine{
    constructor(){
        super(CoffeeMachine)
this.type = "Ріжкова"
this.variables = "25 видів кави" 
this.info =  function(){
 console.log(`Ця ${this.typeOfMachine} за різновидом є ${this.type} і готує ${this.variables}`);
}
    }
};


let machine = new CoffeeMachine1();
machine.on();
machine.off();
machine.info();
let machine2 = new CoffeeMachine2();
machine2.on();
machine2.off();
machine2.info();
