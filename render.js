cs = {};
suits = 'DCHS';
number = '34567890JQKA2';
cards = {}
function preload(){
    for (x = 0; x<52; x++){
        cs[number[floor(x/4)]+suits[x%4]] = (loadImage('cards/'+number[floor(x/4)]+suits[x%4]+'.png'))
    }
}

function setup(){
    createCanvas(500,500);
    player = new Player();
    player.cards = [new Card('JH')]
}

function draw(){
    player.display()
}
function Card(v){
    this.value = v;

    this.draw = function (x,y) {
        image(cs[this.value],x,y)
    }
}

function Container () {
    this.cards = [];
}

function Player () {
    Container.call(this);

    this.x = 0;
    this.y = 0;
    this.display = function () {
        this.cards.forEach(x => x.draw(10,10))
    }
}

