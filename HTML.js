export class Button {
	divMain
	divButton
	divIMG
	divSignature
	constructor(width, height, position, top, right, zIndex) {
		this.divMain = document.createElement('div')
		this.divButton = document.createElement('div')
		this.divIMG = document.createElement('div')
		this.divSignature = document.createElement('div')
		this.divMain.appendChild(this.divButton)
		this.divButton.appendChild(this.divIMG)
		this.divMain.appendChild(this.divSignature)
		document.body.appendChild(this.divMain)
	}
	getDivMain() {
		return this.divMain
	}
	getDivButton() {
		return this.divMain
	}
	getDivIMG() {
		return this.divMain
	}
	getDivSignature() {
		return this.divMain
	}
	settingDivMain(width, height, position, top, right, zIndex) {
		this.divMain.style.width = width
		this.divMain.style.height = height
		this.divMain.style.position = position
		this.divMain.style.top = top
		this.divMain.style.right = right
		this.divMain.style.zIndex = zIndex
	}
}
