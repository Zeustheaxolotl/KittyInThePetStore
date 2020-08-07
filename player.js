
class Player{
 constructor(){
 this.money=10; 
 this.food=0; 
 this.points=7; 
 this.animals = []; 
  this.level = 1; 
  this.animalsText1 = [];
   
 }
  addMoney(newMoney){
    this.money+=newMoney;
  }
  
  addFood(food){
    this.food+=food;
    this.money-=5;
  }
  
  addAnimal(newAnimal,name){
    this.animals.push(newAnimal);
    this.points-=5; 
    this.animalsText1.push(name);
  
  }
  addPoints(){ 
   this.food-=1; 
    this.points+=2;
  }
  
  
    
} 