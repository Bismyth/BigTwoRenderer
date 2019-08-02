cs = [];
suit = 'DCHS';
number = '34567890JQKA2';
cards = {}
players = []
canvsize = [800,800];
cent = [];
nword = true;
actions = [];
speed = 40;
function preload(){
    for (var x = 0; x<52; x++){
        cs.push(loadImage('cards/'+number[floor(x/4)]+suit[x%4]+'.png'));
    }
}
function setup(){
    createCanvas(canvsize[0],canvsize[1]);
    for (var x = 0; x<13; x++){
        for (var y = 0; y<4; y++){
            val = number[x]+suit[y];
            cards[val] = new Card(val,cs[x*4+y]);
        }
    }
    for (var x = 0; x<4; x++){
        players.push(new Player(x));
    }
    players[0].cards = ['JH','9S'];
    players[1].cards = ['0H','JS'];
    players[2].cards = ['AC','2D'];
    players[3].cards = ['KD','0C'];
    pile = new Centre();
    //cent = [(canvsize[0]-cs[0].width)/2,(canvsize[1]-cs[0].height)/2];
    cent = [700,700];
}
x = 0
y = 0
function draw(){
    background(7,99,36);
    translate(width / 2, height / 2);
    rotate(PI / 3.0);
    if(actions.length > 0){
        actions.forEach(x => x.update());
    }
    pile.display();
    players.forEach(x => x.display());
    
}
function Card(v,s){
    this.value = v;
    this.source = s;
    this.x = 0;
    this.y = 0;
    this.draw = function (x,y) {
        image(this.source,this.x = x,this.y = y)
    }
}
function Player (n) {
    this.cards = []
    this.x = 0;
    this.y = 0;
    this.pn = n;
    this.display = function () {
        this.cards.forEach((x,y) => cards[x].draw(72*y,110*this.pn))
    }
}
function Centre(){
    this.card = '';
    this.display = function(){
        if (this.card.length > 0) {
            cards[this.card].draw(cent[0],cent[1]);
        }
    }
}
function play(player,card,speed){
    player.cards = player.cards.filter(function(value){return value != card;});
    actions.push(new Mover(cards[card],speed));
}
function Mover(card){
    this.card = card.value;
    this.x = card.x;
    this.y = card.y;
    this.mx = (cent[0] - card.x)/speed;
    this.my = (cent[1] - card.y)/speed;
    this.exist = speed;
    console.log(this.x,this,y,this.mx,this.my,this.exist);
    this.update = function(){
        this.x += this.mx;
        this.y += this.my;
        cards[this.card].draw(this.x,this.y);
        this.exist --;
        if(this.exist <= 0){
            actions.shift();
            pile.card = this.card;
        }
    }
}
