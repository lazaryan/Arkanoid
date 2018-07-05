let ball = {
	speedX: 1,
	speedY: 1.4,
	color: '#0E0EFB',
	x: 0,
	y: 0,
	radius: 7,
	dx : 1,
	dy : -1,

	init: function (x, y, r, c) {
		this.x = x;
		this.y = y;
		this.radius = r;
		this.color = c;
	},

	draw: function () {
		drawCircle(this.x, this.y, this.radius, this.color);
	},

	move: function () {
		if(player.active){
			this.x += this.speedX * this.dx;
			this.y += this.speedY * this.dy;
		}
	},

	collision: function () {
		for(let i in grid.nodes){
			let enemy = grid.nodes[i];

			if(isCollision(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2,
				enemy.x, enemy.y, enemy.width, enemy.height)){
				if((this.y - this.radius >= enemy.y) && ((this.y + this.radius) <= (enemy.y + enemy.height)) ){
					this.dx *= -1;
				}else{
					this.dy *= -1;
				}

				this.changeRandomColor();

				grid.destroy(i);
				tabel.upScore(1);

				if(grid.nodes.length == 0){
					gameClear();

					tabel.win();
				} else{
					if(tabel.score % 7 == 0){
						grid.generationMap();
						grid.clear();
						grid.create(grid.map);

						if(grid.nodes[grid.nodes.length - 1].y + grid.nodes[0].height >= player.y){
							gameClear();
							tabel.loss();
							break;
						}
					}

					if(tabel.score % 10 == 0){
						tabel.upLevel(1);
						this.speedY += 0.2;
						player.speed += 0.3;
					}
				}
			}
		}

		if((this.x + this.radius >= width) || (this.x - this.radius <= 0)){
			this.dx *= -1; 
		}

		if(this.y - this.radius <= 0){
			this.dy = 1;
		}

		if(this.y + this.radius >= height){
			this.init(player.x + Math.ceil(player.width / 2), player.y - this.radius, this.radius, this.color);
			player.active = false;
			tabel.updHp(1);

			if(tabel.hp <= 0){
				gameClear();

				tabel.loss();
			}
		}

		if(isCollision(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2,
			player.x, player.y, player.width, player.height)){
			if((this.y - this.radius >= player.y) && ((this.y + this.radius) <= (player.y + player.height)) ){
				this.dx *= -1;
			}else{
				this.dy *= -1;
			}

			if (this.dx == player.dx){
				this.speedX *= 1.1;
			}else{
				this.speedX /= player.dx != 0 ? 1.3 : 1;
			}

			this.dx = player.dx || this.dx;
		}
	},

	clear: function () {
		this.speedX = 1;
		this.speedY = 1.4;
		this.dx	= 1;
		this.dy	= -1;
	},

	changeRandomColor: function () {
  		this.color = ('#' + Math.floor(Math.random() * 16777215).toString(16));
	}
}