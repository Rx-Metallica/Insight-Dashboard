import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const MapView = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    const width = mount.clientWidth
    const height = mount.clientHeight

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x1a1a2e)

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    camera.position.set(0, 0, 5)

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)
    mount.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05

    // Load PCD
    const loader = new PCDLoader()
    loader.load('/pointcloud/bunny.pcd', (points) => {
      points.material.color.set(0xff69b4)
      points.material.size = 0.005
      points.geometry.center()
      scene.add(points)
    })

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Cleanup
    return () => {
      mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div className="absolute bottom-6 left-6 z-50 rounded-xl overflow-hidden shadow-2xl border border-gray-700"
      style={{ width: '280px', height: '200px' }}
    >
      {/* Header */}
      <div className="absolute top-2 left-2 z-10 flex gap-1">
        <span className="bg-gray-900/70 text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm">
          3D Map
        </span>
      </div>

      {/* Three.js mount */}
      <div ref={mountRef} className="w-full h-full" />
    </div>
  )
}

export default MapView