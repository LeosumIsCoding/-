
<template>

<canvas ref="canvas" id="canvas" width="600" height="800" style="border:1px solid black">

</canvas>


</template>


<script setup lang="ts">
  import {ref, onMounted, toRef} from 'vue';
  import {CanvasEngine} from './canvasJs/canvasEngine'
  import {CanvasConfigInterface} from './canvasJs/CanvasConfigInterface'
  const canvas = ref(null);



  onMounted(()=>{

    let config:CanvasConfigInterface = {
    width: 1000,
    height: 600,
    fps: 30,
}
    const canvasEngine = new CanvasEngine(canvas.value!, config);
  })




  

  
  
  
  
</script>
  

<style scoped>

#myCanvas{
height: 800px;
width: 600px;
background-color: antiquewhite;
}

</style>
