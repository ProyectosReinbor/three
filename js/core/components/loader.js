import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from "three";
export default {
  loadGLTF(path, file, callback) {
    const loader = new GLTFLoader();
    loader.setPath(path);
    loader.load(
      `${file}.gltf`,
      gltf => callback(gltf),
    );
  },
  loadFBX(path, file, callback) {
    const loader = new FBXLoader();
    loader.setPath(path);
    loader.load(
      `${file}.fbx`,
      fbx => callback(fbx),
    );
  },
  loadTexture(path, file, callback) {
    const loader = new THREE.TextureLoader();
    loader.setPath(path);
    loader.load(
      `${file}.png`,
      texture => {
        texture.colorSpace = THREE.SRGBColorSpace;
        callback(texture);
      }
    );
  }
}