import * as THREE from "three";
import Model from "./model.js";
export default class extends Model {
  constructor(scene, camera) {
    super(scene, camera);
  }
  loadModel(path, file, callback) {
    this.loadModelFBX(path, file, () => {
      this.model.scale.setScalar(0.01);
      this.scene.add(this.model);
      callback();
    });
  }
  move() {

  }
  update() {
    this.move();
    if (this.mixer) this.mixer.update(0.03);
    if (this.lastPosition != this.model.position) {
      this.lastPosition = this.model.position;
      const target = new THREE.Vector3(...this.model.position);
      target.z += 2;
      this.camera.lookAt(target);
    }
  }
}