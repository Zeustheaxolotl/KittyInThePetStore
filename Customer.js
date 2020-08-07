class Customer {
  constructor() {
    this.popup = false;
    this.animalstext = ['cat', 'dog', 'koi', 'hamster', 'bunny']
    this.confirmationAnimal0 = false;
    this.confirmationAnimal1 = false;
    this.confirmationAnimal2 = false;
    this.confirmationAnimal3 = false;
    this.confirmationAnimal4 = false;
  }
  draw() {
    //print(count)
    if (count > 500&&count<30000) {
      push();
      scale(0.5);
      image(morgan, 20, 250);
      pop();
      fill(255);
      rect(100, 200, 160, 50);
      fill(0);
      text('Favorite Species: Cat', 100, 210);
      text(' Name: Morgan', 100, 250);
      if (mouseIsPressed) {
        if (mouseY > 155 && mouseY < 300) {
          if (mouseX > 75 && mouseX < 220) {
            this.popup = true

          }
        }
      }
    
    if (this.popup) {
      fill(255);
      rect(50, 100, 50, 100);
      fill(0);
      for (var j = 0; j < 5; j++) {
        text(this.animalstext[j], 50, 20 * j + 121);
      }
    }



      if (mouseIsPressed) {
        if ((mouseX > 50 && mouseX < 70) && (mouseY > 110 && mouseY < 120)) {
          print(player.animals);
          for (var i = 0; i < player.animals.length; i++) {
            if (player.animals[i].constructor.name == "Cat") {
              count = 30001
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