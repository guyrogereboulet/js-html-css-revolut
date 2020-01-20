$(document).ready(
  function () {
   $(".parent-dropdown > a.accounts").hover(
     function () {
       $(this).next(".dropdown").toggleClass("active");
     }
   );
  }

  function () {
   $(".parent-dropdown > a.prodotti").hover(
     function () {
       $(this).next(".dropdown").toggleClass("active");
     }
   );
  }


);
