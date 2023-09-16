import * as THREE from "three";
import loader from "./loader.js";
export default class {
  constructor(model, secondsBetweenFrame) {
    this.model = model;
    this.secondsBetweenFrame = secondsBetweenFrame;
    this.animations = [];
  }
  start() {
    this.mixer = new THREE.AnimationMixer(this.model.scene);
  }
  loadAnimation(path, file, callback) {
    loader.loadFBX(
      path,
      file,
      fbx => {
        this.animations[file] = fbx.animations[0];
        callback();
      },
    );
  }
  loadAnimations(path, files, callback) {
    let index = 0;
    const nextIndex = () => {
      index++;
      if (index < files.length) nextAnimation();
      else callback();
    }
    const nextAnimation = () => {
      const file = files[index];
      this.loadAnimation(
        path,
        file,
        () => nextIndex(),
      )
    }
    nextAnimation();
  }
  clipAction(animationName) {
    if (this.animationName == animationName)
      return;
    this.animationName = animationName;
    if (this.previousAnimation) {
      this.previousAnimation.fadeOut(0.5);
    }
    const clip = this.animations[this.animationName];
    this.animation = this.mixer.clipAction(clip);
    this.previousAnimation = this.animation;
    this.animation.enabled = true;
    this.animation.fadeIn(0.5);
    this.animation.play();
  }
  update() {
    this.mixer.update(this.secondsBetweenFrame);
  }
}