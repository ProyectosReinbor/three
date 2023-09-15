import model from "./components/model.js";
import animations from "./components/animations.js";
import move from "./character/move.js";
import state from "./character/state.js";
export default class {
  constructor(scene, camera, secondsBetweenFrame) {
    this.scene = scene;
    this.camera = camera;
    this.secondsBetweenFrame = secondsBetweenFrame;
    this.model = new model();
    this.animations = new animations(this.model, this.secondsBetweenFrame);
    this.state = new state();
    this.move = new move(this.model, this.state, this.secondsBetweenFrame);
  }
}