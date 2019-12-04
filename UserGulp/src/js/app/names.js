/**
 * Created by iwen on 2017/1/11.
 */

$(function () {
    //pagetwo get name
    $('.mynameinput input').bind('input', function() {

        if($(".mynameinput input").val().length >0){
            $(".namebutton").attr("src","images/btnyes.png");
        }else{
            $(".namebutton").attr("src","images/btnno.png");
        }
    });
    //修改第二页被挤压问题
    $(".bg2").css("height",$(window).innerHeight()-($(window).innerHeight()*0.04));
    $(".pagetwo").css("height",$(window).innerHeight());
    $(".pageone").css("height",$(window).innerHeight());
    $(".pagethree").css("height",$(window).innerHeight());

    //解决第二页显示第一页内容问题
    $(".mynameinput input").focus(function () {
        //$(".luckborder").hide();
        //$(".year2017").hide();
        //$(".pagethree").hide();
        //$(".pageone").hide();
    });

    $(".mynameinput input").blur(function () {
        //$(".luckborder").show();
        //$(".year2017").show();
        //$(".pagethree").show();
        //$(".pageone").show();
    });

    //点击屏幕失去焦点
    //$(".pagetwo").click(function () {
    //    $(".mynameinput input").blur();
    //});


    //pagethree get name and lucky
    $(".yourname").text("张三");
    $(".c1text").text("考场心不心不");
    $(".c2text").text("考场心心心不");
    $(".lucktext").text("学业运");

    //loading
    setTimeout(function () {
        $(".loading").hide();
    },5000);

});