var loader;
var nodePos;
var targetImg;
var backgroundImg;
var nodeImg;
var history;
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
	history = new History();
	history.data = history.getData();
	//console.log(history.data);
	//history.startTrace(history.data);
	//return;
	createjs.Touch.enable(stage);
	getNodePos();
	targetImg = "img/t.png";
	nodeImg   = "img/n.png";
	backgroundImg = "img/bg.png";

	var manifest = [
	    {src:backgroundImg},
	    {src:nodeImg},
	    {src:targetImg}
	    ];
	loader = new PreloadJS();
    loader.onFileLoad = handleFileLoad;
    loader.onComplete = handleComplete;
    loader.loadManifest(manifest);
	
	
}
function getNodePos(){
	nodePos = [
	  {id:1,x:125,y:125},
	  {id:2,x:200,y:100},
	  {id:3,x:400,y:100},
	  {id:4,x:700,y:300},
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
	var background = new BackGround(backgroundImg);
	
	
	for(var i = 0; i < nodePos.length; i++)
	{
		node[i] = new Node(nodePos[i].id,nodePos[i].x,nodePos[i].y,nodeImg);
		background.addNode(node[i]);
		history.addNode(node[i]);
		console.log(history.data);
	}
	//history.calPoint();
	//history.calPoint();
	//setInterval(function(){history.calPoint();},2000);
	history.startTrace();
	stage.update();
	
}