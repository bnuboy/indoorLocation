function Target(img){
	this.img = img;
	this.arr = new Array();
	this.calculate = new Calculate();
	this.bitmap = new createjs.Bitmap(this.img);
	this.bitmap.regX = 15;
	this.bitmap.regY = 15;
	this.bitmap.onClick = handTargetOnClick;
}
Target.prototype.addRssi = function(node,rssi){
	this.arr.push([node,rssi]);
}
Target.prototype.calZhixin = function(){
	var tempr = this.arr[0][1];
	var tempi = 0;
	for(var i = 1; i < this.arr.length; i ++){
		if(tempr < this.arr[i][1]){
			tempr = this.arr[i][1];
			tempi = i;
		}
	}
	this.ox = (this.arr[0][0].x + this.arr[1][0].x + this.arr[2][0].x) / 3;
	this.oy = (this.arr[0][0].y + this.arr[1][0].y + this.arr[2][0].y) / 3;
	this.ox = this.ox + (this.arr[tempi][0].x - this.ox)*2 / 5;
	this.oy = this.oy + (this.arr[tempi][0].y - this.oy)*2 / 5;
	return [this.ox,this.oy];
}
Target.prototype.drawTarget = function(){
	
	this.bitmap.x = this.ox;
	this.bitmap.y = this.oy;
	stage.addChildAt(this.bitmap,3);
	stage.update();
}
Target.prototype.calPos = function(m,n,o){
	for(var i = 0; i < this.arr.length; i++){
		var r = this.arr[i][1];
		var x = this.arr[i][0].x;
		var y = this.arr[i][0].y;
		console.log("rssi" + r);
		console.log("node.x:" + this.arr[i][0].x);
		console.log("node.y:" + this.arr[i][0].y);
		var circle = new Circle(x,y,r);
		this.calculate.addCircle(circle);
	}
	return this.calculate.addPoints(m,n,o);
}
function handTargetOnClick(evt){
	var target = evt.target;
	document.getElementById("targetInfo").innerHTML = "未知节点坐标：（" + target.x + "," + target.y + ")";
}