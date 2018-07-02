let grid = {
	nodes : [],

	add: function(x, y, w, h, c) {
		let tmp = new _Enemy(x, y, w, h, c);

		this.nodes.push(tmp);
	},

	generation: function(count, w, h, color) {
		let 	dW = 5,
			dX = dW,
			dY = dW,
			dCountX = Math.ceil(width / (w + dW)) - 1,
			dAllW	= Math.ceil((width - (w + dW) * dCountX) / 2);
			dY = dAllW;

		for(let i = 0; i < count; i++){
			for(let j = 0; j < dCountX; j++){
				if( j == 0) dX += dAllW - Math.ceil(dW / 2);
				this.add(dX, dY, w, h, color);
				dX += w + dW;
			}
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
	},

	clear: function () {
		this.nodes = [];
	},

	destroy: function (id) {
		this.nodes.splice(id, 1);
	},

	draw : function() {
		for(en in this.nodes){
			this.nodes[en].draw();
		}
	}
};

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