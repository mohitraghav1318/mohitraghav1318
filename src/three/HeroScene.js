// ──────────────────────────────────────────────
// HeroScene.js — Three.js particle field for the hero section
// Exports initHeroScene(canvas) which sets up a particle system
// and returns a cleanup function to prevent memory leaks.
// ──────────────────────────────────────────────

import * as THREE from 'three';

/**
 * Initializes a Three.js particle scene on the given canvas element.
 * Creates ~1000 white particles slowly rotating in 3D space.
 * @param {HTMLCanvasElement} canvas - The target canvas DOM element
 * @returns {{ cleanup: () => void }} Object with a cleanup function
 */
export function initHeroScene(canvas) {
  // Scene setup
  const scene = new THREE.Scene();

  // Camera: perspective, FOV 75, positioned along z-axis
  const camera = new THREE.PerspectiveCamera(
    75,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Renderer: WebGL with transparency and antialiasing
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Particle geometry: 1000 particles in a random box distribution
  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i++) {
    // Random position in ±15 range on each axis
    positions[i] = (Math.random() - 0.5) * 30;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  // Particle material: small white dots
  const material = new THREE.PointsMaterial({
    color: 0xf5f5f5,
    size: 0.015,
    sizeAttenuation: true,
  });

  // Create the Points mesh and add to scene
  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // Animation loop
  let animationId;

  function animate() {
    animationId = requestAnimationFrame(animate);

    // Slow rotation on X and Y axes
    particles.rotation.x += 0.0002;
    particles.rotation.y += 0.0003;

    renderer.render(scene, camera);
  }

  animate();

  // Handle window resize: update camera aspect and renderer size
  function handleResize() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  window.addEventListener('resize', handleResize);

  // Cleanup function: dispose of all Three.js resources
  function cleanup() {
    cancelAnimationFrame(animationId);
    window.removeEventListener('resize', handleResize);
    geometry.dispose();
    material.dispose();
    renderer.dispose();
  }

  return { cleanup };
}
