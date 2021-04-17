this.color=color(random(0,255),random(0,255),random(0,255))

var particles=[];
var plinkos=[];
var divisions=[];

function particles(){

    if(framecount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
    }
}

display();