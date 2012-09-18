function BackGround(img){
	this.bitmap = new createjs.Bitmap(img);
	this.bitmap.x = 0;
	this.bitmap.y = 0;
	stage.addChildAt(this.bitmap,0);
	this.node = new Array();
	this.bitmap.onPress = this.handPress;
}
BackGround.prototype.addNode = function(node){
	this.node.push(node);
}
BackGround.prototype.handPress = function(evt){
	var target = evt.target;
	var tempMouseX = evt.stageX;
	var tempMouseY = evt.stageY;
	var x = target.x;
	var y = target.y;
	var tempX = [];
	var tempY = [];
	for(var i = 0;i < stage.children.length;i++){
		tempX[i] = stage.children[i].x;
		tempY[i] = stage.children[i].y;
	}
	evt.onMouseMove = function(e){
		for(var i = 0;i < stage.children.length;i++){
			stage.children[i].x = tempX[i] + e.stageX - tempMouseX;
			stage.children[i].y = tempY[i] + e.stageY - tempMouseY;
		}

		stage.update();
	}
}