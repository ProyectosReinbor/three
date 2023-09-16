export default class {
  constructor(model, state, secondsBetweenFrame) {
    this.model = model;
    this.state = state;
    this.secondsBetweenFrame = secondsBetweenFrame;
    this.speed = 3 * this.secondsBetweenFrame;
    this.speedToTurn = 3 * this.secondsBetweenFrame;
  }
  update() {
    let move = 0;
    if (this.state.forward) move = 1;
    else if (this.state.backward) move = -1;
    const distance = this.speed * move;
    this.model.scene.translateZ(distance);

    let rotate = 0;
    if (this.state.turnLeft)
      rotate = 1;
    else if (this.state.turnRight)
      rotate = -1;
    const angle = this.speedToTurn * rotate;
    this.model.scene.rotateY(angle);
  }
}