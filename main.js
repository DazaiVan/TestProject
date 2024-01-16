import { Button } from './HTML'
var ButtonTest = new Button()
ButtonTest.settingDivMain('100px', '100px', 'absolute', '100px', '100px', '100')
console.log(ButtonTest.getDivMain())
//import
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
//Scene
const scene = new THREE.Scene()
//Camera
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
)
camera.position.z = 5
//Render
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
//Controls
const controls = new OrbitControls(camera, renderer.domElement)
//Main Animate
function animate() {
	requestAnimationFrame(animate)
	controls.update()

	renderer.render(scene, camera)
}
animate()
//Test Cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)
