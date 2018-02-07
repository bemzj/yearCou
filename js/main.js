$(function(){
	$('.delete').remove();
	var music = 0;
	var musicOpen = true;
	var musicTween = setInterval(function() {
		music += 2;
		$('#music').css('transform', "rotate(" + music + "deg)");
		if(music == 360) {
			music = 0;
		}
	}, 10);
	$('#music').on('touchstart', function() {
		if(musicOpen == true) {
			musicOpen = false;
			clearInterval(musicTween);
			$('#bg')[0].pause();
		} else {
			musicOpen = true;
			musicTween = setInterval(function() {
				music += 2;
				$('#music').css('transform', "rotate(" + music + "deg)");
				if(music == 360) {
					music = 0;
				}
			}, 10);
			$('#bg')[0].play();
		}
	
	});
});
//游戏初始化
LInit(1000/40,"snimay",750,1207,main);
//游戏入口主函数
function main(){
	$('#label').css('bottom',-$('#label').height()+'px');
	//请求获取抽签人数
	$.get('people.json',function(data){
		people = data.number;
	});
	//请求是否已经抽签
	$.get('year.json',function(data){
		//如果已经修改 
		if(data.year==1)
		{
			yearNumber = parseInt(data.sign_img);
		}else{
			yearNumber = parseInt(Math.random()*9);
		}
		$('#year>img').attr('src','img/year'+yearNumber+'.jpg');
		//微信名
		var wxname = "邱梓佳";
		for(var i=0;i<yearName[yearNumber].length;i++)
		{
			$('.labelBox').find('p').eq(i).text(yearName[yearNumber][i]);	
		}
		showYear(yearNumber,wxname);
	});
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
	//金
	lLayer = new LSprite(); 
	backLayer.addChild(lLayer);
	//添加背景
	var back = getBitmap(result['loadBkg']);
	lLayer.addChild(back);
	
	//logo
	var logo = getBitmap(result['logo']);
	logo.y = 528;
	logo.x = rCenterWidth(logo);
	lLayer.addChild(logo);
	bigAndSmall(logo,2,2,1,0.01,0,true);
	//
	var bLayer = new LSprite();
	bLayer.graphics.drawRoundRect(0, "#000000", [200, 622, 334, 14, 7], true, "#a72c17");
	lLayer.addChild(bLayer);
	//加载层
	loadLayer = new LSprite();
	loadLayer.graphics.drawRoundRect(0, "#000000", [200, 622, 0, 14, 7], true, "#d6a821");
	lLayer.addChild(loadLayer);
	//数字
	textLayer = new setText(550,615,28,"0%",'#831b09');
	lLayer.addChild(textLayer);
	//红包1
	var redBag1 = getBitmap(result['redBag']);
	redBag1.y = 488;
	redBag1.x = 118;
	lLayer.addChild(redBag1);
	LTweenLite.to(redBag1,1.0,{y:422,x:70,loop:true,alpha:0,onComplete:function(){
		redBag1.x = 118;
		redBag1.y = 488;
		redBag1.alpha = 1;
	}});
	//红包2
	var redBag2 = getBitmap(result['redBag1']);
	redBag2.y = 500;
	redBag2.x = 560;
	lLayer.addChild(redBag2);
	LTweenLite.to(redBag2,1,{y:458,x:654,loop:true,alpha:0,onComplete:function(){
		redBag2.x = 560;
		redBag2.y = 500;
		redBag2.alpha = 1;
	}});
	//太阳
	var fourBig1 = getBitmap(result['fourBig']);
	fourBig1.y = 498;
	fourBig1.x = 208;
	lLayer.addChild(fourBig1);
	bling(fourBig1,0.5,1,0.5,true);
	LTweenLite.to(fourBig1,2,{loop:true,rotate:360,onComplete:function(){
		fourBig1.rotate = 0;
	}});
	var fourBig2 = getBitmap(result['fourBig']);
	fourBig2.y = 496;
	fourBig2.x = 542;
	lLayer.addChild(fourBig2);
	LTweenLite.to(fourBig2,2,{loop:true,rotate:-360,onComplete:function(){
		fourBig2.rotate = 0;
	}});
	var fourSmall1 = getBitmap(result['fourSmall']);
	fourSmall1.y = 528;
	fourSmall1.x = 190;
	lLayer.addChild(fourSmall1);
	LTweenLite.to(fourSmall1,2,{loop:true,rotate:-360,onComplete:function(){
		fourSmall1.rotate = 0;
	}});
	var fourSmall2 = getBitmap(result['fourSmall']);
	fourSmall2.y = 517;
	fourSmall2.x = 520;
	lLayer.addChild(fourSmall2);
	LTweenLite.to(fourSmall2,2,{loop:true,rotate:360,onComplete:function(){
		fourSmall2.rotate = 0;
	}});
	//星星
	var starTime = 0.5;
	var star1 = getBitmap(result['star']);
	star1.y = 550;
	star1.x = 537;
	lLayer.addChild(star1);
	LTweenLite.to(star1,starTime,{alpha:0.4,loop:true}).to(star1,starTime,{alpha:1});
	//星星
	var star2 = getBitmap(result['star']);
	star2.y = 574;
	star2.alpha = 0.4;
	star2.scaleX = 0.8;
	star2.scaleY = 0.8;
	star2.x = 160;
	lLayer.addChild(star2);
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
	homepage(10);
}
//首页
function homepage(lTime){
	lLayer.remove();
	loadLayer = null;
	textLayer = null;
	lLayer = null;
	//弹幕
	$.get('wx.json',function(data){
		mydata = data;
		console.log(mydata);
		addDanmu('#danmu','danmuBox',mydata,25);
	});
	//首页
	var homeLayer = new LSprite(); 
	backLayer.addChild(homeLayer);
	//添加背景
	var back = getBitmap(imgList['homepage']);
	homeLayer.addChild(back);	
	//添加灯光
	var clight = getBitmap(imgList['clight']);
	clight.x = -(clight.getWidth()-LGlobal.width)/2;
	clight.y = 60;
	homeLayer.addChild(clight);
	LTweenLite.to(clight,lTime,{rotate:360,loop:true,onComplete:function(){
		clight.rotate = 0;
	}});
	//添加舞台
	var stage = getBitmap(imgList['stage']);
	stage.x = 0;
	stage.y = LGlobal.height - stage.getHeight();
	homeLayer.addChild(stage);	
	//添加舞台
	var stageUp = getBitmap(imgList['stageUp']);
	homeLayer.addChild(stageUp);	
	//logo
	var logo = getBitmap(imgList['smallLogo']);
	logo.x = 26;
	logo.y = 22;
	homeLayer.addChild(logo);
	//记录人数
	var pnumber = new setTangles(people);
	pnumber.y = 24;
	pnumber.x =LGlobal.width-pnumber.getWidth()-29;
	homeLayer.addChild(pnumber);
	//红包1
	var redBag1 = getBitmap(imgList['red4']);
	redBag1.y = 850;
	redBag1.x = 250;
	homeLayer.addChild(redBag1);
	LTweenLite.to(redBag1,1.2,{y:602,x:-redBag1.getWidth(),loop:true,alpha:0,onComplete:function(){
		redBag1.x = 250;
		redBag1.y = 850;
		redBag1.alpha = 1;
	}});
	//红包2
	var redBag2 = getBitmap(imgList['red3']);
	redBag2.y = 880;
	redBag2.x = 438;
	homeLayer.addChild(redBag2);
	LTweenLite.to(redBag2,1.6,{y:606,x:750,loop:true,alpha:0,onComplete:function(){
		redBag2.x = 438;
		redBag2.y = 880;
		redBag2.alpha = 1;
	}});
	//红包2
	var redBag3 = getBitmap(imgList['red3']);
	redBag3.y = 658;
	redBag3.x = 364;
	homeLayer.addChild(redBag3);
	LTweenLite.to(redBag3,2,{y:318,x:750,loop:true,alpha:0,onComplete:function(){
		redBag3.x = 364;
		redBag3.y = 658;
		redBag3.alpha = 1;
	}});
	
	//星星
	var starTime = 0.5;
	var star1 = getBitmap(imgList['bigStar']);
	star1.y = 466;
	star1.x = 528;
	homeLayer.addChild(star1);
	bigAndSmall(star1,2,2,1,0.12,0,true);
	var star2 = getBitmap(imgList['bigStar']);
	star2.y = 369;
	star2.x = 14;
	homeLayer.addChild(star2);
	bigAndSmall(star2,2,2,1,0.1,0,true);
	//橙子
	var circle1 = getBitmap(imgList['circle1']);
	circle1.x = 100;
	circle1.y = 1060;
	homeLayer.addChild(circle1);
	bigAndSmall(circle1,2,2,1,0.02,0,true);
	var o1 = getBitmap(imgList['o1']);
	o1.x = 39;
	o1.y = 928;
	o1.rotate = 5;
	homeLayer.addChild(o1);
	LTweenLite.to(o1,0.5,{rotate:5,loop:true}).to(o1,0.5,{rotate:-5});
	var circle2 = getBitmap(imgList['circle2']);
	circle2.x = 550;
	circle2.y = 1060;
	homeLayer.addChild(circle2);
	bigAndSmall(circle2,2,2,1,0.02,0,true);
	var o2 = getBitmap(imgList['o2']);
	o2.x = 546;
	o2.y = 920;
	o2.rotate = -20;
	homeLayer.addChild(o2);
	LTweenLite.to(o2,0.5,{rotate:-20,loop:true}).to(o2,0.5,{rotate:-10});
	//添加签
	var cup = getBitmap(imgList['cup']);
	cup.x = 92;
	cup.y = 356;
	homeLayer.addChild(cup);
	//添加灯光
	var light = getBitmap(imgList['light']);
	light.x = 116;
	light.y = 312;
	homeLayer.addChild(light);
	bling(light,0.1,0.5,1,true);
	//添加标题
	var title = getBitmap(imgList['title']);
	title.x = rCenterWidth(title);
	title.y = 73;
	homeLayer.addChild(title);
//	var tm = new LTransitionManager(title);
//	var tp = {
//		type: LTransition.Fly,
//		startPoint: 2,
//		duration: 0.1,
//		direction: LTransition.IN,
//		easing: Strong.easeIn()
//	};
//	tm.startTransition(tp);
	//添加标题
	var wordTitle = getBitmap(imgList['wordTitle']);
	wordTitle.x = rCenterWidth(wordTitle);
	wordTitle.y = 136;
	homeLayer.addChild(wordTitle);
	var maskObj = new LSprite();
	maskObj.graphics.drawRect(0, "#ff0000", [wordTitle.x,136,0,132]);
	wordTitle.mask = maskObj;
	var k = 0;
	setTimeout(function(){
		var wordTween = LTweenLite.to(wordTitle,0.002,{loop:true,onComplete:function(){
			k++;
			maskObj.graphics.clear();
			maskObj.graphics.drawRect(0, "#ff0000", [wordTitle.x,136,4.32*k,132]);
			wordTitle.mask = maskObj;
			if(k==100)
			{
				wordTween.pause();
				LTweenLite.to(tWord,1.0,{alpha:1.0,onComplete:function(){
					shankOpen = true;
				}});
			}
		}});
	},500);
	
	//标题
	var tWord = getBitmap(imgList['redTitle']);
	tWord.x = 175;
	tWord.y = 302;
	tWord.alpha = 0;
	homeLayer.addChild(tWord);
	//添加云
	var sky = getBitmap(imgList['sky']);
	sky.x = 0;
	sky.y = LGlobal.height - sky.getHeight();
	homeLayer.addChild(sky);
//	setTimeout(function(){
		bigAndSmall(sky,2,2,1,0.01,0,true);
//	},2500);
//	var sm = new LTransitionManager(sky);
//	var sp = {
//		type: LTransition.Fly,
//		startPoint: 8,
//		duration: 0.1,
//		direction: LTransition.IN,
//		easing: Strong.easeIn()
//	};
//	sm.startTransition(sp);
	//摇一摇
	var shank = getBitmap(imgList['shank']);
	shank.x = 276;
	shank.y = 698;
	shank.rotate = -20;
	homeLayer.addChild(shank);
	LTweenLite.to(shank,0.5,{rotate:20,loop:true}).to(shank,0.5,{rotate:-20});
	//纸
	var positions = [50,200,350,500,650];
	var homeTime = 1.0;
	var last = 0;
	LTweenLite.to(homeLayer,homeTime,{loop:true,onComplete:function(){
		var num = parseInt(Math.random()*5);
		while(last==num)
		{
			num = parseInt(Math.random()*5);
		}
		last = num;
		var pTime = 9+parseInt(Math.random()*1);
		var pPosition = positions[num]+parseInt(Math.random()*50);
		homeLayer.addChild(new paper(pPosition,pTime));

	}});
//	$(document).on('touchstart',function(){
//		$('#label').css({'opacity':1,'bottom':0}).find('.label').addClass('labelrotate');
//                  	$('#shank')[0].play();
//                  	document.getElementById("shank").onended = function() {
//                  		$('#over')[0].play();
//                  		document.getElementById("over").onended = function() {
//                  			//关闭红包页面
//                  			$('.close').on('touchstart', function(e) {
//                  				e.stopPropagation();
//                  				$('.hitRed').fadeOut();
//                  				setTimeout(function() {
//                  					$('.hitRed').fadeIn(1000);
//                  				}, 6000);
//                  			});
//                  			//点击跳转页面
//                  			$('.hitRed a').on('touchstart', function(e) {
//                  				e.stopPropagation();
//                  				window.location.href = 'http://295995.m.365huaer.com/mobile/newgame/index.jsp?aid=418e1fef0f2343f0871bff99c9f0485c&activityid=81086&wuid=295995&keyversion=0&isFromApiFilter=1';
//                  			});
//                  			$('#snimay').fadeOut(500);
//                  			$('#yearOut').fadeIn(500);
//                  			$('#label').fadeOut(500);
//                  			$('#music').fadeIn(500);
////                  		}
//                  	
//                  	};
//	})
	//摇一摇数据
	var u = navigator.userAgent, app = navigator.appVersion;
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);	
	var SHAKE_THRESHOLD = 2000;
	if(isiOS==true){
	    SHAKE_THRESHOLD=500;
	}
	var last_update = 0;  
	var x = y = z = last_x = last_y = last_z = 0;  
	/*
	* @手机运动监听，摇一摇开始
	* */
	(function init() {
        if (window.DeviceMotionEvent) {  
             window.addEventListener('devicemotion', deviceMotionHandler, false);  
         } else {  
            alert('not support mobile event');  
   		}  
    })();
    function deviceMotionHandler(eventData) {

            var acceleration = eventData.accelerationIncludingGravity;  
            var curTime = new Date().getTime();  
            if ((curTime - last_update) > 100) {  
                var diffTime = curTime - last_update;  
                last_update = curTime;  
                x = acceleration.x;  
                y = acceleration.y;  
                z = acceleration.z;  
                var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;  
                if (speed > SHAKE_THRESHOLD) {  
                    if(shankOpen==true)
                    {
                    	clearInterval(cTween);
                    	$('#danmu').hide();
                    	shankOpen=false;
                    	var bottom = ($(window).height()-$('#label').height())/2
                    	$('#label').css({'opacity':1,'bottom':bottom}).find('.label').addClass('labelrotate');
                    	$('#shank')[0].play();
                    	document.getElementById("shank").onended = function() {
                    		$('#over')[0].play();
                    		document.getElementById("over").onended = function() {
                    			//关闭红包页面
                    			$('.close').on('touchstart', function(e) {
                    				e.stopPropagation();
                    				$('.hitRed').fadeOut();
                    				setTimeout(function() {
                    					$('.hitRed').fadeIn(1000);
                    				}, 6000);
                    			});
                    			//点击跳转页面
                    			$('.hitRed a').on('touchstart', function(e) {
                    				e.stopPropagation();
                    				window.location.href = 'http://295995.m.365huaer.com/mobile/newgame/index.jsp?aid=418e1fef0f2343f0871bff99c9f0485c&activityid=81086&wuid=295995&keyversion=0&isFromApiFilter=1';
                    			});
                    			$('#label').fadeOut(500);
                    			$('#snimay').fadeOut(500);
                    			$('#yearOut').fadeIn(450);
                    			$('#music').fadeIn(450);
                    		}
                    	
                    	};
                    }
                }  
                last_x = x; 
                last_y = y;  
                last_z = z;  
            }  
        }
}
function paper(x,time){
	base(this,LSprite,[]);	
	var self = this;
	self.x = x;
	self.y = -17;
	self.bitmap = new LBitmap(new LBitmapData(imgList['paper']));	
	self.addChild(self.bitmap);
	LTweenLite.to(self,time,{y:1207,onComplete:function(){
		self.remove();
	}});
}
function labels(x,y,time1,time2,delay){
	base(this,LSprite,[]);	
	var self = this;
	self.x = x;
	self.y = 1207;
	self.bitmap = new LBitmap(new LBitmapData(imgList['label']));	
	self.addChild(self.bitmap);
	LTweenLite.to(self,time1,{delay:delay,y:1207-self.bitmap.getHeight()-y}).to(self,time2,{y:1207,onComplete:function(){
		self.remove();
	}});
}