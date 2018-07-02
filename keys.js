let keys = {
	'W' 	: 87,
	'S' 	: 83,
	'A' 	: 65,
	'D' 	: 68,
	'LEFT' 	: 37,
	'RIGHT'	: 39
};

let keyDown = {};

let setKey = function (keyCode){
	keyDown[keyCode] = true;
}

let clearKey = function (keyCode){
	keyDown[keyCode] = false;
}

let isKeyDown = function (keyName){
	return keyDown[keys[keyName]] == true;
}

let isAnyKeyDown = function () {
	for(let k in keyDown) {
		if(keyDown[k])
			return true;
	}
}

window.onkeydown = function (e) {
	setKey(e.keyCode);
}

window.onkeyup = function (e) {
	clearKey(e.keyCode);
}
