export default class {
  constructor() {
    this.forward = false;
    this.backward = false;
    this.turnLeft = false;
    this.turnRight = false;
    this.keydown = null;
    this.keyup = null;
    window.addEventListener("keydown", event => this.handleKeydown(event.code));
    window.addEventListener("keyup", event => this.handleKeyup(event.code));
  }
  handleKeydown(code) {
    this.keydown = code;
    if (this.keydown == "KeyW") {
      this.forward = true;
    }
    if (this.keydown == "KeyS") {
      this.backward = true;
    }
    if (this.keydown == "KeyD") {
      this.turnRight = true;
    }
    if (this.keydown == "KeyA") {
      this.turnLeft = true;
    }
  }
  handleKeyup(code) {
    this.keyup = code;
    if (this.keyup == "KeyW") {
      this.forward = false;
    }
    if (this.keyup == "KeyS") {
      this.backward = false;
    }
    if (this.keyup == "KeyD") {
      this.turnRight = false;
    }
    if (this.keyup == "KeyA") {
      this.turnLeft = false;
    }
  }
}