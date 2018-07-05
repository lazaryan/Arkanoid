let tabel = {
	score: 0,
	hp: 3,
	level : 1,

	upScore : function(score){
		this.score += score;
		document.querySelector('#score').innerHTML 	= this.score;
	},

	upLevel: function (levelUp){
		this.level += levelUp;
		document.querySelector('#level').innerHTML 	= this.level;
	},

	updHp : function (hp) {
		this.hp -= hp;
		document.querySelector('#hp').innerHTML 	= this.hp;
	},

	getDate: function () {
		document.querySelector('#hp').innerHTML 	= this.hp;
		document.querySelector('#score').innerHTML 	= this.score;
		document.querySelector('#level').innerHTML 	= this.level;
	},

	win: function() {
		alert('Победа');
	},

	loss: function () {
		alert('Проигрыш');
	},

	clear: function () {
		this.score = 0;
		this.hp = 3;
		this.level = 1;

		this.getDate();
	}
}