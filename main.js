import * as THREE from 'three';
import Player from "./js/player.js";
import Map from "./js/map.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = -3;
camera.position.y = 4;

THREE.Cache.enabled = true;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.AmbientLight("#fff", 5); // soft white light
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
scene.add(directionalLight);

const player = new Player(scene, camera);
const map = new Map(scene, camera);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  player.update();
}

const geometry = new THREE.BoxGeometry(10, 1, 10);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


map.loadModel(
  'models/floor/',
  'scene',
  () => {
    player.loadModel(
      'models/player/',
      'scene',
      () => {
        player.loadAnimations(
          'models/player/animations/',
          ['idle', 'jumping', 'running'],
          () => {
            player.clipAction("idle");
            player.model.position.y = 1;

            animate();
          }
        );
      }
    );
  }
)