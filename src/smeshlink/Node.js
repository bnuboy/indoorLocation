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
	//this.bitmap.onClick = handBitmapOnClick;
	stage.addChild(this.bitmap);
}
Node.prototype.setRssi = function(rssi){
	this.rssi = rssi;
}
Node.prototype.handBitmapOnPress= function (evt){
	var target = evt.target;
	console.log(target);
	evt.onMouseMove = function(e){
		console.log(e);
		target.x = e.stageX;
		target.y = e.stageY;
		stage.update();
	}
}
function handBitmapOnPress(evt){
	var target = evt.target;
	var oldNodeX  = target.x;
	var oldMouseX = evt.stageX;
	var oldNodeY  = target.y;
	var oldMouseY = evt.stageY;
	console.log(target);
	var moveFlag = false;
	evt.onMouseMove = function(e){
		moveFlag = true;
		console.log(e);
		target.x = oldNodeX + e.stageX - oldMouseX;
		target.y = oldNodeY + e.stageY - oldMouseY;
		stage.update();
		document.getElementById("nodeInfo").innerHTML = "节点坐标：（" + target.x + "," + target.y + ")";
	}
	evt.onMouseUp = function(e){
		if(!moveFlag){
			document.getElementById("nodeInfo").innerHTML = "节点坐标：（" + target.x + "," + target.y + ")";
		}else{
			moveFlag = false;
		}
	}
}