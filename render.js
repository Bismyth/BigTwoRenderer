cs = {};
suit = 'DCHS';
number = '34567890JQKA2';
cards = {}
players = []
function preload(){
    for (var x = 0; x<52; x++){
        cs.push(loadImage('cards/'+number[floor(x/4)]+suits[x%4]+'.png'))
    }
}

function setup(){
    createCanvas(500,500);
    for (var x = 0; x<13; x++){
        for (var y = 0; y<4; y++){
            val = number[x]+suit[y]
            cards[val] = new Card(val,cs[x*4+y])
        }
    }
    for (var x = 0; x<4; x++){
        players.push(new Player(x))
    }
    player[0].cards = ['JH','9S']

}

function draw(){
    player[0].display()
}
function Card(v,s){
    this.value = v;
    this.source = s;
    this.draw = function (x,y) {
        image(this.source,x,y)
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

