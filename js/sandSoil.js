import * as THREE from "three";
import soil from "./core/soil.js";
export default class extends soil {
  constructor(scene) {
    super(scene, {
      width: 10,
      height: 1,
      depth: 10.
    });
  };
  load(loadedObject) {
    this.loadTexture(
      'textures/',
      'sandSoil',
      () => loadedObject(),
    );
  }
}