import * as THREE from "three";
//导入场景
import scene from "@/three/scene";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function createCity() {
  const gltfLoader = new GLTFLoader();
  gltfLoader.load("./model/city.glb", (gltf) => {
    console.log(gltf);
    gltf.scene.traverse((item) => {
      item.material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(0x00ffff),
      });
    });
    scene.add(gltf.scene);
  });
}
