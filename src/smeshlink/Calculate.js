function Calculate(){
	this.circles = new Array();
	this.points  = new Array();
}
Calculate.prototype.addCircle = function(c){
	this.circles.push(c);
}
Calculate.prototype.calPoints = function(i,j){
	var x = this.circles[i].x;
	var y = this.circles[i].y;
	var R = this.circles[i].r;
	
	var a = this.circles[j].x;
	var b = this.circles[j].y;
	var S = this.circles[j].r;
	
	
//	l = Math.sqrt((a-x)^2 + (b-y)^2);
//	k1 = (b-y)/(a-x);
//	k2 = -1/k1;
	
	L = Math.sqrt(Math.pow((a-x),2)+Math.pow((b-y),2)); 
	K1=(b-y)/(a-x);
	K2=-1/K1;
	X0=x+(a-x)*(Math.pow(R, 2)-Math.pow(S,2)+Math.pow(L,2))/(2*Math.pow(L,2));
	console.log("x:" + x);
	console.log("x0:" + X0);
	Y0=y+K1*(X0-x);
	R2=Math.pow(R,2)-Math.pow((X0-x),2)-Math.pow((Y0-y),2);
	
	Xc=X0-Math.sqrt(R2/(1+ Math.pow(K2,2)));
	Yc=Y0+K2*(Xc-X0);
	Xd=X0+Math.sqrt(R2/(1+ Math.pow(K2,2)));
	Yd=Y0+K2*(Xd-X0);
	

	
	console.log("k1 :" + K1);
	console.log("k2 :" + K2);
	console.log("xc :" + Xc);
	console.log("yc :" + Yc);
	console.log("xd :" + Xd);
	console.log("yd :" + Yd);

	return [[Xc,Yc],[Xd,Yd]];
	
}
Calculate.prototype.addPoints = function(i,j,c){
	var point = this.calPoints(i,j);
	var point1x = point[0][0];
	var point1y = point[0][1];
	var point2x = point[1][0];
	var point2y = point[1][1];
	console.log(point1x);
	console.log(point1y);
	console.log(this.circles[c].x);
	console.log(this.circles[c].y);
	var L1 = this.calDistance(point1x, point1y, this.circles[c].x, this.circles[c].y);
	var L2 = this.calDistance(point2x, point2y, this.circles[c].x, this.circles[c].y);
	var d3 = this.circles[c].r;
	var e3;
	if((L1 - d3) <= (L2 - d3)){
		e3 = Math.abs(L1 - d3);
		return [e3, point1x, point1y];
	}else{
		e3 = Math.abs(L2 - d3);
		return [e3, point2x, point2y];
	}
	
}
Calculate.prototype.calDistance = function(x0,y0,x1,y1){
	var l = Math.sqrt(Math.pow(x0-x1,2) + Math.pow(y0 - y1, 2));
	return l;
	
}