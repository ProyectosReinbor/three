export default class {
  constructor(model, state, secondsBetweenFrame) {
    this.model = model;
    this.state = state;
    this.speed = 1 * secondsBetweenFrame;
  }
  update() {
    let move = 0;
    if (this.state.forward) move = 1;
    else if (this.state.backward) move = -1;
    const distance = this.speed * move;
    this.model.scene.position.z += distance;
  }
}