export class Button {
	divMain
	divButton
	divIMG
	divSignature
	constructor(top) {
		top = this.top
		//prover disk
		//this.divMain = document.createElement('div')
		//this.divMain.style.cssText += `
		//top: ${top};
		//`
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
