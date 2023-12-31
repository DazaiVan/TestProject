export class Button {
	divMain
	divButton
	divIMG
	divSignature
	constructor(width, height, position, top, right, zIndex) {
		this.divMain = document.createElement('div')
		this.divMain.style.width = this.width
		this.divMain.style.height = this.height
		this.divMain.style.top = this.top
		this.divMain.style.right = this.right
		this.divMain.style.zIndex = this.zIndex
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
}
