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
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

async function LoadGeometry(targetObject) {
	// init occt-import-js
	const occt = await occtimportjs()

	// download a step file
	let fileUrl = 'public/CLGR-D0019-HOLEFLATDRILL-STP.stp'
	let response = await fetch(fileUrl)
	let buffer = await response.arrayBuffer()

	// read the imported step file
	let fileBuffer = new Uint8Array(buffer)
	let result = occt.ReadStepFile(fileBuffer, null)

	// process the geometries of the result
	for (let resultMesh of result.meshes) {
		let geometry = new THREE.BufferGeometry()

		geometry.setAttribute(
			'position',
			new THREE.Float32BufferAttribute(resultMesh.attributes.position.array, 3)
		)
		if (resultMesh.attributes.normal) {
			geometry.setAttribute(
				'normal',
				new THREE.Float32BufferAttribute(resultMesh.attributes.normal.array, 3)
			)
		}
		const index = Uint32Array.from(resultMesh.index.array)
		geometry.setIndex(new THREE.BufferAttribute(index, 1))

		let material = null
		if (resultMesh.color) {
			const color = new THREE.Color(
				resultMesh.color[0],
				resultMesh.color[1],
				resultMesh.color[2]
			)
			material = new THREE.MeshPhongMaterial({
				color: color,
			})
		} else {
			material = new THREE.MeshPhongMaterial({
				color: 0xcccccc,
			})
		}

		const mesh = new THREE.Mesh(geometry, material)
		targetObject.add(mesh)
	}
}

async function Load() {
	console.log('LOAD')
	const width = window.innerWidth
	const height = window.innerHeight

	const renderer = new THREE.WebGLRenderer({
		antialias: true,
	})
	renderer.setSize(width, height)
	renderer.setClearColor(0xfafafa)
	document.body.appendChild(renderer.domElement)

	const camera = new THREE.PerspectiveCamera(45, width / height, 1.0, 100000.0)
	camera.position.set(5000.0, 15000.0, 10000.0)
	camera.up.set(0.0, 0.0, 1.0)
	camera.lookAt(new THREE.Vector3(0.0, 0.0, 0.0))

	const scene = new THREE.Scene()

	const ambientLight = new THREE.AmbientLight(0x444444)
	scene.add(ambientLight)

	const directionalLight = new THREE.DirectionalLight(0x888888)
	directionalLight.position.set(
		camera.position.x,
		camera.position.y,
		camera.position.z
	)
	scene.add(directionalLight)
	const controls = new OrbitControls(camera, renderer.domElement)
	const mainObject = new THREE.Object3D()
	LoadGeometry(mainObject)
	scene.add(mainObject)

	renderer.setAnimationLoop(time => {
		controls.update()
		mainObject.rotation.x = time / 2000
		mainObject.rotation.y = time / 1000
		renderer.render(scene, camera)
	})
}

Load()

/*
//let fs = require('fs')
import * as fs from 'fs'
import * as occtimportjs from 'occt-import-js'
//const occtimportjs = require('occt-import-js')()
//import occtimportjs from 'node_modules/occt-import-js'
occtimportjs.then(occt => {
	let fileUrl = '/public/CLGR-D0019-HOLEFLATDRILL-STP.stp'
	let fileContent = fs.readFileSync(fileUrl)
	let result = occt.ReadStepFile(fileContent, null)
	console.log(result)
})
*/
// Add to your imports
//const StepToJsonParser = require('step-to-json').StepToJsonParser
//import { fs } from 'fs'

//import * as fs from 'fs'
import fs from 'fs'

//import * as StepToJsonParser from 'step-to-json'
import { StepToJsonParser } from 'step-to-json'
async function JSONPARS() {
	// To get your STEP-file's assembly structure as JSON:
	//const filePath = 'public/CLGR-D0019-HOLEFLATDRILL-STP.stp'
	//const stepFile = fs.readFileSync(filePath)
	fs.readFile(
		'public/CLGR-D0019-HOLEFLATDRILL-STP.stp',
		'utf8',
		(err, data) => {
			if (err) {
				console.error(err)
				return
			}
			console.log(data)
		}
	)
	const reader = new FileReader()
	reader.onload = function (e) {
		const contents = e.target.result
		console.log(contents)
	}
	const parser = new StepToJsonParser(stepFile)

	const assemblyStructure = parser.parse()
	console.log(assemblyStructure)
}
//JSONPARS()
var parser
async function readFile() {
	const response = await fetch('public/CLGR-D0019-HOLEFLATDRILL-STP.stp')
	const data = await response.text()
	console.log(data)
	parser = new StepToJsonParser(data)
	const assemblyStructure = parser.parse() //JSON.stringify(parser)
	console.log(assemblyStructure)
}

//readFile()
