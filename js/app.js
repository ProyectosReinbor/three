import * as THREE from "three";
import App from "./core/app.js";
import Map from "./map.js";
import Player from "./player.js";
export default class extends App {
  constructor() {
    super();
    this.loadedObjects = 0;
    this.objects.push(new Map(this.scene));
    this.objects.push(new Player(this.scene, this.camera, this.secondsBetweenFrame));
  }
  load() {
    const loadedObject = () => {
      this.loadedObjects++;
      if (this.loadedObjects == this.objects.length)
        this.start();
    }
    this.objects.map(object => {
      if (object.load) object.load(() => loadedObject());
      else loadedObject();
    });
  }
  start() {
    this.light = new THREE.AmbientLight("#fff", 5);
    this.scene.add(this.light);

    this.directionalLight = new THREE.DirectionalLight("#fff", 2);
    this.scene.add(this.directionalLight);

    this.objects.map(object => {
      if (object.start) object.start();
    });
    this.update();
  }
}