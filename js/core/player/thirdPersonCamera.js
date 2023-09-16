import * as THREE from "three";
export default class {
  constructor(camera) {
    this.camera = camera;
  }
  start(target) {
    this.target = target;
    this.setPreviousPosition();
    this.setPreviousRotation();
    this.moveCamera();
  }
  update() {
    if (this.movedTarget()) {
      this.setPreviousPosition();
      this.moveCamera();
    }
    if (this.rotatedTarget()) {
      this.setPreviousRotation();
      this.rotateCamera();
    }
  }
  movedTarget() {
    const position = this.target.position;
    return this.previousPosition.x != position.x ||
      this.previousPosition.y != position.y ||
      this.previousPosition.z != position.z;
  }
  rotatedTarget() {
    const rotation = this.target.rotation;
    return this.previousRotation.x != rotation.x ||
      this.previousRotation.y != rotation.y ||
      this.previousRotation.z != rotation.z;
  }
  setPreviousPosition() {
    const position = this.target.position;
    this.previousPosition = new THREE.Vector3(
      position.x,
      position.y,
      position.z
    );
  }
  setPreviousRotation() {
    const rotation = this.target.rotation;
    this.previousRotation = new THREE.Vector3(
      rotation.x,
      rotation.y,
      rotation.z,
    );
  }
  moveCamera() {
    const position = this.target.position;
    // const offsetTarget = new THREE.Vector3(0, -2, 2);
    // this.camera.lookAt(
    //   position.x + offsetTarget.x,
    //   position.y + offsetTarget.y,
    //   position.z + offsetTarget.z,
    // );
    this.camera.lookAt(position);
    // const offsetPosition = new THREE.Vector3(
    //   0, 3, -2
    // );
    // this.camera.position.set(
    //   position.x + offsetPosition.x,
    //   position.y + offsetPosition.y,
    //   position.z + offsetPosition.z,
    // );
    this.camera.translateOnAxis(
      new THREE.Vector3(
        0, 3, -2
      ),
      1
    )
  }
  rotateCamera() {

  }
}