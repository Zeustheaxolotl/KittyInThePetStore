class Store {
  constructor() {
    this.confirmation = false;
    this.confirmationAnimal0 = false;
    this.confirmationAnimal1 = false;
    this.confirmationAnimal2 = false;
    this.confirmationAnimal3 = false;
    this.confirmationAnimal4 = false;

    this.food = food
    this.animalsText = ['Cat', 'Dog', 'Koi', 'Hamster', 'Bunny'];

  }
  popUp() {
    fill(255);
    rect(0, 300, 400, 100);
    fill(0);
    textSize(32);
    text('Store', 160, 350);
    if (mouseIsPressed) {
      if ((mouseY > 300) && (mouseY < height)) {
        screen = 5
      }
    }
  }
  draw() {
    fill(0);
    textSize(50);
    text('Store', 100, 50);
    textSize(15);
    text('food', 50, 75);
    line(100, 100, 100, 400);
    playerInfo = new PlayerInfo(300, 40);
    playerInfo.draw(300, 40);
    fill(0);
    rect(0, 0, 35, 25);
    fill(255);
    rect(10, 10, 20, 7);
    triangle(5, 15, 15, 5, 15, 22); //back button 
    if (mouseIsPressed) {
      if (mouseX > 0 && mouseX < 35) {
        if (mouseY > 0 && mouseY < 25) {
          screen = 1;
        }
      }
    }
    push();
    scale(0.1875);
    image(this.food, 55, 600);
    pop();
    fill(0);
    text('price: 5', 45, 200);
    if (mouseIsPressed) {
      if ((mouseY > 120) && (mouseY < 170)) {
        if ((mouseX > 20) && (mouseX < 75))
          if (player.money > 4) {
            this.confirmation = true;
          }
      }
    }
    //print(this.confirmation);
    if (this.confirmation) {
      fill(255)
      rect(200, 200, 100, 50);
      fill(0);
      text('Are you sure?', 201, 211);
      fill(0, 255, 0);
      rect(280, 230, 20, 20);
      fill(255, 0, 0);
      rect(200, 230, 20, 20);

    }
    if (this.confirmationAnimal0) {
      fill(255)
      rect(200, 200, 100, 50);
      fill(0);
      text('Are you sure?', 201, 211);
      fill(0, 255, 0);
      rect(280, 230, 20, 20);
      fill(255, 0, 0);
      rect(200, 230, 20, 20);

    }
    if (this.confirmationAnimal1) {
      fill(255)
      rect(200, 200, 100, 50);
      fill(0);
      text('Are you sure?', 201, 211);
      fill(0, 255, 0);
      rect(280, 230, 20, 20);
      fill(255, 0, 0);
      rect(200, 230, 20, 20);

    }
    if (this.confirmationAnimal2) {
      fill(255)
      rect(200, 200, 100, 50);
      fill(0);
      text('Are you sure?', 201, 211);
      fill(0, 255, 0);
      rect(280, 230, 20, 20);
      fill(255, 0, 0);
      rect(200, 230, 20, 20);

    }
    if (this.confirmationAnimal3) {
      fill(255)
      rect(200, 200, 100, 50);
      fill(0);
      text('Are you sure?', 201, 211);
      fill(0, 255, 0);
      rect(280, 230, 20, 20);
      fill(255, 0, 0);
      rect(200, 230, 20, 20);

    }
    if (this.confirmationAnimal4) {
      fill(255)
      rect(200, 200, 100, 50);
      fill(0);
      text('Are you sure?', 201, 211);
      fill(0, 255, 0);
      rect(280, 230, 20, 20);
      fill(255, 0, 0);
      rect(200, 230, 20, 20);

    }



    if (mouseIsPressed) {
      if ((mouseY > 230) && (mouseY < 250)) {
        if ((mouseX > 200) && (mouseX < 210)) {
          this.confirmation = false;
          this.confirmationAnimal0 = false;
          this.confirmationAnimal1 = false;
          this.confirmationAnimal2 = false;
          this.confirmationAnimal3 = false;
          this.confirmationAnimal4 = false;

        }
      }
    }
    if (this.confirmation) {
      if (mouseIsPressed) {
        if ((mouseY > 230) && (mouseY < 250)) {
          if ((mouseX > 280) && (mouseX < 300)) {
            if (this.confirmation) {
              this.confirmation = false;
              player.addFood(1);
            }
          }
        }
      }
    }
    //print(this.confirmationAnimal0)
    if (this.confirmationAnimal0) {
      if (mouseIsPressed) {
        if ((mouseY > 230) && (mouseY < 250)) {
          if ((mouseX > 280) && (mouseX < 300)) {
            //print('here');
            this.confirmationAnimal0 = false;
            player.addAnimal(new Cat(), "Cat");

          }
        }
      }
    }
    if (this.confirmationAnimal1) {
      if (mouseIsPressed) {
        if ((mouseY > 230) && (mouseY < 250)) {
          if ((mouseX > 280) && (mouseX < 300)) {
            //print('here');
            this.confirmationAnimal1 = false;
            player.addAnimal(new Dog(), "Dog");

          }
        }
      }
    }
    if (this.confirmationAnimal2) {
      if (mouseIsPressed) {
        if ((mouseY > 230) && (mouseY < 250)) {
          if ((mouseX > 280) && (mouseX < 300)) {
            //print('here');
            this.confirmationAnimal2 = false;
            player.addAnimal(new Koi(), "Koi");

          }
        }
      }
    }
    if (this.confirmationAnimal3) {
      if (mouseIsPressed) {
        if ((mouseY > 230) && (mouseY < 250)) {
          if ((mouseX > 280) && (mouseX < 300)) {
            //print('here');
            this.confirmationAnimal3 = false;
            player.addAnimal(new Hamster(), "Hamster");

          }
        }
      }
    }
    if (this.confirmationAnimal4) {
      if (mouseIsPressed) {
        if ((mouseY > 230) && (mouseY < 250)) {
          if ((mouseX > 280) && (mouseX < 300)) {
            //print('here');
            this.confirmationAnimal4 = false;
            player.addAnimal(new Bunny(), "Bunny");

          }
        }
      }
    }


    fill(0);
    line(200, 100, 200, 400);
    text('animals', 120, 75);
    fill(0, 200, 255);
    //print('Here');
    for (var z = 0; z < 5; z++) {
      // print('here');
      text(this.animalsText[z], 130, 130 + 20 * z);



    }


    if (player.points > 4) {

      if (mouseIsPressed) {
        if ((mouseX > 130 && mouseX < 150) && (mouseY > 115 && mouseY < 130)) {

          this.confirmationAnimal0 = true;
          for (var i = 0; i < player.animals.length; i++) {
            if (player.animals[i].constructor.name == "cat") {
            this.confirmationAnimal0 = false;
          }
          }
        }
      }

      if (mouseIsPressed) {
        if ((mouseX > 130 && mouseX < 150) && (mouseY > 140 && mouseY < 155)) {
          this.confirmationAnimal1 = true;
        }
        for (var i = 0; i < player.animals.length; i++) {
          if (player.animals[i].constructor.name == "dog") {
          this.confirmationAnimal1 = false;
        }
        }
      }
      if (mouseIsPressed) {
        if ((mouseX > 130 && mouseX < 150) && (mouseY > 160 && mouseY < 175)) {
          this.confirmationAnimal2 = true;
          for (var i = 0; i < player.animals.length; i++) {
            if (player.animals[i].constructor.name == "Koi") {
            this.confirmationAnimal2 = false;
          }
          }
        }
      }
      if (mouseIsPressed) {
        if ((mouseX > 130 && mouseX < 190) && (mouseY > 180 && mouseY < 195)) {
          this.confirmationAnimal3 = true;
          for (var i = 0; i < player.animals.length; i++) {
            if (player.animals[i].constructor.name == "Hamster") {
            this.confirmationAnimal3 = false;
            }
          }

        }
      }
      if (mouseIsPressed) {
        if ((mouseX > 130 && mouseX < 170) && (mouseY > 200 && mouseY < 215)) {
         // print('here');
          this.confirmationAnimal4 = true;
          for (var i = 0; i < player.animals.length; i++) {
            if (player.animals[i].name == "bunny") { 

            this.confirmationAnimal4 = false;
           // print('Here')
            }
          }
        }
      }
    }

  }
}