export default class {
  constructor(state, animations) {
    this.state = state;
    this.animations = animations;
  }
  update() {
    if (this.state.forward)
      this.animations.clipAction("running", 0.03);
    else if (this.state.backward)
      this.animations.clipAction("runningBackward", 0.03);
    else
      this.animations.clipAction("idle", 0.03);
  }
}