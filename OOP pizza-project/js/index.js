'use strict';

let two =2;
class PizzaException{
    constructor(log){
        throw new Error(log) 
    }
}

class Pizza {
    constructor(size,type){
    this.type = type;
    this.size = size;
    this.extra = [];
    this.price = 0;
    if(arguments.length < two){
        return new PizzaException(`Required two argumnets,given:${arguments.length}`)
    }
  
    if(arguments[0]!== Pizza.SIZE_L){
        if(arguments[0]!== Pizza.SIZE_M){
            if(arguments[0]!== Pizza.SIZE_S){
                return new PizzaException('Invalid Type')
              }
            }
          }
          if(arguments[1]!== Pizza.TYPE_MARGHERITA){
            if(arguments[1]!== Pizza.TYPE_PEPPERONI){
                if(arguments[1]!== Pizza.TYPE_VEGGIE){
                    return new PizzaException('Invalid Type')
                  }
                }
              }
    if(size === 'large'){
     this.price = 100; 
    }
    if(size === 'small'){
        this.price = 50; 
       }
    if(size === 'medium'){
        this.price = 75; 
       }
     if(type === 'vegiterian'){
         this.price += 50
     }  
     if(type === 'margherita'){
        this.price += 60
    } 
    if(type === 'pepperoni'){
        this.price += 70
    } 

}

getSize(){
  console.log( `Size of Pizza is ${this.size}`);
}
getPrice(){
    console.log(this.price)
    
    }
getPizzaInfo(){
    console.log( `Size of Pizza is ${this.size},
    type is ${this.type},
    extra ingredients:${this.extra},
    price is ${this.price} UAH
    `);
}
removeExtraIngredient(extra){
    if(arguments.length > 1 ){
        return new PizzaException(`Required one argumnet,given:${arguments.length}`)
    }
    if( this.extra.includes(extra)){
    this.extra.splice(this.extra.indexOf(extra),1)
    }else{
        throw new PizzaException('Ingredient is not in your pizza');
    }
    if(extra === Pizza.EXTRA_MEAT){
        this.price -= 9;
    }
    if(extra === Pizza.EXTRA_TOMATOES){
        this.price -= 5;
    }
    if(extra === Pizza.EXTRA_CHEESE){
        this.price -= 7;
    }

}
addExtraIngredient(extra){
    if(arguments.length > 1 ){
        return new PizzaException(`Required one argumnet,given:${arguments.length}`)
    }
    if(extra !== 'cheese'){
        if(extra !== 'meat'){
            if(extra !== 'tomatoes'){
                throw new PizzaException('Invalid ingredient');
            }
        }
    }
    if(this.extra.includes(extra)){
        throw new PizzaException('Duplicate ingredient');
    }
    this.extra.push(extra);

    if(extra === Pizza.EXTRA_MEAT){
        if(this.type !== 'vegiterian'){
        this.price += 9;
        }else{
            throw new PizzaException('Invalid ingredient');
        }
    }
    if(extra === Pizza.EXTRA_TOMATOES){
        this.price += 5;
    }
    if(extra === Pizza.EXTRA_CHEESE){
        this.price += 7;
    }
}
}
Pizza.allowedSizes = [ Pizza.SIZE_S,Pizza.SIZE_M,Pizza.SIZE_L];
Pizza.allowedTypes = [ Pizza.TYPE_MARGHERITA,Pizza.TYPE_PEPPERONI,Pizza.TYPE_VEGGIE];
Pizza.allowedExtraIngredients =[Pizza.EXTRA_CHEESE,Pizza.EXTRA_MEAT,Pizza.EXTRA_TOMATOES]
Pizza.SIZE_S = 'small';
Pizza.SIZE_M = 'medium';
Pizza.SIZE_L = 'large' ;

Pizza.TYPE_VEGGIE = 'vegiterian';
Pizza.TYPE_MARGHERITA = 'margherita';
Pizza.TYPE_PEPPERONI = 'pepperoni';

Pizza.EXTRA_TOMATOES = 'tomatoes'
Pizza.EXTRA_CHEESE = 'cheese'
Pizza.EXTRA_MEAT = 'meat'


let pizza = new Pizza(Pizza.SIZE_S,Pizza.TYPE_VEGGIE);

