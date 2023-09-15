import * as THREE from "three";
import App from "./core/app.js";
import Map from "./map.js";
import Player from "./player.js";
export default class extends App {
  constructor() {
    super();
    this.light = new THREE.AmbientLight("#fff", 5);
    this.directionalLight = new THREE.DirectionalLight("#fff", 2);
    this.scene.add(this.light);
    this.scene.add(this.directionalLight);

    const geometry = new THREE.BoxGeometry(10, 1, 10);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.loadedObjects = 0;
    this.objects.push(new Map(this.scene, this.camera));
    this.objects.push(new Player(this.scene, this.camera, this.secondsBetweenFrame));
  }
  loadedObject() {
    this.loadedObjects++;
    if (this.loadedObjects == this.objects.length)
      this.update();
  }
  load() {
    this.objects.map(object =>
      object.load(() => this.loadedObject())
    );
  }
}