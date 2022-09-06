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
    top:number = 0;

    width:number = 50;
    height:number = 50;

    config:CanvasConfigInterface;

    constructor(config:CanvasConfigInterface){
        super();
        this.config = config
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
            this.top += 0.01;
        }
    }
    down(){
        if(this.top !== 750){
            this.top += 1;
        }
    }

    draw(ctx: CanvasRenderingContext2D, config:CanvasConfigInterface): void {

        ctx.fillRect(this.left, this.top, this.width,this.height);
        this.down()
        console.log(this.top);
        
    }
}

const canvasObject_1_config:CanvasConfigInterface = {
    width: 0,
    height: 0,
    fps: 0
}
const canvasObject_ = new CanvasObject_1( );

const canvasObject_1:CanvasObject = {
    width: 50,
    height: 50,
    draw: function (ctx: CanvasRenderingContext2D): void {
        throw new Error("Function not implemented.");
    },
    setName: function (name: String): void {
        // this.setName(name);
        console.log(this.name);
        
    },
    printName: function (): void {
        // this.printName();
    }
}


canvasObjects.push(canvasObject_)



