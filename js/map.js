import *as THREE from "three";
import Model from "./model.js";
export default class extends Model {
  constructor(scene, camera) {
    super(scene, camera);
  }
  loadModel(path, file, callback) {
    this.loadModelGLTF(path, file, () => {
      // this.model.scale.setScalar(0.01);
      this.scene.add(this.model);
      callback();
    });
  }
}