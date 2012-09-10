function Node(nodeId,x,y){
	this.nodeId = nodeId;
	this.x      = x;
	this.y      = y;
	this.bitmap = new createjs.Bitmap("img/node.png");
	this.bitmap.x = this.x;
	this.bitmap.y = this.y;
	this.bitmap.regX = 25;
	this.bitmap.regY = 25;
	this.bitmap.onPress = handBitmapOnPress;
	stage.addChild(this.bitmap);
}
Node.prototype.setRssi = function(rssi){
	this.rssi = rssi;
}