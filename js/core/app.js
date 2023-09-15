import * as THREE from 'three';
export default class {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    THREE.Cache.enabled = true;
    window.addEventListener("resize", () => this.resize());
    this.objects = [];
    this.lastTime = 0;
    this.timeBetweenFrames = 1000 / 30;
  }
  resize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  update() {
    this.renderer.render(this.scene, this.camera);
    this.objects.map(object => {
      if (object.update) object.update();
    });
    requestAnimationFrame(time => this.animate(time));
  }
  animate(time = 0) {
    const timeBetweenFrames = time - this.lastTime;
    if (timeBetweenFrames < this.timeBetweenFrames) {
      requestAnimationFrame(time => this.animate(time));
      return;
    }
    this.lastTime = time;
    this.update();
  }
}