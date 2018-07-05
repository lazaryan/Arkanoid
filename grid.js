let grid = {
	nodes: [],
	map: {
		color: '#a22',
		width: 60,
		height: 30,
		offset: 5,
		tiles: []
	},

	add: function (x, y, w, h, c) {
		let tmp = new _Enemy(x, y, w, h, c);

		this.nodes.push(tmp);
	},

	draw: function() {
		for(en in this.nodes){
			this.nodes[en].draw();
		}
	},

	generation: function(count, w, h, color) {
		let 	dW = 5,
			dX = dW,
			dY = dW,
			dCountX = Math.ceil(width / (w + dW)) - 1,
			dAllW	= Math.ceil((width - (w + dW) * dCountX) / 2);
			dY = dAllW;

		for(let i = 0; i < count; i++){
			let tmp = [];

			for(let j = 0; j < dCountX; j++){
				if( j == 0) dX += dAllW - Math.ceil(dW / 2);
				this.add(dX, dY, w, h, color);
				dX += w + dW;
				tmp.push(1);
			}
			this.map.tiles.push(tmp);

			dY += h + dW;
			dX = dW;
		}
	},

	create: function (map) {
		let dOffsetX = (width - (map.tiles[0].length * (map.width + map.offset))) / 2;

		for(let t1 in map.tiles){
			for(let t2 in map.tiles[t1]){
				let tile = map.tiles[t1][t2];

				let dx = dOffsetX + t2 * (map.width + map.offset);
				let dy = map.offset + t1 * (map.height + map.offset);

				if(tile == 1){
					this.add(dx, dy, map.width, map.height, map.color);
				}
			}
		}

		this.map = map;
	},

	generationMap: function () {
		let length = this.map.tiles[0].length;
		let arr = [];

		for(let i = 0; i < length; i++){
			let tmp = Math.random();

			(tmp > 0.5) ? tmp = 1 : tmp = 0;

			arr.push(tmp);
		}

		this.map.tiles.splice(0, 0, arr);
	},

	clear: function () {
		this.nodes = [];
	},

	destroy: function (id) {
		this.nodes.splice(id, 1);

		let id_new = -1;

		for(let t1 in this.map.tiles){
			for(let t2 in this.map.tiles[t1]){
				if(this.map.tiles[t1][t2]){
					id_new++;

					if(id_new == id){
						this.map.tiles[t1][t2] = 0;
					}
				}
			}
		}
	}
}

let _Enemy = function(x, y, w, h, color){
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.color = color;
}
_Enemy.prototype.draw = function() {
	drawRect(this.x, this.y, this.width, this.height, this.color);
}