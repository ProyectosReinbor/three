import * as THREE from "three";
import model from "./components/model.js";
export default class {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.model = new model();
  }
}