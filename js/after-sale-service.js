$(function(){
	//初始化
	$(".shfw li a:eq(0)").addClass("dada")
	$("#n3v2").css("display","none")
	$(".shfw li a").click(function(){
		$(this).addClass("dada").parent().siblings().children("a").removeClass("dada")
	})
	$(".shfw li a:eq(0)").click(function(){
		$("#n3v1").css("display","block").siblings("#n3v2").css("display","none")
	})
	$(".shfw li a:eq(1)").click(function(){
		$("#n3v2").css("display","block").siblings("#n3v1").css("display","none")
	})
	
	
	
	$(".rz_t_m ul li:eq(0) a").addClass("az")
	$(".rz_t_m ul li").click(function(){
		$(this).children("a").addClass("az").parent("li").siblings().children("a").removeClass("az")
	})
})