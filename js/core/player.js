import * as THREE from "three";
import Model from "./model.js";
import Input from "./player/input.js";
export default class extends Model {
  constructor(scene, camera, timeBetweenFrames) {
    super(scene, camera);
    this.timeBetweenFrames = timeBetweenFrames;
    this.input = new Input();
  }
  animationUpdate() {
    if (this.input.forward || this.input.backward) this.clipAction("running");
  }
  moveUpdate() {
    let move = 0;
    if (this.input.forward) move = 1;
    else if (this.input.backward) move = -1;
    const speed = 0.01 * this.timeBetweenFrames;
    const distance = speed * move;
    this.model.position.z += distance;
  }
  cameraUpdate() {
    if (this.lastPositionModel != this.model.position) {
      this.lastPositionModel = this.model.position;
      const offsetTarget = new THREE.Vector3(0, -2, 2);
      this.camera.lookAt(
        this.model.position.x + offsetTarget.x,
        this.model.position.y + offsetTarget.y,
        this.model.position.z + offsetTarget.z,
      );
      const offsetPosition = new THREE.Vector3(0, 3, -2);
      this.camera.position.set(
        this.model.position.x + offsetPosition.x,
        this.model.position.y + offsetPosition.y,
        this.model.position.z + offsetPosition.z,
      );
    }
  }
}