export default class {
  constructor(state, animations) {
    this.state = state;
    this.animations = animations;
  }
  update() {
    if (this.state.forward)
      this.animations.clipAction("running");
    else if (this.state.backward)
      this.animations.clipAction("runningBackward");
    else if (this.state.turnLeft)
      this.animations.clipAction("turnLeft");
    else if (this.state.turnRight)
      this.animations.clipAction("turnRight");
    else
      this.animations.clipAction("idle", 0.03);
  }
}