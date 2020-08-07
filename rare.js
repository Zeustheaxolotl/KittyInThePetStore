var screenRare=0;
var title; 
var words;
class Rare {

  //let img; 
  constructor(image) {
    this.screenRare=screenRare;
    this.img=image;
    this.food=food;
  }
  draw() {
    fill(255);
    rect(300,0,99,200);
   
    
     title= 'Octopus'
       words= 'The octopus one of the most flexible animals in the world.Anything the beak can fit through so can the body. Not only are octopuses smart they often hypnotize their prey by drugging them with ink.'

    textSize(0);
    fill(0);
    text(title,301,10,100,10);
    textSize(10);
    text(words, 301, 20, 100, 260); // Text wraps within text box
    push();
   scale(0.75);
    image(this.img, 0, 0);
    pop();
    textSize(50); 
    text('Rare',80,75)
    
    push();
    scale(0.3075);
    image(this.food,950,650);
    pop();
    textSize(15); 
    fill(0);
        var newtextfood = 'x ' + str(player.food);
    text(newtextfood,350,300);
     fill(0);
    rect(0,0,35,25);
    fill(255);
    rect(10,10,20,7);
    triangle(5,15,15,5,15,22);//back button 
    if (mouseIsPressed){
     if(mouseX>0&&mouseX<35){
      if(mouseY>0&&mouseY<25){
       screen=1; 
      }
     }
    }
  
      var store= new Store();
    store.popUp();
  }
}
class Octopus{
  
  
  
  
}