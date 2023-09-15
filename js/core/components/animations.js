import * as THREE from "three";
import loader from "./loader.js";
export default class {
  constructor(model, secondsBeetweenFrames) {
    this.model = model;
    this.secondsBeetweenFrames = secondsBeetweenFrames;
    this.animations = [];
    this.mixer = new THREE.AnimationMixer(this.model);
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
  clipAction(name) {
    const animation = this.animations[name];
    this.animation = this.mixer.clipAction(animation);
    this.animation.play();
  }
  update() {
    this.mixer.update(this.secondsBeetweenFrames);
  }
}