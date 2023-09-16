import sandSoil from "./sandSoil.js";
export default class {
  constructor(scene) {
    this.scene = scene;
    this.sandSoil = new sandSoil(this.scene);
  }
  start() {
    this.sandSoil.start();
  }
  load(loadedObject) {
    this.sandSoil.load(() => loadedObject());
  }
}