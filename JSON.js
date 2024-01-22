/*
fetch('/public/PasportMain.json')
	.then(response => response.json())
	.then(json => console.log(json))
*/
var DivVVod = document.createElement('div')
document.body.appendChild(DivVVod)
DivVVod.style.position = 'absolute'
DivVVod.style.width = '80px'
DivVVod.style.height = '20px'
DivVVod.style.zIndex = '100'
DivVVod.style.top = '100px'
DivVVod.style.right = '100px'
DivVVod.style.background = '#4676D7'
DivVVod.style.border = '0'
DivVVod.style.borderRadius = '5px'
DivVVod.style.color = ' #fff'
DivVVod.style.padding = '8px 16px'
DivVVod.style.fontSize = '16px'
DivVVod.innerHTML = 'NEXT'
DivVVod.style.textAlign = 'center'
console.log(DivVVod)
var Passport = new Object()
var numer = 1
function NewJson() {
	let Settings = new Object()
	let SettingsOBJ = new Object()
	SettingsOBJ['colspan'] = '0'
	Settings['Settings'] = SettingsOBJ
	Passport['iteration' + String(numer)] = Settings
	let StringOBJ = new Object()
	StringOBJ['String'] = '1234'
	Passport['iteration' + String(numer + 1)] = StringOBJ
	numer = numer + 2
	console.log(Passport)
}
NewJson()
NewJson()
console.log(Passport)
