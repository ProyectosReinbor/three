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
    this.previousTotalMilliseconds = 0;
    this.fps = 30;
    this.secondsBetweenFrame = 1 / this.fps;
    this.millisecondsBetweenFrame = this.secondsBetweenFrame * 1000;
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
    requestAnimationFrame(totalMilliseconds => this.animate(totalMilliseconds));
  }
  animate(totalMilliseconds) {
    const millisecondsBetweenFrame = totalMilliseconds - this.previousTotalMilliseconds;
    if (millisecondsBetweenFrame < this.millisecondsBetweenFrame) {
      requestAnimationFrame(totalMilliseconds => this.animate(totalMilliseconds));
      return;
    }
    this.previousTotalMilliseconds = totalMilliseconds;
    this.update();
  }
}