// JavaScript Document

$(document).ready(function(){
  var menuBtn = $('.menuBtn');
  function smpNavi() {
	$('#gnaviWrap').toggleClass('open');
	$('.menuBtn').toggleClass('close-btn');
	$('body').toggleClass('fixed');
  }

  // リスナー
  menuBtn.on('click', smpNavi);
});


//スムーススクロール
$(function(){
   var notList = '#back_to_top .js-back_to_top, ul.newsCtgList li a';
   var headerHight = 200;
   $('a[href^="#"]').not(notList).click(function() {
		var speed = 400; //ここはお好きな数値に変えてください
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top-headerHight;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
   });
});


//go top
$(function() {
  var topBtn = $('#back_to_top');    
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.addClass('sc');
		} else {
			topBtn.removeClass('sc');
		}
	});
  //スクロールしてトップ
  topBtn.click(function () {
	$('body,  html').animate({
		scrollTop: 0
	},   500);
	return false;
  });
});


var tax = 110; //消費税10%
var base = 100;
$(function() {
	$('.taxin').each(function(){
		var a = $(this).text(); //数値を取得
		var c = parseInt( a.replace(/￥|,/g, ''), 10); //カンマを取って数値化
		var d = c * tax; //消費税計算
		var e = Math.ceil(d / base);
		var price = String(e).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
		$(this).text('' + price + '円（税込）');
	});
});




// アニメーションエフェクト
$(window).on('load', function(){
	var $deferredAnim = $.Deferred( function( deferredAnim ){
		//thenでファンクション名を繋げる  
		deferredAnim.then(fadein)
		.then(fadein02)
		.then(fadein03)
	});
 
	//実行
	$deferredAnim.resolve();
});
function fadein(){
  $('.fadein').addClass('show');
}
function fadein02(){
  setTimeout(function(){
	$('.fadein02').addClass('show');
  }, 600);
}
function fadein03(){
  setTimeout(function(){
	$('.fadein03').addClass('show');
  }, 1000);
}


$(window).on("load scroll resize", function () {
	var scPos = $(window).scrollTop();
	var wh = $(window).height();
  
	$(".fade").each(function (i) {
		var tg = $(this).offset().top - wh * 0.9;

		if (scPos > tg) {
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});

	$(".upfade, .sclin_right, .sclin_left").each(function (i) {
		var tg = $(this).offset().top - wh * 0.9;

		if (scPos > tg) {
			$(this).addClass("scrollin");
		} else {
			$(this).removeClass("scrollin");
		}
	});
});

