/*1.进度显示功能*/
/*不显示转圈效果*/
NProgress.configure({
    showSpinner: false
});
/*在ajax开始请求的时候  把进度条显示出来*/
$(window).ajaxStart(function(){
    NProgress.start();
});
/*在ajax结束请求的时候  把进度条完成*/
$(window).ajaxStart(function(){
    NProgress.done();
});
/*2.左菜单的显示和隐藏*/
$('[data-menu]').on('click',function(){
    $('.ad_aside').toggle();
    $('.ad_section').toggleClass('menu');
});
/*3.菜单的选中*/
$('[data-cd-type="'+$('[data-cd]').data('cd')+'"]').addClass('now');

