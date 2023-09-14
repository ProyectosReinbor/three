import * as THREE from "three";
import Loader from "./loader.js";
export default class {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
  }
  loadModelGLTF(path, file, callback) {
    Loader.loadGLTF(
      path,
      file,
      gltf => {
        this.model = gltf.scene;
        callback();
      }
    );
  }
  loadModelFBX(path, file, callback) {
    Loader.loadFBX(
      path,
      file,
      fbx => {
        this.model = fbx;
        callback();
      }
    );
  }
  loadAnimation(path, file, callback) {
    if (this.animations == undefined) this.animations = [];
    Loader.loadFBX(
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
    if (this.mixer == undefined) this.mixer = new THREE.AnimationMixer(this.model);
    this.animation = this.mixer.clipAction(this.animations[name]);
    this.animation.play();
  }
  update() {
    if (this.mixer) this.mixer.update(0.03);
  }
}