export class Button {
	constructor() {
		this.divMain = document.createElement('div')
		this.divButton = document.createElement('div')
		this.divIMG = document.createElement('div')
		this.divSignature = document.createElement('div')
		this.divMain.appendChild(this.divButton)
		this.divButton.appendChild(this.divIMG)
		this.divMain.appendChild(this.divSignature)
	}
	getDivMain() {
		return this.divMain
	}
}
