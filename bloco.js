class Bloco{

    constructor(x,y,w,h,angle,shape,color,options,restitution,friction,frictionAir,density,img,sides){
    
        this.inf = [shape,color,x,y];
        
        this.body_options;
        this.body;

        switch (options){
            
            case "base":
                
                this.body_options = {
       
                    isStatic:true,
                }
            break;

            case "random":

                this.body_options = {
        
                    restitution: Math.round(random(1,2)),
                    friction:Math.round(random(1,2)),
                    frictionAir:Math.round(random(1,2)),
                    density:Math.round(random(1,2)),
                    isStatic:false,
                }
            break;
            
            case "choose":
                
                this.body_options = {
        
                    restitution:restitution,
                    friction:friction,
                    frictionAir:frictionAir,
                    density:density,
                    isStatic:false,
            
                }       
            break;    
        }

        switch(this.inf[0]){
            
            case"circle":
            
                this.inf.push(angle);
                
                this.body = Bodies.circle(this.inf[2],this.inf[3],this.inf[4],this.body_options);
                World.add(world,this.body);
                break;
            
            case"square":
           
                this.inf.push(w,h);

                this.body = Bodies.rectangle(this.inf[2],this.inf[3],this.inf[4],this.inf[5],this.body_options);
                World.add(world,this.body);
            break;

            case"image":

                this.image = loadImage(img);
            
                this.inf.push(w,h);
            
                this.body = Bodies.rectangle(this.inf[2],this.inf[3],this.inf[4],this.inf[5],this.body_options);
                World.add(world,this.body);    
            break;

            case"trapezoid":
            break;

            case"polygon":

                this.inf.push(sides,angle);
                
                this.body = Bodies.polygon(x,y,sides,angle,this.body_options);
                World.add(world,this.body);
            break;
        }

    }
    
    display(){
    
        switch(this.inf[0]){

            case"circle":

                ellipseMode(CENTER);

                push();

                    fill(this.inf[1]);
                    ellipse(this.body.position.x,this.body.position.y,this.inf[4]);

                pop();
            break;
            
            case"square":

                rectMode(CENTER);
                
                push();

                fill(this.inf[1]);
                rect(this.body.position.x,this.body.position.y,this.inf[4],this.inf[5]);

                pop();
            break;

            case"image":

                imageMode(CENTER);
                image(this.image,this.body.position.x,this.body.position.x,this.inf[4],this.inf[5]);
            break;

            case"trapezoid":

            break;

            case"polygon":

            //polygon(this.body.position.x,this.body.position.y,this.inf[4],this.inf[5]);
            break;
        }
        
    }
}