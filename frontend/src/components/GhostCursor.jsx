import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * GhostCursor - Smooth WebGL Particle & Fluid Trail Effect for Hero Backgrounds
 */
export default function GhostCursor({
  className = '',
  style = {},
  trailLength = 32,
  inertia = 0.7,
  brightness = 1.6,
  color = '#c6ff7c',
  zIndex = 1,
}) {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const parent = host.parentElement || document.body;

    let active = true;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      depth: false,
      stencil: false,
      powerPreference: isTouch ? 'low-power' : 'high-performance',
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.pointerEvents = 'none';
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.inset = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.background = 'transparent';
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geom = new THREE.PlaneGeometry(2, 2);

    const maxTrail = Math.max(8, Math.floor(trailLength));
    const trailBuf = Array.from({ length: maxTrail }, () => new THREE.Vector2(0.5, 0.5));
    let head = 0;

    const baseColor = new THREE.Color(color);

    const baseVertex = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragment = `
      precision highp float;
      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec2 iMouse;
      uniform vec2 iPrevMouse[${maxTrail}];
      uniform float iOpacity;
      uniform float iScale;
      uniform vec3 iBaseColor;
      uniform float iBrightness;
      varying vec2 vUv;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
      }
      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        mat2 m = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
        for (int i = 0; i < 3; i++) {
          v += a * noise(p);
          p = m * p * 2.0;
          a *= 0.5;
        }
        return v;
      }

      vec4 blob(vec2 p, vec2 mp, float intensity, float activity) {
        vec2 q = vec2(fbm(p * iScale + iTime * 0.1), fbm(p * iScale + vec2(5.2, 1.3) + iTime * 0.1));
        float smoke = fbm(p * iScale + q * 1.5 + iTime * 0.15);
        float radius = 0.40 + 0.25 * (1.0 / iScale);
        float dist = length(p - mp);
        float distFactor = 1.0 - smoothstep(0.0, radius * activity, dist);
        float alpha = pow(smoke, 2.0) * distFactor;
        vec3 col = mix(iBaseColor, vec3(0.9, 1.0, 0.6), sin(iTime * 0.5) * 0.5 + 0.5);
        return vec4(col * alpha * intensity, alpha * intensity);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy / iResolution.xy * 2.0 - 1.0) * vec2(iResolution.x / iResolution.y, 1.0);
        vec2 mouse = (iMouse * 2.0 - 1.0) * vec2(iResolution.x / iResolution.y, 1.0);
        vec3 colorAcc = vec3(0.0);
        float alphaAcc = 0.0;

        vec4 b = blob(uv, mouse, 1.2, iOpacity);
        colorAcc += b.rgb;
        alphaAcc += b.a;

        for (int i = 0; i < ${maxTrail}; i++) {
          vec2 pm = (iPrevMouse[i] * 2.0 - 1.0) * vec2(iResolution.x / iResolution.y, 1.0);
          float t = 1.0 - float(i) / float(${maxTrail});
          t = pow(t, 2.0);
          if (t > 0.03) {
            vec4 bt = blob(uv, pm, t * 0.85, iOpacity);
            colorAcc += bt.rgb;
            alphaAcc += bt.a;
          }
        }

        colorAcc *= iBrightness;
        float outAlpha = clamp(alphaAcc * iOpacity * 0.85, 0.0, 0.85);
        gl_FragColor = vec4(colorAcc, outAlpha);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        iMouse: { value: new THREE.Vector2(0.5, 0.5) },
        iPrevMouse: { value: trailBuf.map((v) => v.clone()) },
        iOpacity: { value: 1.0 },
        iScale: { value: 1.0 },
        iBaseColor: { value: new THREE.Vector3(baseColor.r, baseColor.g, baseColor.b) },
        iBrightness: { value: brightness },
      },
      vertexShader: baseVertex,
      fragmentShader: fragment,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(geom, material);
    scene.add(mesh);

    const resize = () => {
      if (!active || !host) return;
      const rect = parent.getBoundingClientRect();
      const cssW = Math.max(1, Math.floor(rect.width || window.innerWidth));
      const cssH = Math.max(1, Math.floor(rect.height || window.innerHeight));
      const pr = Math.min(window.devicePixelRatio || 1, 1.5);

      renderer.setPixelRatio(pr);
      renderer.setSize(cssW, cssH, false);
      material.uniforms.iResolution.value.set(cssW * pr, cssH * pr);
      material.uniforms.iScale.value = Math.max(0.6, Math.min(1.8, Math.min(cssW, cssH) / 600));
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    const start = performance.now();
    const currentMouse = new THREE.Vector2(0.5, 0.5);
    const velocity = new THREE.Vector2(0, 0);
    let fadeOpacity = 1;
    let lastMoveTime = performance.now();
    let pointerActive = true;
    let raf = null;

    const animate = () => {
      if (!active) return;
      const now = performance.now();
      const t = (now - start) / 1000;

      if (pointerActive) {
        velocity.set(
          currentMouse.x - material.uniforms.iMouse.value.x,
          currentMouse.y - material.uniforms.iMouse.value.y
        );
        material.uniforms.iMouse.value.copy(currentMouse);
        fadeOpacity = 1;
      } else {
        velocity.multiplyScalar(inertia);
        if (velocity.lengthSq() > 1e-6) material.uniforms.iMouse.value.add(velocity);
        const dt = now - lastMoveTime;
        if (dt > 800) {
          const k = Math.min(1, (dt - 800) / 1200);
          fadeOpacity = Math.max(0.15, 1 - k);
        }
      }

      const N = trailBuf.length;
      head = (head + 1) % N;
      trailBuf[head].copy(material.uniforms.iMouse.value);
      const arr = material.uniforms.iPrevMouse.value;
      for (let i = 0; i < N; i++) {
        const srcIdx = (head - i + N) % N;
        arr[i].copy(trailBuf[srcIdx]);
      }

      material.uniforms.iOpacity.value = fadeOpacity;
      material.uniforms.iTime.value = t;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };

    const onMove = (e) => {
      const rect = parent.getBoundingClientRect();
      const clientX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : window.innerWidth / 2);
      const clientY = e.clientY ?? (e.touches && e.touches[0] ? e.touches[0].clientY : window.innerHeight / 2);
      
      const x = THREE.MathUtils.clamp((clientX - rect.left) / Math.max(1, rect.width), 0, 1);
      const y = THREE.MathUtils.clamp(1 - (clientY - rect.top) / Math.max(1, rect.height), 0, 1);
      
      currentMouse.set(x, y);
      pointerActive = true;
      lastMoveTime = performance.now();
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    raf = requestAnimationFrame(animate);

    return () => {
      active = false;
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('resize', resize);
      scene.clear();
      geom.dispose();
      material.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, [trailLength, inertia, brightness, color]);

  return (
    <div
      ref={hostRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ zIndex, ...style }}
    />
  );
}
