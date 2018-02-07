var url="";
//加载页面的图片
var loadImg = [
	{path:url+'img/logo.png',type:'img',name:'logo'},//logo
	{path:url+'img/fourBig.png',type:'img',name:'fourBig'},//
	{path:url+'img/fourSmall.png',type:'img',name:'fourSmall'},//
	{path:url+'img/loadBkg.jpg',type:'img',name:'loadBkg'},//加载背景
	{path:url+'img/redBag.png',type:'img',name:'redBag'},//红包
	{path:url+'img/redBag1.png',type:'img',name:'redBag1'},//红包1
	{path:url+'img/star.png',type:'img',name:'star'},//星星
]
//加载的图片的资源
var gameImg = [
	{path:url+'img/logo.png',type:'img',name:'logo'},//logo
	{path:url+'img/red.png',type:'img',name:'red'},//红包
	{path:url+'img/close.png',type:'img',name:'close'},//关闭
	{path:url+'img/year1.jpg',type:'img',name:'year1'},//关闭
	{path:url+'img/year2.jpg',type:'img',name:'year2'},//关闭
	{path:url+'img/year3.jpg',type:'img',name:'year3'},//关闭
	{path:url+'img/year4.jpg',type:'img',name:'year4'},//关闭
	{path:url+'img/year5.jpg',type:'img',name:'year5'},//关闭
	{path:url+'img/year6.jpg',type:'img',name:'year6'},//关闭
	{path:url+'img/year7.jpg',type:'img',name:'year7'},//关闭
	{path:url+'img/year8.jpg',type:'img',name:'year8'},//关闭
	{path:url+'img/head.png',type:'img',name:'head'},//关闭
	{path:url+'img/er.png',type:'img',name:'er'},//关闭
	{path:url+'img/fk.png',type:'img',name:'fk'},//关闭
	{path:url+'img/homepage.jpg',type:'img',name:'homepage'},//首页
	{path:url+'img/cup.png',type:'img',name:'cup'},//关闭
	{path:url+'img/shank.png',type:'img',name:'shank'},//关闭
	{path:url+'img/light.png',type:'img',name:'light'},//关闭
	{path:url+'img/o1.png',type:'img',name:'o1'},//关闭
	{path:url+'img/o2.png',type:'img',name:'o2'},//关闭
	{path:url+'img/sky.png',type:'img',name:'sky'},//关闭
	{path:url+'img/stage.png',type:'img',name:'stage'},//关闭
	{path:url+'img/stageUp.png',type:'img',name:'stageUp'},//关闭
	{path:url+'img/wordTitle.png',type:'img',name:'wordTitle'},//关闭
	{path:url+'img/title.png',type:'img',name:'title'},//关闭
	{path:url+'img/clight.png',type:'img',name:'clight'},//关闭
	{path:url+'img/smallLogo.png',type:'img',name:'smallLogo'},//logo
	{path:url+'img/tangle.png',type:'img',name:'tangle'},//
	{path:url+'img/redTitle.png',type:'img',name:'redTitle'},//
	{path:url+'img/red3.png',type:'img',name:'red3'},//红包
	{path:url+'img/red4.png',type:'img',name:'red4'},//红包1
	{path:url+'img/bigStar.png',type:'img',name:'bigStar'},//星星
	{path:url+'img/circle1.png',type:'img',name:'circle1'},//星星
	{path:url+'img/circle2.png',type:'img',name:'circle2'},//星星
	{path:url+'img/paper.png',type:'img',name:'paper'},//纸
	{path:url+'img/music.png',type:'img',name:'music'},//音乐
];
//全局变量
var backLayer,loadLayer,textLayer,lLayer,imgList,people;
/*
 * 朋友签：0
 * 努力签：1
 * 旅行签：2
 * 爱情签：3
 * 健身签：4
 * 亲情签：5
 * 财富签：6
 * 勇气签：7
 * 健康签：8
 */
var yearName = ["朋友签","努力签","旅行签","爱情签","健身签","亲情签","财富签","勇气签","健康签"];
var yearNumber = 0;
function  setTangles(str){
	base(this,LSprite,[]);
	var self = this;
	self.word1 = new setText(0,15,24,"已有",'#ffd38e');
	self.addChild(self.word1);
	self.tangleWord = [];
	for(var i=0;i<str.length;i++)
	{
		self.tangleWord[i] = new tangles(str[i]);
		self.tangleWord[i].x = self.word1.getWidth()+5+44*i;
		self.addChild(self.tangleWord[i]);
	}
	self.word2 = new setText(self.word1.getWidth()+6+44*i,15,24,"人参加",'#ffd38e');
	self.addChild(self.word2);
}
//方块
function tangles(n){
	base(this,LSprite,[]);
	var self = this;
	self.bitmap = new LBitmap(new LBitmapData(imgList['tangle']));
	self.addChild(self.bitmap);
	self.word = new setText(0,0,32,n,'#fff031');
	self.word.x = (self.bitmap.getWidth() - self.word.getWidth())/2;
	self.word.y = (self.bitmap.getHeight() - self.word.getHeight())/2-2.5;
	self.addChild(self.word);
}
//文档渲染完成
$(function(){
	//关闭红包页面
	$('.close').on('touchstart',function(e){
		e.stopPropagation();
		$('.hitRed').fadeOut();
		setTimeout(function(){
			$('.hitRed').fadeIn(1000);
		},6000);
	});
	//点击跳转页面
	$('.hitRed a').on('touchstart',function(e){
		e.stopPropagation();
		window.location.href = 'http://295995.m.365huaer.com/mobile/newgame/index.jsp?aid=418e1fef0f2343f0871bff99c9f0485c&activityid=81086&wuid=295995&keyversion=0&isFromApiFilter=1';
	});
});
function setRed(id,name){
	$('.ybm p').eq(1).width($('.ybm p').eq(0).width());
	$('.ybl').width($('.ybl').height());
	
}
function showYear(id,name){
	//获取画布对象
    var mainCtx = getCanvasContext('main');
    var maxWidth = mainCtx.width;
    var maxHeight = mainCtx.height;
    mainCtx.clearRect(0,0,1000,1000);
    //获取图片的实际路径
    var starImg = new Image();
    starImg.src = $('#year>img').attr('src');
    //合成
    starImg.onload = function() {
    	//先把图片绘制在这里
    	mainCtx.drawImage(starImg, 0, 0, 750, 1207);
    	var headImg = new Image();
    	headImg.src = $('.ybl>img').attr('src');
    	headImg.onload = function() {
    		//先把图片绘制在这里
    		mainCtx.drawImage(headImg, 44, 1066, 98, 98);
    		var er = new Image();
    		er.src = $('.ybr>img').attr('src');
    		er.onload = function() {
    			mainCtx.drawImage(er, 615, 1070, 89, 89);
    			saveImageInfo();
    		}
    	}
    	console.log(name);
    	console.log(name.length);
    	var word = new Image();
    	word.src = $('.word img').attr('src');
    	word.onload = function() {
    		if(name.length<=3)
    		{
    			mainCtx.drawImage(word, 277, 1083, 252, 30);
    		}else if(name.length==4){
    			mainCtx.drawImage(word, 282, 1083, 252, 30);
    		}
    		else if(name.length==5){
    			mainCtx.drawImage(word, 312, 1083, 252, 30);
    		}else{
    			mainCtx.drawImage(word, 330, 1083, 252, 30);
    		}
    	}
    	//读取用户的文本
    	if(name) {
    		var str = name;
    		//设置用户文本的大小字体等属性
    		mainCtx.font = "30px Microsoft YaHei";
    		//设置用户文本填充颜色
    		mainCtx.fillStyle = "white";
    		//绘制文字
    		mainCtx.fillText(str, 152, 1108.5);
    		//设置用户文本的大小字体等属性
    		mainCtx.font = "24px Microsoft YaHei";
    		//设置用户文本填充颜色
    		mainCtx.fillStyle = "white";
    		//绘制文字
    		mainCtx.fillText("长按识别二维码测运势", 152, 1142.5);
    	}
    	
    };
	
}
//通过id获取canvas对象
function getCanvasContext(id){
    return document.getElementById(id).getContext("2d");
}
//将画布生成图片
function saveImageInfo() {
    var mycanvas = document.getElementById("main");
    var image = mycanvas.toDataURL("image/jpg");
    $('.setImg').attr('src',image);
}
//添加弹幕

function addDanmu(id,className,data,time){
	$(id).append('<div class="ab '+className+'"></div>');
	var length = 0;
	for(var i=0;i<data.length;i++)
	{
		var html = "";
		html += '<div class="danmu floatl"><nobr><p>'+data[i].open.open_name+'：刚刚抽取了'+yearName[data[i].sign_img]+' '+data[i].content+'</p></nobr>';
		html += '<div class="head"><img src='+data[i].open.open_face+'/></div></div>';
		$('.'+className).append(html);
		
		length += (parseInt($('.'+className).find('.danmu').eq(i).width())+32);
	}
	for(var i=0;i<data.length;i++)
	{
		var html = "";
		html += '<div class="danmu floatl"><nobr><p>'+data[i].open.open_name+'：刚刚抽取了'+yearName[data[i].sign_img]+' '+data[i].content+'</p></nobr>';
		html += '<div class="head"><img src='+data[i].open.open_face+'/></div></div>';
		$('.'+className).append(html);
		
		length += (parseInt($('.'+className).find('.danmu').eq(i).width())+32);
	}
	$('.'+className).append('<div class="clearl"></div>');
	$('.'+className).width(length);
	$('.'+className).css('left',$(window).width());
	var start = $(window).width();
	var cTween = setInterval(function(){
		start-=0.5;
		if(start==(-length/2)){
			start=0;
			$('.'+className).css('left',start+'px');
		}else{
			$('.'+className).css('left',start+'px');
		}
	},time);
}