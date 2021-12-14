$(function(){
	// 初始化
	$("#zhongwen").addClass("dada")
	$("#ios2").css("display","none")
	//
	$(".zs_l_b1 li a").click(function(){
		$(this).addClass("dada").parent().siblings().children("a").removeClass("dada")
	})
	$("#yinwen").click(function(){
		$("#ios2").css("display","block").siblings("#ios1").css("display","none")
	})
	$("#zhongwen").click(function(){
		$("#ios1").css("display","block").siblings("#ios2").css("display","none")
	})
})