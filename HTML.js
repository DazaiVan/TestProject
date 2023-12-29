export class Button {
	constructor() {
		divMain = document.createElement('div')
		divButton = document.createElement('div')
		divIMG = document.createElement('div')
		divSignature = document.createElement('div')
		divMain.appendChild(divButton)
		divButton.appendChild(divIMG)
		divMain.appendChild(divSignature)
	}
}
