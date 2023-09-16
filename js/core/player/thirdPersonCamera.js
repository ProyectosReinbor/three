import * as THREE from "three";
export default class {
  constructor(model, camera) {
    this.model = model;
    this.camera = camera;
  }
  update() {
    const scenePosition = this.model.scene.position;
    if (this.previousScenePosition != scenePosition) {
      this.previousScenePosition = new THREE.Vector3(
        scenePosition.x,
        scenePosition.y,
        scenePosition.z
      );
      const offsetTarget = new THREE.Vector3(0, -2, 2);
      this.camera.lookAt(
        scenePosition.x + offsetTarget.x,
        scenePosition.y + offsetTarget.y,
        scenePosition.z + offsetTarget.z,
      );
      const offsetPosition = new THREE.Vector3(0, 3, -2);
      this.camera.position.set(
        scenePosition.x + offsetPosition.x,
        scenePosition.y + offsetPosition.y,
        scenePosition.z + offsetPosition.z,
      );
    }
  }
}