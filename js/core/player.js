import * as THREE from "three";
import character from "./character.js";
import input from "./player/input.js";
export default class extends character {
  constructor(scene, camera, secondsBetweenFrame) {
    super(scene, camera, secondsBetweenFrame);
    this.input = new input(this.state);
  }
  animationUpdate() {
    if (this.state.forward || this.state.backward) this.clipAction("running");
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