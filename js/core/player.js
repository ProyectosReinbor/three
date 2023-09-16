import character from "./character.js";
import input from "./player/input.js";
import mixerAnimation from "./player/mixerAnimations.js";
import thirdPersonCamera from "./player/thirdPersonCamera.js";
export default class extends character {
  constructor(scene, camera, secondsBetweenFrame) {
    super(scene, camera, secondsBetweenFrame);
    this.input = new input(this.state);
    this.mixerAnimation = new mixerAnimation(this.state, this.animations);
    this.thirdPersonCamera = new thirdPersonCamera(this.camera);
  }
}