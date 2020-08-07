class PlayerInfo {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    var newtextm = 'Money: ' + str(player.money);
    text(newtextm, this.x, this.y, 100, 20);
    var newtextf = 'Food: ' + str(player.food);
    text(newtextf, this.x, this.y + 20, 100, 20);
    var newtextp = 'Points: ' + str(player.points);
    text(newtextp, this.x, this.y + 40, 100, 20);
    var newtextl = 'Level: ' + str(player.level);
    text(newtextl, this.x, this.y+60,100,20);

  }
}