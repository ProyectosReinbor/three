import loader from "./loader.js";
export default class {
  loadModelGLTF(path, file, callback) {
    loader.loadGLTF(
      path,
      file,
      gltf => {
        this.scene = gltf.scene;
        callback();
      }
    );
  }
  loadModelFBX(path, file, callback) {
    loader.loadFBX(
      path,
      file,
      fbx => {
        this.scene = fbx;
        callback();
      }
    );
  }
}