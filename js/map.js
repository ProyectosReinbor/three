import Map from "./core/map.js";
export default class extends Map {
  load(callback) {
    this.loadModelGLTF(
      'models/floor/',
      'scene', () => {
        // this.model.scale.setScalar(0.01);
        this.scene.add(this.model);
        callback();
      });
  }
}