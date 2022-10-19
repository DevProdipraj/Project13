 $(document).ready (function(){
   //mixitup for (portfolio section) 
    var mixer = mixitup(".row");
 }) 
 $(window).on("scroll",function(){
   if($(window) .scrollTop()){
       $("nav").addClass("sticky");
   }
   else{
       $("nav").removeClass("sticky");
   }
})
function openNav() {
  document.getElementById("mayNav").style.width = ("100%");
}
function closeNav() {
  document.getElementById("mayNav").style.width = ("0%");
}
