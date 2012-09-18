function History(){
	this._curId = 1;
	this._node = [];
	this._target = [];
	this.data = new Array();
	this.line = new Line("#000000");
	//this.time;
}
History.prototype.startTrace = function(){
	var his = this;
	this.time = setInterval(function(){his.calPoint();},1000);
}
History.prototype.getData = function(){
	var data = [
		{seqid:0,moveid:1,refid:1,rssi:100},
		{seqid:0,moveid:1,refid:2,rssi:200},
		{seqid:0,moveid:1,refid:4,rssi:100},       
	    {seqid:1,moveid:1,refid:1,rssi:100},
	    {seqid:1,moveid:1,refid:2,rssi:200},
	    {seqid:1,moveid:1,refid:4,rssi:100},
	    {seqid:2,moveid:1,refid:1,rssi:200},
	    {seqid:2,moveid:1,refid:2,rssi:100},
	    {seqid:2,moveid:1,refid:5,rssi:100},
	    {seqid:3,moveid:1,refid:2,rssi:300},
	    {seqid:3,moveid:1,refid:3,rssi:100},
	    {seqid:3,moveid:1,refid:4,rssi:100},
	    {seqid:4,moveid:1,refid:2,rssi:100},
	    {seqid:4,moveid:1,refid:3,rssi:100},
	    {seqid:4,moveid:1,refid:5,rssi:300},
	    {seqid:5,moveid:1,refid:2,rssi:100},
	    {seqid:5,moveid:1,refid:3,rssi:100},
	    {seqid:5,moveid:1,refid:6,rssi:300},
	    {seqid:6,moveid:1,refid:1,rssi:100},
	    {seqid:6,moveid:1,refid:2,rssi:100},
	    {seqid:6,moveid:1,refid:3,rssi:300},
	    {seqid:7,moveid:1,refid:1,rssi:100},
	    {seqid:7,moveid:1,refid:2,rssi:300},
	    {seqid:7,moveid:1,refid:3,rssi:100},
	    {seqid:8,moveid:1,refid:1,rssi:100},
	    {seqid:8,moveid:1,refid:3,rssi:200},
	    {seqid:8,moveid:1,refid:4,rssi:100},
	    {seqid:9,moveid:1,refid:1,rssi:100},
	    {seqid:9,moveid:1,refid:3,rssi:100},
	    {seqid:9,moveid:1,refid:4,rssi:400},
	    {seqid:10,moveid:1,refid:1,rssi:100},
	    {seqid:10,moveid:1,refid:2,rssi:100},
	    {seqid:10,moveid:1,refid:4,rssi:400},
	    {seqid:11,moveid:1,refid:2,rssi:200},
	    {seqid:11,moveid:1,refid:5,rssi:100},
	    {seqid:11,moveid:1,refid:4,rssi:100},
	    {seqid:12,moveid:1,refid:2,rssi:100},
	    {seqid:12,moveid:1,refid:6,rssi:100},
	    {seqid:12,moveid:1,refid:4,rssi:300}
	    ];
	return data;
//	this.data = data;
}
History.prototype.addNode  = function(node){
	this._node.push(node);
}

History.prototype.calPoint = function(){
	console.log(this.data);
	var target = new Target(targetImg);
	for(var i = 0; i < this.data.length; i ++){
		if(this.data[i].seqid == this._curId){
			for(var j = 0; j < this._node.length; j ++){
				if(this._node[j].nodeId == this.data[i].refid){
					target.addRssi(this._node[j],this.data[i].rssi);
//					return;
				}
			}
			
		}
			
	}
	var data = target.calZhixin();
	var startPoint;
	if(this._curId == 1){
		startPoint = new Point(target.ox,target.oy);
		this.line.setStartPoint(startPoint);
	}else{
		endPoint   = new Point(target.ox,target.oy);
		this.line.setEndPoint(endPoint);
		this.line.drawLine();
		this.line.setStartPoint(endPoint);
	}
	
	console.log(data);
	target.drawTarget();
	this._curId++;
	stage.update();
	if(this._curId == 13){
		clearInterval(this.time);
	}
}

