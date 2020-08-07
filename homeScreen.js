class HomeScreen {
  construct(){
   this.screen=screen; 
  }
  draw(){
   background(200); 
    //print(player);
    fill(112,78,11);
    rect(0,300,400,100);// floor 
    
    fill(100);
    rect(33,170,60,130);
    fill(233,196,89);
    circle(83,230,10);
    fill(0);
    textSize(15);
    text('Common',33,167);// common door 
    
    fill(100);
    rect(163,170,60,130);
    fill(233,196,89);
    circle(213,230,10);
    fill(0);
    textSize(15);
    text('Rare',177,167); // rare door 
    
    fill(100);
    rect(293,170,60,130);
    fill(233,196,89);
    circle(343,230,10);
    fill(0);
    textSize(15);
    text('Mythical',293,167);// mythical door
    // Player info
    var playerInfo= new PlayerInfo(300,40);
    playerInfo.draw();
   if(mouseIsPressed){
     //print("here");
     if((mouseX>293&&mouseX<353)&&(mouseY>170&&mouseY<300)){
    if(player.level>=3){
    screen=2; //creates a portal to the mythical creatures 
    }
     }
   
   
     if((mouseX>163&&mouseX<213)&&(mouseY>170&&mouseY<300)){
    if(player.level>=2){
    screen=3; //creates a portal to the rare creatures 
    }
     }
     if((mouseX>33&&mouseX<93)&&(mouseY>170&&mouseY<300)){
    screen=4 // creates a portal to the common creatures 
     }
     }
  
  }
}