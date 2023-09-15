import loader from "./loader.js";
export default class {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
  }
  loadModelGLTF(path, file, callback) {
    loader.loadGLTF(
      path,
      file,
      gltf => {
        this.model = gltf.scene;
        callback();
      }
    );
  }
  loadModelFBX(path, file, callback) {
    loader.loadFBX(
      path,
      file,
      fbx => {
        this.model = fbx;
        callback();
      }
    );
  }
}