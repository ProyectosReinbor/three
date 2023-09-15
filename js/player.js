import player from "./core/player.js";
export default class extends player {
  load(callback) {
    this.model.loadModelFBX(
      'models/player/',
      'scene',
      () => {
        this.model.scene.scale.setScalar(0.01);
        this.scene.add(this.model.scene);
        this.animations.loadAnimations(
          'models/player/animations/',
          ['idle', 'jumping', 'running', 'runningBackward'],
          () => {
            this.model.scene.position.y = 1;
            callback();
          }
        );
      }
    );
  }
  update() {
    this.animations.update();
    this.move.update();
    this.mixerAnimation.update(this.secondsBetweenFrame);
    this.thirdPersonCamera.update();
  }
}