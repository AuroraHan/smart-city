import * as THREE from "three";
//导入场景
import scene from "@/three/scene";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import modifyCityMaterial from "../modify/modifyCityMaterial";
import FlyLine from "./flyLine";
import FlyLineShader from "./flyLineShader";

export default function createCity() {
  const gltfLoader = new GLTFLoader();
  gltfLoader.load("./model/city.glb", (gltf) => {
    gltf.scene.traverse((item) => {
      if (item.type == "Mesh") {
        const cityMaterial = new THREE.MeshBasicMaterial({
          color: new THREE.Color(0x0c0e6f),
        });
        item.material = cityMaterial;
        modifyCityMaterial(item);
      }
    });
    scene.add(gltf.scene);

    //添加飞线
    const flyLIne = new FlyLine();
    scene.add(flyLIne.mesh);

    const flyLineShader = new FlyLineShader();
    scene.add(flyLineShader.mesh);
  });
}
