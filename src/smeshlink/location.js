var loader;
var nodePos;


function handBitmapOnPress(evt){
	var target = evt.target;
	console.log(target);
	evt.onMouseMove = function(e){
		console.log(e);
		target.x = e.stageX;
		target.y = e.stageY;
		//console.log(e.stageX);
		//console.log(bitmap.x);
		stage.update();
	}
}
function init() {
	canvas = document.getElementById("canvas");
	stage = new createjs.Stage(canvas);
	createjs.Touch.enable(stage);
	getNodePos();

	var manifest = [
	    {src:"img/bg.png"},
	    {src:"img/node.png"},
	    {src:"img/target.png"}
	    ];
	loader = new PreloadJS();
    loader.onFileLoad = handleFileLoad;
    loader.onComplete = handleComplete;
    loader.loadManifest(manifest);
	
	
}
function getNodePos(){
	nodePos = [
	  {id:1,x:25,y:25},
	  {id:2,x:200,y:100},
	  {id:3,x:400,y:100},
	  {id:4,x:100,y:300},
	  {id:5,x:200,y:300},
	  {id:6,x:400,y:300}
	  ];
}
function handleFileLoad(){
	console.log("Fileload");
}
function handleComplete(){
	console.log("complete");
	var node = [];
	var background = new BackGround("img/bg.png");
	
	for(var i = 0; i < nodePos.length; i++)
	{
		node[i] = new Node(nodePos[i].id,nodePos[i].x,nodePos[i].y);
		background.addNode(node[i]);
	}
	stage.update();
	var target = new Target();
	target.addRssi(node[0], 200);
	target.addRssi(node[1], 100);
	target.addRssi(node[3], 300);
	var data = target.calZhixin();
	console.log(data);
	target.drawTarget();
}