import map from "./core/map.js";
export default class extends map {
  load(callback) {
    this.model.loadModelGLTF(
      'models/floor/',
      'scene',
      () => {
        // this.model.scale.setScalar(0.01);
        this.scene.add(this.model.scene);
        callback();
      }
    );
  }
}