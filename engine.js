let _renderer = (function() {
	return 	window.requestAnimationFrame 		||
		window.webkitRequestAnimationFrame 	||
		window.mozRequestAnimationFrame 	||
		window.oRequestAnimationFrame 		||
		window.msRequestAnimationFrame 		||
		function (callback){
			setTimeout(callback, 1000 / 60);
		}
})();

let _engine = function () {
	console.log('Игровой цикл не инициализирован');
}

let startGame = function (game){
	if(typeof game == 'function'){
		_engine = game;
	}

	gameLoop();
}

let setGame = function (game) {
	if(typeof game == 'function'){
		_engine = game;
	}
}

let gameLoop = function () {
	_engine();
	_renderer(gameLoop);
}