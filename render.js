cs = [];
suit = 'DCHS';
number = '34567890JQKA2';
cards = {}
players = []
canvsize = [500,500]
nword = true;
function preload(){
    for (var x = 0; x<52; x++){
        cs.push(loadImage('cards/'+number[floor(x/4)]+suit[x%4]+'.png'))
    }
}

function setup(){
    createCanvas(canvsize[0],canvsize[1]);
    for (var x = 0; x<13; x++){
        for (var y = 0; y<4; y++){
            val = number[x]+suit[y]
            cards[val] = new Card(val,cs[x*4+y])
        }
    }
    for (var x = 0; x<4; x++){
        players.push(new Player(x))
    }
    players[0].cards = ['JH','9S']
    pile = new Centre();
    pile.card = 'JH'
}
x = 0
y = 0
function draw(){
    if(nword){
        players[0].display();
    }
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

function Container () {
    this.cards = [];
}

function Player (n) {
    Container.call(this);

    this.x = 0;
    this.y = 0;
    this.pn = n;
    this.display = function () {
        this.cards.forEach((x,y) => cards[x].draw(100,100*y))
    }
}
function Centre(){
    this.card = '';
    this.draw = function(){
        if (this.card.length > 0) {
            image(cards[this.card],canvsize[0]/2,canvsize[1]/2)
        }
    }
}

// function playcard(loc,card){
//     this.card
// }
function play(player,card){
    player.hand = player.hand.filter(function(value){return value != card;});
    actions.push()
}
function mover(card,speed){
    this.xp = 
}
