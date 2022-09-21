
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var count,engine,world,base,bloco1,bloco2,bloco3,bloco;

var forma = ["circle","square"]
var cores = [
"blue","red","cyan","violet","purple","pink","yellow","black","white",
"brown","orange","light_gray","light_blue","dark_green","light_orange"]

function setup() {

	createCanvas(400,400);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	base   = new Bloco(200,400,400,20,180,"square", "cyan",   "base",   0,   0,  0,0,0,0);
	bloco1 = new Bloco(220, 10,  0, 0, 10,"circle",  "red", "choose", 0.5,0.02,  0,2,0,3);
	bloco2 = new Bloco(110, 50, 10,10,  0,"square", "cyan", "choose", 0.7,0.01,0.1,2,0,0);
	bloco3 = new Bloco(350, 50, 10,10,  0,"square","green", "choose",0.01,   1,0.3,2,0,0);

	Engine.run(engine);
}
function ai(){
	setTimeout(() => {
		Per();
	},2000);
}
ai();
function draw(){
	
	background("lime");
	switch(count){
		case 1:
			bloco.display();
		break;		
	}
	base.display();
	bloco1.display();
	bloco2.display();
	bloco3.display();

	drawSprites();
	
	Engine.update(engine);
}
function Per() {
	setTimeout(() => {

		count = 1;
		ai();
		bloco = new Bloco(
		Math.round(random(5,350)),
		Math.round(random(5,350)),
		Math.round(random(1,50)),
		Math.round(random(1,50)),
		Math.round(random(1,50)),
		random(forma),
		random(cores),
		"random",0,0,0,0);
	},2000);
}


