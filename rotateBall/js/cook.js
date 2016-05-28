function Cook(option){
	this._init(option);
}
Cook.prototype = {
	_init: function(option){
		this.x = option.x;
		this.y = option.y;
		this.radius = option.radius;
		this.data = option.data;
		var self = this;
		this.groupAll = new Konva.Group({
			x: self.x,
			y: self.y
		});

		this.textGroup = new Konva.Group({
			x: 0,
			y: 0
		});
		this.groupAll.add(this.textGroup);

		this.arcGroup = new Konva.Group({
			x: 0,
			y: 0
		});
		this.groupAll.add(this.arcGroup);
		var cir = new Konva.Circle({
			x: 0,
			y: 0,
			stroke: "#cccccc",
			radius: this.radius + 10
		});

		this.groupAll.add(cir);
		var rotateAgnle = -90;
		var angle = 0;
		this.data.forEach(function(item,index){
			angle = item.value * 360;
			var arc = new Konva.Arc({
				x: 0,
				y: 0,
				innerRadius: 0,
				outerRadius: self.radius,
				fill: item.color,
				angle: angle,
				rotation: rotateAgnle
			});
			self.arcGroup.add(arc);
			var wordTempl = rotateAgnle + 1/2 * angle;
			var word = new Konva.Text({
				x: (arc.outerRadius() + 30) * Math.cos( wordTempl * Math.PI /180),
				y: (arc.outerRadius() + 30) * Math.sin( wordTempl * Math.PI /180),
				text: item.value * 100 + "%",
				stroke: item.color
			});
			if(wordTempl> 90 && wordTempl < 270){
				word.x((arc.outerRadius() + 30) * Math.cos( wordTempl * Math.PI /180) - word.width());
			}
			self.textGroup.add(word);
			rotateAgnle += angle;
		});
	},
	animate: function(){
		this.arcGroup.getChildren().each(function(item,index){
			item.angle(0);
			item.to({
				angle: this.data[index].value * 360,
				duration: 2
			});
		});
	},
	addToGroupOrLayer:function(org){
		org.add(this.groupAll);
	}
}