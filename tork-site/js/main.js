$(document).ready(function(){

//<--------- language select ----------->
 $(".default_language_option").click(function(){
   $(this).parent().toggleClass("active");
 })
 $(".select_language_ul li").click(function(){
     var current_language = $(this).html();
     $(".default_language_option li").html(current_language);
     $(this).parent().parent().removeClass("active");
   
 })

   
 $(".default_option").click(function(){
  $(this).parent().toggleClass("active");
})
$(".select_ul li").click(function(){
    var current_language = $(this).html();
    $(".default_option li").html(current_language);
    $(this).parent().parent().removeClass("active");
  
})

 $('.slider').slick({
    prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
    dots:true,
     autoplay:true,
});
});