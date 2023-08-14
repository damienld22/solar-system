<script lang="ts">
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import { onMount } from 'svelte';
	import sunGenerator from '$lib/sun-generator';
	import planetsGenerator from '$lib/planets-generator';

	onMount(() => {
		// Scene
		const scene = new THREE.Scene();

		// Camera
		const camera = createCamera();
		camera.position.set(0, 1000, 5000);

		// Add elements
		sunGenerator(scene);
		planetsGenerator(scene);

		// Renderer
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);

		// Add to DOM
		document.body.appendChild(renderer.domElement);

		// Add controls
		const controls = new OrbitControls(camera, renderer.domElement);
		controls.update();

		animate();

		function createCamera() {
			const camera = new THREE.PerspectiveCamera(
				50,
				window.innerWidth / window.innerHeight,
				0.1,
				100000
			);
			return camera;
		}

		// Render function
		function animate() {
			requestAnimationFrame(animate);
			controls.update();
			renderer.render(scene, camera);
		}
	});
</script>
