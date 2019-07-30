cs = [];
suits = 'DCHS';
number = '34567890JQKA2';
function preload(){
    for (x = 0; x<52; x++){
        cs.push(loadImage('cards/'+number[floor(x/4)]+suits[x%4]+'.png'))
    }
}

function setup(){
    createcanvas(500,500);
    console.log(cs)
}

function draw(){

}