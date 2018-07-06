let tabel = {
	score: 0,
	hp: 3,
	level : 1,
	record: [],

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
	},

	addRecord: function () {
		let tmp = {
			"score": this.score,
			"level": this.level
		};

		this.record.push(tmp);

		let div =document.querySelector('.js-tabel-record');
		div.innerHTML += '<p>Уровень: '+ this.record[this.record.length - 1].level +',  Счет: '+ this.record[this.record.length - 1].score +'</p>';
	}
}