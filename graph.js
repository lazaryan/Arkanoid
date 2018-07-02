let 	canvas,
	width,
	height,
	ctx;

let init = function() {
	canvas 		= document.querySelector('#canvas');
	width		= canvas.width;
	height		= canvas.height;
	ctx		= canvas.getContext('2d');
}

let fillAll = function (color) {
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, width, height);
}

let clearAll = function () {
	ctx.clearRect(0, 0, width, height);
}

let drawRect = function (x, y, w, h, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, w, h);
}

let drawCircle = function (x, y, r, color) {
	ctx.fillStyle = color;

	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI * 2, false);
	ctx.fill();
}

let isCollision = function (x1, y1, w1, h1, x2, y2, w2, h2) {
	return (x1 < x2 + w2 &&
		x1 + w1 > x2 &&
		y1 < y2 + h2 &&
		h1 + y1 > y2);
}