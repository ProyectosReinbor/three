import * as THREE from "three";
import loader from "./components/loader.js";
export default class {
  constructor(scene, geometry) {
    this.scene = scene;
    this.geometry = new THREE.BoxGeometry(
      geometry.width,
      geometry.height,
      geometry.depth
    );
  }
  start() {
    console.log(this.texture);
    this.material = new THREE.MeshBasicMaterial({
      map: this.texture
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
  }
  loadTexture(path, file, callback) {
    loader.loadTexture(
      path,
      file,
      texture => {
        this.texture = texture;
        callback();
      }
    );
  }
}