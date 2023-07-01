/// <reference types="vite/client" />
// declare module "three";
// declare module "three/examples/jsm/controls/OrbitControls";
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
