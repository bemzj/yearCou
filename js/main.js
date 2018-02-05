//游戏初始化
LInit(1000/40,"hotata",750,1207,main);
//游戏入口主函数
function main(){
    LGlobal.stageScale = LStageScaleMode.EXACT_FIT;//设置全屏变量
    LGlobal.screen(LStage.FULL_SCREEN);//设置全面适应
    backLayer = new LSprite();//创建背景层
    addChild(backLayer);//添加背景层到游戏环境中
    musicLayer = new LSprite();//创建音乐层
    addChild(musicLayer);//添加音乐层到游戏环境中
    LLoadManage.load(loadImg,'',loadImging);
}
//预加载页面
function loadImging(result){
	LLoadManage.load(gameImg,loadProgress,startGame);
	//添加背景
	var back = getBitmap(result['loadBkg']);
	backLayer.addChild(back);
	//金
	//logo
	var logo = getBitmap(result['logo']);
	logo.y = 528;
	logo.x = rCenterWidth(logo);
	backLayer.addChild(logo);
	bigAndSmall(logo,2,2,1,0.01,0,true);
	//
	var bLayer = new LSprite();
	bLayer.graphics.drawRoundRect(0, "#000000", [200, 622, 334, 14, 7], true, "#a72c17");
	backLayer.addChild(bLayer);
	//加载层
	loadLayer = new LSprite();
	loadLayer.graphics.drawRoundRect(0, "#000000", [200, 622, 0, 14, 7], true, "#d6a821");
	backLayer.addChild(loadLayer);
	//数字
	textLayer = new setText(550,615,28,"0%",'#831b09');
	backLayer.addChild(textLayer);
	//红包1
	var redBag1 = getBitmap(result['redBag']);
	redBag1.y = 488;
	redBag1.x = 118;
	backLayer.addChild(redBag1);
	LTweenLite.to(redBag1,1.0,{y:422,x:70,loop:true,alpha:0,onComplete:function(){
		redBag1.x = 118;
		redBag1.y = 488;
		redBag1.alpha = 1;
	}});
	//红包2
	var redBag2 = getBitmap(result['redBag1']);
	redBag2.y = 500;
	redBag2.x = 560;
	backLayer.addChild(redBag2);
	LTweenLite.to(redBag2,1,{y:458,x:654,loop:true,alpha:0,onComplete:function(){
		redBag2.x = 560;
		redBag2.y = 500;
		redBag2.alpha = 1;
	}});
	//太阳
	var fourBig1 = getBitmap(result['fourBig']);
	fourBig1.y = 498;
	fourBig1.x = 208;
	backLayer.addChild(fourBig1);
	bling(fourBig1,0.5,1,0.5,true);
	LTweenLite.to(fourBig1,2,{loop:true,rotate:360,onComplete:function(){
		fourBig1.rotate = 0;
	}});
	var fourBig2 = getBitmap(result['fourBig']);
	fourBig2.y = 496;
	fourBig2.x = 542;
	backLayer.addChild(fourBig2);
	LTweenLite.to(fourBig2,2,{loop:true,rotate:-360,onComplete:function(){
		fourBig2.rotate = 0;
	}});
	var fourSmall1 = getBitmap(result['fourSmall']);
	fourSmall1.y = 528;
	fourSmall1.x = 190;
	backLayer.addChild(fourSmall1);
	LTweenLite.to(fourSmall1,2,{loop:true,rotate:-360,onComplete:function(){
		fourSmall1.rotate = 0;
	}});
	var fourSmall2 = getBitmap(result['fourSmall']);
	fourSmall2.y = 517;
	fourSmall2.x = 520;
	backLayer.addChild(fourSmall2);
	LTweenLite.to(fourSmall2,2,{loop:true,rotate:360,onComplete:function(){
		fourSmall2.rotate = 0;
	}});
	//星星
	var starTime = 0.5;
	var star1 = getBitmap(result['star']);
	star1.y = 550;
	star1.x = 537;
	backLayer.addChild(star1);
	LTweenLite.to(star1,starTime,{alpha:0.4,loop:true}).to(star1,starTime,{alpha:1});
	//星星
	var star2 = getBitmap(result['star']);
	star2.y = 574;
	star2.alpha = 0.4;
	star2.scaleX = 0.8;
	star2.scaleY = 0.8;
	star2.x = 160;
	backLayer.addChild(star2);
	LTweenLite.to(star2,starTime,{alpha:1,loop:true}).to(star2,starTime,{alpha:0.4});
}
//加载函数
function loadProgress(pre){
	var num = parseInt(pre);	
	textLayer.childList["0"].text = num+"%";
	loadLayer.graphics.clear();
	loadLayer.graphics.drawRoundRect(0, "#000000", [200, 622,334*num/100, 14, 7], true, "#d6a821");
}
//游戏开始
function startGame(result){
	imgList=result;

}
