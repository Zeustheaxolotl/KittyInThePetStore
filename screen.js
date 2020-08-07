class Screen{
 Constructor(){
   this.fox=0; 
   this.griffin=0; 
   this.firedragon=0;
   this.waterdragon=0;
   this.moondragon=0;
   this.pegasus=0; 
   this.unicorn=0; 
   this.kracken=0;
    this.display = 0;
    this.hamster = hamster1;
    this.koi = koi1;
    this.bunny = bunny1;
    this.cat = cat1;
    this.dog = dog1;
    this.food = food;
    this.popup=false;
   
   
 }
  draw(){
    //label
    //back button
    fill(0);
    rect(0, 0, 35, 25);
    fill(255);
    rect(10, 10, 20, 7);
    triangle(5, 15, 15, 5, 15, 22);  
    if (mouseIsPressed) {
      if (mouseX > 0 && mouseX < 35) {
        if (mouseY > 0 && mouseY < 25) {
          screen = 1;
        }
      }
    }
    var store= new Store();
    store.popUp();
  }
   feedFood(){
    push();
    scale(0.3075);
    image(food,950,650);
    pop();
    textSize(15); 
    fill(0);
        var newtextfood = 'x ' + str(player.food);
    text(newtextfood,350,300);
      
    
    if (mouseIsPressed) {
      if (mouseX > 300) {
        if ((mouseY > 200) && (mouseY < 300)){
          if(player.food>0){
          this.popup = true; 
            
          }
          }
    }
    }
    if (this.popup) {
      fill(255)
      rect(200, 200, 100, 50);
      fill(0);
      textSize(15);
      text('Are you sure?', 201, 211);
      fill(0, 255, 0);
      rect(280, 230, 20, 20);
      fill(255, 0, 0);
      rect(200, 230, 20, 20);
      
    }
    if (mouseIsPressed) {
      if ((mouseY > 230) && (mouseY < 250)) {
        if ((mouseX > 200) && (mouseX < 210)) {
          
            this.popup=false

        }
      }
    }
  
    if (mouseIsPressed) {
      if ((mouseY > 230) && (mouseY < 250)) {
        if ((mouseX > 280) && (mouseX < 300)) {
          if (this.popup){
            this.popup=false
            player.addPoints();
          }
        }
      }
    }
  }

  
  
  
}
class Mythical extends Screen{
  constructor() {
    super();
    this.fox = foxBeast;
    this.griffin = griffinBeast;
    this.firedragon=firedragon;
    this.waterdragon=waterdragon;
    this.moondragon=moondragon;
    this.pegasus = pegasus1; 
    this.unicorn = unicorn1;
    this.kracken = kracken1;
    this.food=food;
    this.popup=false;
  }
 Update() {

    if (mScreen==0){
   

    this.fox= new Fox(0,0);
    this.fox.draw(); 
    this.fox.Words();
        for (var i = 0; i < player.animals.length; i++) {
    if (player.animals[i].constructor.name == "Fox") {
      AnimalScreen.feedFood();
    }
  }
    }
    else if(mScreen==1){
     
      
    this.griffin= new Griffin(0,0);
    this.griffin.draw(); 
    this.griffin.Words();  
    for (var i = 0; i < player.animals.length; i++) {
    if (player.animals[i].constructor.name == "Griffin") {
      AnimalScreen.feedFood();
    }   
    }
 } 
    else if (mScreen==2){

    this.firedragon= new FireDragon(0,0);
    this.firedragon.draw(); 
    this.firedragon.Words();  
    for (var i = 0; i < player.animals.length; i++) {
    if (player.animals[i].constructor.name == "FireDragon") {
      AnimalScreen.feedFood();
    }   
    }
    }
    else if (mScreen==3){
      
    this.waterdragon= new WaterDragon(0,0);
    this.waterdragon.draw(); 
    this.waterdragon.Words();  
      for (var i = 0; i < player.animals.length; i++) {
    if (player.animals[i].constructor.name == "WaterDragon") {
      AnimalScreen.feedFood();
    }   
    }
    }
    else if (mScreen==4){
      
      
    this.moondragon= new MoonDragon(0,0);
    this.moondragon.draw(); 
    this.moondragon.Words(); 
      for (var i = 0; i < player.animals.length; i++) {
    if (player.animals[i].constructor.name == "MoonDragon") {
      screen.feedFood();
    }   
    }
    }
    
    else if (mScreen==5){
      
    this.kracken= new Kracken(0,0);
    this.kracken.draw(); 
    this.kracken.Words(); 
      for (var i = 0; i < player.animals.length; i++) {
    if (player.animals[i].constructor.name == "Kracken") {
      AnimalScreen.feedFood();
    }   
    }
    }
    else if (mScreen==6){
      
    this.unicorn= new Unicorn(0,0);
    this.unicorn.draw(); 
    this.unicorn.Words();
      for ( var i = 0; i < player.animals.length; i++) {
    if (player.animals[i].constructor.name == "Unicorn") {
      AnimalScreen.feedFood();
    }   
    }
    }
    else if (mScreen==7){
      
    this.pegasus= new Pegasus(0,0);
    this.pegasus.draw(); 
    this.pegasus.Words();  
      for (var i = 0; i < player.animals.length; i++) {
    if (player.animals[i].constructor.name == "Pegasus") {
      AnimalScreen.feedFood();
    }   
    }
    }
      textSize(50);
    text('Mythical', 80, 30);

 }
  
  
  
}
class Common extends Screen{
  constructor(){
  super();
     this.display = 0;
    this.hamster = hamster1;
    this.koi = koi1;
    this.bunny = bunny1;
    this.cat = cat1;
    this.dog = dog1;    
  }
  Update(){
    
    if (this.display == 0) {
      this.hamster = new Hamster(0, 0);
      this.hamster.draw();
      this.hamster.Words();
      for (var ci1 = 0; ci1 < player.animals.length; ci1++) {
    if (player.animals[ci1].constructor.name == "Hamster") {
      AnimalScreen.feedFood();
    }   
    }
      
    } else if (this.display == 1) {
      this.koi = new Koi(0, 0);
      this.koi.draw();
      this.koi.Words();
      for (var ci2 = 0; ci2 < player.animals.length; ci2++) {
    if (player.animals[ci2].constructor.name == "Koi") {
      AnimalScreen.feedFood();
    }   
    }
      
    } else if (this.display == 2) {
      this.bunny = new Bunny(0, 0);
      this.bunny.draw();
      this.bunny.Words();
      for (var i = 0; i < player.animals.length; i++) {
    if (player.animals[i].constructor.name == "Bunny") {
      AnimalScreen.feedFood();
    }   
    }
    } else if (this.display == 3) {
     
      this.cat = new Cat(0, 0);
      this.cat.draw();
      this.cat.Words();
   for (var i = 0; i < player.animals.length; i++) {

    if (player.animals[i].constructor.name == "Cat") {
      AnimalScreen.feedFood();
    }
  }
    } else if (this.display == 4) {
      this.dog = new Dog(0, 0);
      this.dog.draw();
      this.dog.Words();
   for (var i = 0; i < player.animals.length; i++) {

    if (player.animals[i].constructor.name == "Dog") {
      AnimalScreen.feedFood();
    }
  }
    }
    fill(0);
    textSize(50);
    text('Common', 80, 75)
    
    
  }
  
  
}