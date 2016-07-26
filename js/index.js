//*******************nav*******************************
function tab_nav(){
	var oNavList = document.getElementById('nav_list');
	var aAList = oNavList.getElementsByTagName('a');
	var aLiList = oNavList.getElementsByTagName('li');

	for(var i=0;i<aAList.length;i++){
		aAList[i].index = i;
		aAList[i].onmouseover = function (){
			for(var j=0;j<aAList.length;j++){
				aAList[j].style.color = '#656565';
				aLiList[j].className = '';
			}
			this.style.color = '#38adff';
			aLiList[this.index].className = 'active_1';
		}
	};
};
//*********************************************************
function carousel(){
	var oNext = document.getElementById('next');
	var oPre = document.getElementById('pre');
	var oCarousel = document.getElementsByClassName('carousel_view')[0];
	var oCarouselBtn = document.getElementsByClassName('carousel_control_btn')[0];
	var aFiguren = document.getElementsByClassName('figure');
	var aControl = document.getElementsByClassName('control');
	var num = 0;
	var timer1 = '';

	timer1 = setInterval(function(){
		next();
	},2000);
	oCarousel.onmouseover =function(){
		oCarouselBtn.style.display = 'block';
		clearInterval(timer1);
	};
	oCarousel.onmouseout =function(){
		oCarouselBtn.style.display = 'none';
		timer1 = setInterval(function(){
			next();
		},2000);
	};
	oNext.onclick = function(){
		next();
	};
	oPre.onclick = function(){
		num--;
		if (num<0) {
			num=aFiguren.length-1;
		}
		for(var i=0;i<aFiguren.length;i++){
			aControl[i].style.background = '#999';
			aFiguren[i].style.display = 'none';
		}
		aControl[num+1].style.background = '#fff';
		if(num==3){
			aControl[5].style.background ="#999"
		}
		aFiguren[num].style.display = 'block';
	};	
	function next(){
		num++;
		if(num>aFiguren.length-1){
			num=0;
			if(num==0){
				aControl[4].style.background = '#fff';
			};
		};
		for(var i=0;i<aFiguren.length;i++){
			aControl[i].style.background = '#999';
			aFiguren[i].style.display = 'none';
		}
		aControl[num+1].style.background = '#fff';
		if(num==0){
			aControl[5].style.background ="#999"
		}
		aFiguren[num].style.display = 'block';
	};
};
//*********************************************************