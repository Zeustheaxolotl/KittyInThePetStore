class Animal{
 contructor(){
    
   
   this.title="name";
   this.words="hello";
   this.img=fox;
 }
  
 draw(){
  push(); 
  scale(0.75)
 image(this.img,0,0);
  pop(); 
 
 fill(255); 
 rect(300,0,100,200);
 }
Words(){
  fill(0);
  textSize(15); 
  text(this.title,301,15);
  textSize(10); 
  text(this.words,301,30,100,200);//text wraps within box
  
}
}
class Fox extends Animal{
 constructor(){
 super(); 
  this.img=fox; 
  this.title='Fox with 5 tails';
  this.words="A magical beast known for its wisdom and cunning. Using its smarts it maintains dominance in Northern Forests. Each tail represents a trait Balance Wits Agility Strength and Illusion."
 }
  
}
class Griffin extends Animal{
 constructor(){
 super(); 
  this.img=griffin; 
  this.title='Griffin';
  this.words="Master predators these creatures use their immense strength to rule the Mountains. While quite pround once you gain a griffins trust it will see you as equals."
 }
  
}
class FireDragon extends Animal{
 constructor(){
 super(); 
  this.img=fireDragon; 
  this.title='Fire Dragon';
  this.words="These dragons live near volcanoes in large settlements. Using their speed and strength against anyone who dare oppose them."
 }
  
  }
class WaterDragon extends Animal{
 constructor(){
 super(); 
  this.img=waterDragon; 
  this.title='Water Dragon';
  this.words="Living underwater these dragons communicate with a series of flashing lights on their wings. They can breathe in and out of water."
 }
  
  }
class MoonDragon extends Animal{
 constructor(){
 super(); 
  this.img=moonDragon; 
  this.title='Moon Dragon';
  this.words="these nocturnal dragons live in almost every biome. Their camoflauge helps them to dive silently and catch their prey by surprise."
 }
  
  }
class Kracken extends Animal{
 constructor(){
 super(); 
  this.img=kracken; 
  this.title='Kracken';
  this.words="Mostly known for sinking ships and the reason the Bermuda Triangle exists, Kracken have a soft side that can be accessed when one proves themself loyal."
 } 
  }
class Unicorn extends Animal{
 constructor(){
 super(); 
  this.img=unicorn; 
  this.title='Unicorn';
  this.words="Notable for their extreme healing gifts, drinking a unicorns blood turns you immortal. However taking its power for selfish reasons always ends badly. If you are patient and gain a unicorns trust they might gift you some of their power."
 }
  
  }
class Pegasus extends Animal{
 constructor(){
 super(); 
  this.img=pegasus; 
  this.title='Pegasus';
  this.words="Pegasus was born from Medusa's head in greek Mythology, and did good deeds with Bellorophan as his steed. Now his decendants travel from continent to continent helping people in need."
 }
  
  }
class Hamster extends Animal{
 constructor(){
 super(); 
  this.img=hamster; 
  this.title='Hamster';
  this.words="Small common house pets Hamsters can have their own playscape with a ball they could run around in or a wheel they can run on."
 }
  
  }
class Koi extends Animal{
 constructor(){
 super(); 
  this.img=koi; 
  this.title='Koi';
  this.words="Koi fish are originally from Japan and other parts of Asia. Due to the colorful patterns on their skin they are often kept in indoor pools or waterfall gardens."
 }
  
  }

class Bunny extends Animal{
 constructor(){
 super(); 
  this.img=bunny; 
  this.title='Bunny';
  this.words="Small and timid creatures bunnnies are shy backyard animals with a fondness for carrots and other greens. Their giant ears have incredible hearing to alert the bunny when it might be in danger."
 } 
  }

class Cat extends Animal{
 constructor(){
 super(); 
  this.img=cat; 
  this.title='Cat';
  this.words="Often cats don't show affection in ways most people understand but really they do love their humans. If a cat blinks its eyes slowly while looking straight at you it means you have gained their trust and love."
 }
  }

class Dog extends Animal{
 constructor(){
 super(); 
  this.img=dog; 
  this.title='Dog';
  this.words="Loyal and jolly dogs often are fiercely loyal to their owners. While some love to cuddle others can help farmers and some can be threatening but really have a soft side."
 }
  
  }