function Node(nodeId,x,y,nodeImg){
	this.nodeId = nodeId;
	this.x      = x-25;
	this.y      = y-25;
	this.bitmap = new createjs.Bitmap(nodeImg);
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