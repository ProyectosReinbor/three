import player from "./core/player.js";
export default class extends player {
  start() {
    this.model.scene.scale.setScalar(0.01);
    this.scene.add(this.model.scene);
    this.model.scene.position.y = 1;
    this.animations.start();
    this.thirdPersonCamera.start(this.model.scene);
  }
  load(loadedObject) {
    const animations = () => {
      this.animations.loadAnimations(
        'models/player/animations/',
        [
          'idle',
          'jumping',
          'running',
          'runningBackward',
          'turnLeft',
          'turnRight',
        ],
        () => loadedObject(),
      );
    }
    this.model.loadModelFBX(
      'models/player/',
      'scene',
      () => animations(),
    );
  }
  update() {
    this.animations.update();
    this.move.update();
    this.mixerAnimation.update(this.secondsBetweenFrame);
    this.thirdPersonCamera.update();
  }
}