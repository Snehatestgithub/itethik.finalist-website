import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function About3DHologram({ className = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    // GROUPS
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. CORE WIREFRAME ICOSAHEDRON (Cyber Sphere)
    const coreGeo = new THREE.IcosahedronGeometry(2, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // 2. INNER GLOWING OCTAHEDRON
    const innerGeo = new THREE.OctahedronGeometry(1.2, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 3. INNER SOLID EMISSIVE CORE
    const pointGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const pointMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.9,
    });
    const pointMesh = new THREE.Mesh(pointGeo, pointMat);
    mainGroup.add(pointMesh);

    // 4. POINT CLOUD AROUND SPHERE
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x22d3ee);
    const purpleColor = new THREE.Color(0xc084fc);

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.4 + (Math.random() - 0.5) * 0.4;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const mixedColor = Math.random() > 0.5 ? cyanColor : purpleColor;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const particleCloud = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particleCloud);

    // 5. ORBITAL CYBER RINGS
    const ring1Geo = new THREE.TorusGeometry(3.1, 0.02, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(3.6, 0.015, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.4,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 6;
    mainGroup.add(ring2);

    // 6. FLOATING TECH SATELLITE NODES
    const nodeCount = 4;
    const nodeGroup = new THREE.Group();
    mainGroup.add(nodeGroup);
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      const nodeMesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 0.18, 0.18),
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0x22d3ee : 0xf43f5e,
          wireframe: true,
        })
      );
      nodeGroup.add(nodeMesh);
      nodes.push({
        mesh: nodeMesh,
        angle: (i * Math.PI * 2) / nodeCount,
        radius: 3.2 + (i % 2) * 0.4,
        speed: 0.008 + i * 0.003,
      });
    }

    // MOUSE PARALLAX
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      targetRotationY = mouseX * 0.4;
      targetRotationX = mouseY * 0.3;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // RESIZE OBSERVER
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(container);

    // ANIMATION LOOP
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.08 + 0.004;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.08;

      // Internal rotations
      coreMesh.rotation.y -= 0.006;
      coreMesh.rotation.x += 0.003;

      innerMesh.rotation.y += 0.01;
      innerMesh.rotation.z -= 0.007;

      // Pulse inner core scale
      const scale = 1 + Math.sin(elapsedTime * 3.0) * 0.12;
      pointMesh.scale.set(scale, scale, scale);

      ring1.rotation.z += 0.007;
      ring2.rotation.z -= 0.006;

      // Satellite Nodes orbiting
      nodes.forEach((node, idx) => {
        node.angle += node.speed;
        const currentAngle = node.angle;
        node.mesh.position.x = Math.cos(currentAngle) * node.radius;
        node.mesh.position.z = Math.sin(currentAngle) * node.radius;
        node.mesh.position.y = Math.sin(elapsedTime * 2 + idx) * 0.6;
        node.mesh.rotation.x += 0.02;
        node.mesh.rotation.y += 0.03;
      });

      particleCloud.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // CLEANUP
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      // Dispose Geometries and Materials
      [coreGeo, innerGeo, pointGeo, particleGeo, ring1Geo, ring2Geo].forEach((g) => g.dispose());
      [coreMat, innerMat, pointMat, particleMat, ring1Mat, ring2Mat].forEach((m) => m.dispose());
      nodes.forEach((n) => {
        n.mesh.geometry.dispose();
        n.mesh.material.dispose();
      });

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[380px] sm:h-[460px] flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing ${className}`}
    />
  );
}
