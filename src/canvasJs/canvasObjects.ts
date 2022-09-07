import { CanvasConfigInterface } from "./CanvasConfigInterface";



export abstract class CanvasObject{

    name?:String = 'canvasObject';
    width:Number = 100;
    height:Number = 60;
    abstract config:CanvasConfigInterface;
    constructor(){
    }

    public setName(name:String){
        this.name = name;
    }
    public printName(){
        console.log(this.name);
        
    }

    abstract draw(ctx:CanvasRenderingContext2D, CanvasConfig:CanvasConfigInterface):void;
}

export const canvasObjects:CanvasObject[] = [];

class CanvasObject_1 extends CanvasObject{
    left:number = 0;
    top:number = 500;

    width:number = 50;
    height:number = 50;

    config:CanvasConfigInterface;

    constructor(config:CanvasConfigInterface){
        super();
        this.config = config
        
        var flag = true

        window.onkeydown = (e:KeyboardEvent)=>{
            if(flag){
                var upInterval = setInterval(()=>{
                    if(e.key == 'w'){
                        this.up()
                    }else if(e.key == 's'){
                        this.down();
                    }
                },)
                flag = false;
            }
            window.onkeyup = function(){
                for(var i = 1; i<= upInterval; i++){
                    clearInterval(i);
                }
                flag = true
            }
        }
    }

    setSize(width:number, height:number){
        this.width = width;
        this.height = height;
    }
    setPosition(left:number, top:number){
        this.left = left;
        this.top = top;
    }

    up(){
        if(this.top != 0){
            this.top -= 10;
        }
    }
    down(){
        if(this.top !== 550){
            this.top += 10;
        }
    }

    draw(ctx: CanvasRenderingContext2D, config:CanvasConfigInterface): void {
        ctx.fillRect(this.left, this.top, this.width,this.height);
        // this.up()wwaawwwwwwwwwwwwwww
        // console.log(this.top);
    }
}

const canvasObject_1_config:CanvasConfigInterface = {
    width: 0,
    height: 0,
    fps: 0
}
const canvasObject_ = new CanvasObject_1( canvasObject_1_config);




canvasObjects.push(canvasObject_)



