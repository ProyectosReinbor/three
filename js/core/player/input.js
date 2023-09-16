export default class {
  constructor(state) {
    this.state = state;
    window.addEventListener("keydown", event => this.handleKeydown(event.code));
    window.addEventListener("keyup", event => this.handleKeyup(event.code));
  }
  handleKeydown(code) {
    this.keydown = code;
    if (this.keydown == "KeyW") {
      this.state.forward = true;
    }
    if (this.keydown == "KeyS") {
      this.state.backward = true;
    }
    if (this.keydown == "KeyD") {
      this.state.turnRight = true;
    }
    if (this.keydown == "KeyA") {
      this.state.turnLeft = true;
    }
  }
  handleKeyup(code) {
    this.keyup = code;
    if (this.keyup == "KeyW") {
      this.state.forward = false;
    }
    if (this.keyup == "KeyS") {
      this.state.backward = false;
    }
    if (this.keyup == "KeyD") {
      this.state.turnRight = false;
    }
    if (this.keyup == "KeyA") {
      this.state.turnLeft = false;
    }
  }
}