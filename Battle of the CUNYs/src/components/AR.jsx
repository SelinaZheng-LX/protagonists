import React from "react";

export default function AR() {
    return(
        <>
         <div id="header"> 
      <h1 id="caption"> Meet our Hunter Mascot! </h1>
    </div>
    <div id="scanning-overlays" class="hidden">
      <div>
        <model-viewer camera-controls alt="Model" src="./assets/2d/animals/hunter.glb"></model-viewer>
      </div>
    </div>
    <div class="hearts">
      <div class="heart"></div>
      <div class="heart"></div>
      <div class="heart"></div>
      <div class="heart"></div>
    </div>
    <a-scene id="arScene" mindar-image="uiScanning: #scanning-overlays; imageTargetSrc: ./assets/2d/targets.mind; maxTrack: 2" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        <a-asset-item id="cat" src="./assets/3d/animals/cat.glb"></a-asset-item>
        <a-asset-item id="duck" src="./assets/3d/animals/duck.glb"></a-asset-item>
        <a-asset-item id="elephant" src="./assets/3d/animals/elephant.glb"></a-asset-item>
        <a-asset-item id="goat" src="./assets/3d/animals/goat.glb"></a-asset-item>
        <a-asset-item id="monkey" src="./assets/3d/animals/monkey.glb"></a-asset-item>
        <a-asset-item id="rabbit" src="./assets/3d/animals/rabbit.glb"></a-asset-item>
        <a-asset-item id="raccoon" src="./assets/3d/animals/raccoon.glb"></a-asset-item>
        <a-asset-item id="snake" src="./assets/3d/animals/snake.glb"></a-asset-item>
        <a-asset-item id="tiger" src="./assets/3d/animals/tiger.glb"></a-asset-item>
        <a-asset-item id="apple" src="./assets/3d/food/apple.glb"></a-asset-item>
        <a-asset-item id="banana" src="./assets/3d/food/banana.glb"></a-asset-item>
        <a-asset-item id="hunter" src="./assets/3d/animals/hunter.glb"></a-asset-item>
      </a-assets>
      <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="far: ${customFields.libVersion}; objects: .clickable"></a-camera>
    </a-scene>
        </>
    )
}