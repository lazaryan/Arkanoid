let player = {
	x : 50,
	y: 440,
	width: 100,
	height: 20,
	color: '#DDF705',
	speed: 2.2,
	dx: 0.1,
	active: false,

	init: function (x, w, color) {
		this.x = x;
		this.width = w;
		this.color = color;
	},

	draw: function () {
		drawRect(this.x, this.y, this.width, this.height, this.color);
	},

	move: function () {
		if((isKeyDown('LEFT') || isKeyDown('A')) && this.x >= 0){
			this.x -= this.speed;
			this.dx = -1;

			if(!this.active){
				ball.x -= this.speed;
			}
		} else if((isKeyDown('RIGHT') || isKeyDown('D')) && (this.x + this.width) <= width){
			this.x += this.speed;
			this.dx = 1;

			if(!this.active){
				ball.x += this.speed;
			}
		} else{
			this.dx = 0;
		}
		
		if(isKeyDown('SHIFT')){
			this.active = true;
		}
	}
}