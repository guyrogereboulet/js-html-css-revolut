$(document).ready(
  function () {
   $("li.parent-dropdown").hover(
     function () {
       $(this).children(".dropdown").toggleClass("active");
     }
   );
 }
);
