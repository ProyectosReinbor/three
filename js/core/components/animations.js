import * as THREE from "three";
import loader from "./loader.js";
export default class {
  constructor(model, secondsBetweenFrame) {
    this.model = model;
    this.secondsBetweenFrame = secondsBetweenFrame;
    this.animations = [];
  }
  loadAnimation(path, file, callback) {
    loader.loadFBX(
      path,
      file,
      fbx => {
        this.animations[file] = fbx.animations[0];
        callback();
      }
    );
  }
  loadAnimations(path, files, callback) {
    if (this.mixer == undefined)
      this.mixer = new THREE.AnimationMixer(this.model.scene);
    let index = 0;
    const next = () => {
      const file = files[index];
      this.loadAnimation(
        path,
        file,
        () => {
          index++;
          if (index < files.length) next();
          else callback();
        }
      )
    }
    next();
  }
  clipAction(animationName, secondsBetweenFrame) {
    if (this.animationName == animationName)
      return;
    this.animationName = animationName;
    this.secondsBetweenFrame = secondsBetweenFrame;
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