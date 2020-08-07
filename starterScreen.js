class StarterScreen {
  constructor() {
    this.screen = screen;
    this.fox = fox;
    this.octopus = octopus;
    this.hamster = hamster;
    this.koi=koi; 
    this.bunny=bunny;
    this.cat=cat; 
    this.dog=dog

  }
  draw() {
    background(255);
    textSize(18);
    fill(0);
    text('hit enter to start', 100, 370);
    push();
    scale(0.25);
    image(this.octopus, 350, 90);
    image(this.fox, 950, 100);
    image(this.hamster, 0, 200);
    pop();
    if (keyCode === ENTER) {
      fill(255);
      rect(50, 100, 320, 130);
      fill(8, 247, 226);
      push();
      scale(0.1875);
      image(this.hamster, 350, 615); 
      pop();
      text('hamster', 60, 215);
      
      push();
      scale(0.1875);
      image(this.koi, 870, 615);
      pop();
      text('fish', 190, 215);
      push();
      scale(0.1875);
      image(this.cat, 650, 615);
      pop();
            push();

      text('cat', 140, 215);
      scale(0.1875);
      image(this.bunny, 1250, 615);
      pop();
      text('bunny', 235, 215);
      push();
      scale(0.1875);
      image(this.dog, 1547, 615);
      pop();
      text('dog', 295, 215);
      fill(0);
      text('Select your starter animal.', 101, 101, 300, 200);

      if (mouseIsPressed) {
        //print("here");
        if ((mouseX > 295 && mouseX < 346) && (mouseY > 170 && mouseY < 300)) {
print('dog');        

          screen = 1; //creates a portal to the mythical creatures 
          //commonSpecies = 0; 

          player.addAnimal(new Dog());
        }
        if ((mouseX > 235 && mouseX < 286) && (mouseY > 170 && mouseY < 300)) {
          screen = 1;
          player.addAnimal(new Bunny(),"Bunny");
        }
        if ((mouseX > 180 && mouseX < 226) && (mouseY > 170 && mouseY < 300)) {
          screen = 1;
          //commonSpecies = 2
          player.addAnimal(new Koi(),"Koi");
        }
        if ((mouseX > 140 && mouseX < 180) && (mouseY > 170 && mouseY < 300)) {
          screen = 1
          //commonSpecies = 3; 
         // print('cat');
          player.addAnimal(new Cat(), "Cat");
        }
        if ((mouseX > 60 && mouseX < 120) && (mouseY > 170 && mouseY < 300)) {
          screen = 1;
//    commonSpecies=4;
          
          player.addAnimal(new Hamster(), "Hamster");
          print('hamster');
        }

      }

    }
  }
}