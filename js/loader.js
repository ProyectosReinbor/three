import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
export default {
  loadGLTF(path, file, callback) {
    const loader = new GLTFLoader();
    loader.setPath(path);
    loader.load(
      `${file}.gltf`,
      gltf => callback(gltf),
      undefined,
      error => console.error(error)
    );
  },
  loadFBX(path, file, callback) {
    const loader = new FBXLoader();
    loader.setPath(path);
    loader.load(
      `${file}.fbx`,
      fbx => callback(fbx),
      undefined,
      error => console.error(error)
    );
  }
}