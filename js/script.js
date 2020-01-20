$(document).ready(
  function () {
   $(".parent-dropdown > a.accounts").hover(
     function () {
       $(this).next(".dropdown").toggleClass("active");
     }
   );
  }
);
