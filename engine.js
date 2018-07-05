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

let gameClear = function () {
	grid.clear();
	ball.clear();
	tabel.clear();
	player.active = false;
	clearKeys();

	player.init(Math.ceil(width / 2) - 50, 100, '#DDF705');
	ball.init(player.x + Math.ceil(player.width / 2), player.y - 7, 7, '#0E0EFB');

	grid.generation(4, 60, 30, '#a22');
}