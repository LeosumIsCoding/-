import {CanvasConfigInterface} from './CanvasConfigInterface'
import { canvasObjects, CanvasObject } from './canvasObjects';



class Renderer{
    config:CanvasConfigInterface;
    width:number;
    height:number;
    ctx:CanvasRenderingContext2D ;
    canvasObjects:CanvasObject[];

    constructor(config:CanvasConfigInterface, ctx:CanvasRenderingContext2D ,canvasObjects:CanvasObject[]){
        this.config = config;
        this.width = config.width;
        this.height = config.height;
        this.ctx = ctx;
        this.canvasObjects = canvasObjects;
        this.render()


        
    }
    private render(){

        let i = 1;

        const tick = ()=>{

            this.ctx.clearRect(0,0,this.width, this.height)
            this.canvasObjects.forEach((value:CanvasObject,index:number,array:CanvasObject[])=>{
                value.draw(this.ctx, this.config);
                i++;
            })
            // console.log(i);
            requestAnimationFrame(tick)
        }
        tick();
        


        

    }
    public startRender(){
        this.render();
    }

}

class Window{
    width:Number;
    height:Number;

    constructor(width:Number, height:Number){
        this.width = width;
        this.height = height;
    }
}


export class CanvasEngine{
    canvasObjects:CanvasObject[];
    canvas:HTMLCanvasElement;
    renderer:Renderer;
    constructor(canvas:HTMLCanvasElement, configer:CanvasConfigInterface){
        if(canvas.getContext == null){
            alert("error")
        }
        this.canvasObjects = canvasObjects;
        this.canvas = canvas;
        this.canvas.width = configer.width;
        this.canvas.height = configer.height;


        const ctx = canvas.getContext('2d')!;
        this.renderer = new Renderer(configer, ctx, this.canvasObjects);
        this.renderer.startRender();
        console.log(ctx, this.renderer);
    }
}