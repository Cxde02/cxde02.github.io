import * as THREE from "https://threejs.org/build/three.module.js";

const container = document.querySelector(".three_bg");
const loader = new THREE.TextureLoader();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGL1Renderer({
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

//responsive

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const geometry = new THREE.PlaneGeometry(18, 9, 15, 9);
const material = new THREE.MeshStandardMaterial({
  map: loader.load("assets/images/loaders/codeExtended.png"),
  //wireframe: true,
});
//add light since MeshStandardMaterial is used
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);
camera.position.z = 5;

const count = geometry.attributes.position.count;
const clock = new THREE.Clock();

function animate() {
  const time = clock.getElapsedTime();
  for (let i = 0; i < count; i++) {
    const x = geometry.attributes.position.getX(i);
    const y = geometry.attributes.position.getY(i);

    //animations
    const anim1 = 0.9 * Math.sin(x * 2 + time * 0.5);
    const anim2 = 0.5 * Math.sin(x + time * 0.7);
    const anim3 = 0.9 * Math.sin(y * 50 + time * 0.5);

    geometry.attributes.position.setZ(i, anim3);
    geometry.computeVertexNormals();
    geometry.attributes.position.needsUpdate = true;
  }
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
