import Player from "./core/player.js";
export default class extends Player {
  load(callback) {
    this.loadModelFBX(
      'models/player/',
      'scene',
      () => {
        this.model.scale.setScalar(0.01);
        this.scene.add(this.model);
        this.loadAnimations(
          'models/player/animations/',
          ['idle', 'jumping', 'running'],
          () => {
            this.clipAction("idle");
            this.model.position.y = 1;
            callback();
          }
        );
      }
    );
  }
  update() {
    this.animationUpdate();
    this.moveUpdate();
    this.cameraUpdate();
    this.mixerUpdate(this.timeBetweenFrames);
  }
}