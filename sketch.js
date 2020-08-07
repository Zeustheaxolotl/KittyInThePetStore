function preload() {
  fox = loadImage('fox .jpg');
  octopus = loadImage('octopus.jpg');
  hamster = loadImage('hamster.jpg');
  fireDragon = loadImage('fire dragon.jpg');
  waterDragon = loadImage('Water Dragon.jpg');
  griffin = loadImage('griffin.jpg');
  koi = loadImage('koi.jpg');
  bunny = loadImage('Bunny.jpg');
  moonDragon = loadImage('MoonDragon .jpg');
  cat = loadImage('Cat.jpg');
  dog = loadImage('Dog.jpg');
  unicorn = loadImage('Unicorn.jpg');
  pegasus = loadImage('Pegasus.jpg');
  kracken = loadImage('Kracken.jpg');
  food = loadImage('food.jpg');
  isabella = loadImage('Isabella.jpg');
  morgan = loadImage('Morgan.jpg');
}


function setup() {
  createCanvas(400, 400);
  homescreen = new HomeScreen();
  rare = new Rare(octopus);
  starterscreen = new StarterScreen();
  player = new Player();
  store = new Store();
  AnimalScreen = new Screen();
  mythical = new Mythical();
  CommonScreen = new Common();
  customer = new Customer();



}

function draw() {

  // CommonScreen = new Common();
count++;
  background(255);



  if (screen == 0) {
    starterscreen.draw();
  } else if (screen == 1) {
    homescreen.draw();
    customer.draw();
  } else if (screen == 2) {
    mythical.Update();
    mythical.draw();
    //screen.draw()
  } else if (screen == 3) {
    rare.draw();
  } else if (screen == 4) {
    CommonScreen.Update();
    CommonScreen.draw();
  } else if (screen == 5) {
    store.draw();
  }
}

function mousePressed() {
  print(mouseX);
  print('mousey');
  print(mouseY);

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    if (screen == 2) {
      mScreen++;
      if (mScreen > 7) {
        mScreen = 7;
      }
    } else if (screen == 4) {
      CommonScreen.display++;
      //cScreen++

      if (CommonScreen.display > 4) {
        CommonScreen.display = 4;
      }
    }
  }
  if (keyCode === DOWN_ARROW) {
    if (screen == 2) {
      mScreen += -1;
      if (mScreen < 0) {
        mScreen = 0;
      }
    } else if (screen == 4) {
      CommonScreen.display += -1;
      if (CommonScreen.display < 0) {
        CommonScreen.display = 0;
      }
    }
  }
}