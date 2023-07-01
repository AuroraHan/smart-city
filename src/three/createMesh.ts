import * as THREE from "three";
//导入场景
import scene from "@/three/scene";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function createMesh() {
  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
  );
  plane.position.set(0, 0, -6);
  plane.receiveShadow = true;

  scene.add(plane);
}
