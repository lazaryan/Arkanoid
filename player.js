let player = {
	level : 1,
	hp: 3,
	x: 50,
	y: 440,
	width: 100,
	height: 20,
	color: '#DDF705',
	speed: 2,
	dx: 0,
	score: 0,

	updScore : function (score) {
		this.score += score;
		document.querySelector('#score').innerHTML = this.score;
	},

	updHp : function (hp) {
		this.hp -= hp;
		document.querySelector('#hp').innerHTML = this.hp;
	},

	draw : function() {
		drawRect(this.x, this.y, this.width, this.height, this.color);
	},

	move : function() {
		if(isKeyDown('LEFT') || isKeyDown('A')){
			this.x -= this.speed;
			this.dx = -1;
		} else if(isKeyDown('RIGHT') || isKeyDown('D')){
			this.x += this.speed;
			this.dx = 1;
		} else{
			this.dx = 0;
		}
	},

	init : function (x, w, color) {
		this.x = x;
		this.width = w;
		this.color = color;
	}
}