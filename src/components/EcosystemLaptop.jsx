import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import EcosystemLaptopFallback from './EcosystemLaptopFallback';

function createBrandScreenTexture(onTextureReady) {
  const canvas = document.createElement('canvas');
  canvas.width = 1800;
  canvas.height = 1125;
  const context = canvas.getContext('2d');
  if (!context) return null;

  const background = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  background.addColorStop(0, '#0a1c36');
  background.addColorStop(0.55, '#07152b');
  background.addColorStop(1, '#101b3b');
  context.fillStyle = background;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const glow = context.createRadialGradient(900, 460, 40, 900, 460, 720);
  glow.addColorStop(0, 'rgba(50, 130, 220, 0.16)');
  glow.addColorStop(1, 'rgba(50, 130, 220, 0)');
  context.fillStyle = glow;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;

  const logo = new Image();
  logo.onload = () => {
    const maxWidth = 1480;
    const maxHeight = 700;
    const ratio = Math.min(maxWidth / logo.width, maxHeight / logo.height);
    const width = logo.width * ratio;
    const height = logo.height * ratio;
    const logoX = (canvas.width - width) / 2;
    const logoY = (canvas.height - height) / 2;

    context.save();
    context.filter = 'brightness(1.8) saturate(1.2)';
    context.shadowColor = 'rgba(56, 189, 248, 0.72)';
    context.shadowBlur = 34;
    context.drawImage(logo, logoX, logoY, width, height);
    context.restore();
    texture.needsUpdate = true;
    onTextureReady?.();
  };
  logo.onerror = () => {
    console.error('Unable to load the ItEthik logo for the laptop display.');
  };
  logo.src = '/logo.png';

  return texture;
}

export default function EcosystemLaptop({
  isVisible,
  shouldReduceMotion,
  initialRotationY = 0,
  groundedShadow = false,
  preferThreeD = false,
}) {
  const containerRef = useRef(null);
  const isVisibleRef = useRef(isVisible);
  const animationControlsRef = useRef(null);
  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 50);
    camera.position.set(0, 1.2, 8.8);
    camera.zoom = 1.85;
    camera.lookAt(0, 0.15, 0);
    camera.updateProjectionMatrix();

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'low-power',
      });
    } catch (error) {
      console.error('Unable to render the 3D laptop; using the static fallback.', error);
      setWebglFailed(true);
      return undefined;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, window.innerWidth < 760 ? 1 : 1.15));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.setClearColor(0x000000, 0);
    container.prepend(renderer.domElement);
    container.classList.add('ecosystem-laptop-scene-ready');

    scene.add(new THREE.HemisphereLight(0xc9e7ff, 0x15233d, 2.1));

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.1);
    keyLight.position.set(-3.5, 5, 4);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0x49cfff, 20, 9);
    rimLight.position.set(2.8, 1.8, -2.6);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(0x7785ff, 9, 8);
    fillLight.position.set(-3.5, 0.2, -1.5);
    scene.add(fillLight);

    const laptop = new THREE.Group();
    laptop.position.y = -0.25;
    laptop.rotation.y = initialRotationY;
    scene.add(laptop);

    if (groundedShadow) {
      const platformMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x12253b,
        metalness: 0.82,
        roughness: 0.24,
        clearcoat: 0.9,
        clearcoatRoughness: 0.18,
      });
      const platform = new THREE.Mesh(
        new RoundedBoxGeometry(4.28, 0.12, 2.65, 8, 0.11),
        platformMaterial
      );
      platform.position.set(0, -0.859, 0.05);
      laptop.add(platform);

      const platformEdge = new THREE.Mesh(
        new RoundedBoxGeometry(4.44, 0.035, 2.78, 8, 0.08),
        new THREE.MeshStandardMaterial({
          color: 0x087eaa,
          emissive: 0x075985,
          emissiveIntensity: 0.28,
          metalness: 0.75,
          roughness: 0.3,
        })
      );
      platformEdge.position.set(0, -0.91, 0.05);
      laptop.add(platformEdge);
    }

    const metalMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x8e9db0,
      metalness: 0.78,
      roughness: 0.27,
      clearcoat: 0.55,
      clearcoatRoughness: 0.24,
    });
    const edgeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x24364e,
      metalness: 0.62,
      roughness: 0.32,
    });
    const keyMaterial = new THREE.MeshStandardMaterial({
      color: 0x152238,
      metalness: 0.35,
      roughness: 0.38,
    });

    const base = new THREE.Mesh(
      new RoundedBoxGeometry(3.7, 0.16, 2.15, 5, 0.075),
      metalMaterial
    );
    base.position.set(0, -0.72, 0.05);
    laptop.add(base);

    const keyboardDeck = new THREE.Mesh(
      new RoundedBoxGeometry(3.48, 0.025, 1.7, 4, 0.045),
      new THREE.MeshStandardMaterial({ color: 0x586c83, metalness: 0.64, roughness: 0.34 })
    );
    keyboardDeck.position.set(0, -0.628, -0.03);
    laptop.add(keyboardDeck);

    const keyGeometry = new RoundedBoxGeometry(0.18, 0.028, 0.12, 2, 0.018);
    const keys = new THREE.InstancedMesh(keyGeometry, keyMaterial, 60);
    const keyTransform = new THREE.Object3D();
    let keyIndex = 0;
    for (let row = 0; row < 4; row += 1) {
      const count = row === 3 ? 11 : 13;
      const spacing = 3.08 / count;
      for (let column = 0; column < count; column += 1) {
        keyTransform.position.set(
          (column - (count - 1) / 2) * spacing,
          -0.599,
          -0.62 + row * 0.22
        );
        keyTransform.updateMatrix();
        keys.setMatrixAt(keyIndex, keyTransform.matrix);
        keyIndex += 1;
      }
    }
    keys.count = keyIndex;
    laptop.add(keys);

    const trackpad = new THREE.Mesh(
      new RoundedBoxGeometry(0.9, 0.018, 0.52, 4, 0.06),
      new THREE.MeshPhysicalMaterial({
        color: 0x9cadbd,
        metalness: 0.42,
        roughness: 0.32,
        clearcoat: 0.6,
      })
    );
    trackpad.position.set(0, -0.61, 0.62);
    laptop.add(trackpad);

    const hinge = new THREE.Mesh(
      new THREE.CylinderGeometry(0.055, 0.055, 3.1, 24),
      edgeMaterial
    );
    hinge.rotation.z = Math.PI / 2;
    hinge.position.set(0, -0.62, -0.91);
    laptop.add(hinge);

    const screenGroup = new THREE.Group();
    screenGroup.position.set(0, 0.5, -0.94);
    screenGroup.rotation.x = -0.03;
    laptop.add(screenGroup);

    const screenFrame = new THREE.Mesh(
      new RoundedBoxGeometry(3.36, 2.12, 0.14, 6, 0.09),
      new THREE.MeshPhysicalMaterial({
        color: 0x26374d,
        metalness: 0.72,
        roughness: 0.24,
        clearcoat: 0.7,
      })
    );
    screenGroup.add(screenFrame);

    const screenTexture = createBrandScreenTexture(() => {
      if (container.isConnected) renderer.render(scene, camera);
    });
    if (screenTexture) {
      const screen = new THREE.Mesh(
        new THREE.PlaneGeometry(3.13, 1.87),
        new THREE.MeshBasicMaterial({ map: screenTexture, toneMapped: false })
      );
      screen.position.z = 0.073;
      screenGroup.add(screen);
    }

    const cameraDot = new THREE.Mesh(
      new THREE.SphereGeometry(0.025, 12, 12),
      new THREE.MeshBasicMaterial({ color: 0x4c7898 })
    );
    cameraDot.position.set(0, 1.01, 0.074);
    screenGroup.add(cameraDot);

    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const shadowContext = shadowCanvas.getContext('2d');
    if (shadowContext) {
      const gradient = shadowContext.createRadialGradient(
        64,
        64,
        groundedShadow ? 14 : 8,
        64,
        64,
        62
      );
      gradient.addColorStop(0, groundedShadow ? 'rgba(2, 6, 23, 0.62)' : 'rgba(24, 115, 177, 0.25)');
      if (groundedShadow) gradient.addColorStop(0.48, 'rgba(8, 47, 73, 0.36)');
      gradient.addColorStop(1, 'rgba(24, 115, 177, 0)');
      shadowContext.fillStyle = gradient;
      shadowContext.fillRect(0, 0, 128, 128);
      const shadow = new THREE.Mesh(
        new THREE.PlaneGeometry(groundedShadow ? 4.1 : 4.5, groundedShadow ? 2.3 : 2.7),
        new THREE.MeshBasicMaterial({
          map: new THREE.CanvasTexture(shadowCanvas),
          transparent: true,
          depthWrite: false,
        })
      );
      shadow.rotation.x = -Math.PI / 2;
      shadow.position.set(0, groundedShadow ? -0.95 : -0.86, 0.08);
      laptop.add(shadow);
    }

    const resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (width <= 0 || height <= 0) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.render(scene, camera);
    });
    resizeObserver.observe(container);

    let pointerX = 0;
    let pointerY = 0;
    const handlePointerMove = (event) => {
      const bounds = container.getBoundingClientRect();
      pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };
    const handlePointerLeave = () => {
      pointerX = 0;
      pointerY = 0;
    };
    container.addEventListener('pointermove', handlePointerMove, { passive: true });
    container.addEventListener('pointerleave', handlePointerLeave);

    let frameId = null;
    let previousFrameTime = 0;
    const startTime = performance.now();
    const renderFrame = (timestamp) => {
      frameId = null;
      if (!isVisibleRef.current || document.hidden) return;
      if (timestamp - previousFrameTime < 1000 / 30) {
        frameId = requestAnimationFrame(renderFrame);
        return;
      }
      const currentTime = performance.now();
      const elapsed = (currentTime - startTime) / 1000;
      const deltaSeconds = previousFrameTime
        ? Math.min((currentTime - previousFrameTime) / 1000, 0.05)
        : 0;
      previousFrameTime = currentTime;
      laptop.position.y = -0.25 + (shouldReduceMotion ? 0 : Math.sin(elapsed * 0.8) * 0.045);
      const pointerEase = 1 - Math.exp(-4.5 * deltaSeconds);
      laptop.rotation.y += ((shouldReduceMotion ? initialRotationY : initialRotationY + pointerX * 0.035) - laptop.rotation.y) * pointerEase;
      laptop.rotation.x += ((shouldReduceMotion ? 0 : pointerY * 0.012) - laptop.rotation.x) * pointerEase;
      renderer.render(scene, camera);
      if (!shouldReduceMotion) frameId = requestAnimationFrame(renderFrame);
    };
    const stopAnimation = () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      frameId = null;
    };
    const startAnimation = () => {
      if (!shouldReduceMotion && isVisibleRef.current && !document.hidden && frameId === null) {
        frameId = requestAnimationFrame(renderFrame);
      }
    };
    const handleVisibilityChange = () => {
      if (document.hidden) stopAnimation();
      else startAnimation();
    };
    let scrollResumeTimeout;
    const handleScroll = () => {
      stopAnimation();
      clearTimeout(scrollResumeTimeout);
      scrollResumeTimeout = setTimeout(startAnimation, 120);
    };
    animationControlsRef.current = { start: startAnimation, stop: stopAnimation };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('scroll', handleScroll, { passive: true });
    renderer.render(scene, camera);
    startAnimation();

    return () => {
      stopAnimation();
      clearTimeout(scrollResumeTimeout);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('scroll', handleScroll);
      animationControlsRef.current = null;
      resizeObserver.disconnect();
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);
      laptop.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => {
            if (material.map) material.map.dispose();
            material.dispose();
          });
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
      container.classList.remove('ecosystem-laptop-scene-ready');
    };
  }, [groundedShadow, initialRotationY, shouldReduceMotion]);

  useEffect(() => {
    isVisibleRef.current = isVisible;
    if (isVisible) animationControlsRef.current?.start();
    else animationControlsRef.current?.stop();
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="ecosystem-laptop-scene"
      role="img"
      aria-label="A three-dimensional ItEthik laptop displaying the company brand and connected technology solutions"
    >
      {(!preferThreeD || webglFailed) && <EcosystemLaptopFallback />}
    </div>
  );
}
