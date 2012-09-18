function Line(color){
	this.startPoint;
	this.endPoint;
	this.lineColor = color;
}
Line.prototype.setStartPoint = function(p){
	this.startPoint = p;
}
Line.prototype.setEndPoint = function(p){
	this.endPoint = p;
}
Line.prototype.drawLine = function(){
	var tLine = new createjs.Shape();
	tLine.graphics.setStrokeStyle(1,"round").beginStroke(this.lineColor).moveTo(this.startPoint.x, this.startPoint.y).lineTo(this.endPoint.x,this.endPoint.y);
	stage.addChildAt(tLine,2);
	stage.update();
}